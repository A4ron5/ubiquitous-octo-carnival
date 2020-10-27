import { createEffect, createEvent, createStore, sample } from "effector";

export type RequestType = {
    name: string;
    id: number;
    data: string;
    status: string;
};

export const addRequest = createEvent<unknown>();
export const removeRequest = createEvent<number>();
export const copyRequest = createEvent<number>();

export const putCopyRequestInBufferFx = createEffect<RequestType, string>({
    handler: async (request) => {
        if ("navigator" in window) {
            const { data } = request;

            try {
                await navigator.clipboard.writeText(data);
                return "Скопировано";
            } catch (e) {
                return "Не удалось скопировать";
            }
        }
        return "Не удалось скопировать";
    }
});

export const $historyLine = createStore<RequestType[]>(restore());

$historyLine
    .on(addRequest, (histories, request) => {
        const id = histories.length + 2;
        const parsedRequest = JSON.parse(JSON.stringify(request));

        return [
            {
                id,
                data: parsedRequest.result,
                name: parsedRequest.params.action || "error",
                status: parsedRequest.status
            },
            ...histories
        ];
    })
    .on(removeRequest, (histories, id) =>
        histories.filter((item) => item.id !== id)
    );

sample({
    source: $historyLine,
    clock: copyRequest,
    fn: (source, id) => source.filter((item) => item.id === id)[0],
    target: putCopyRequestInBufferFx
});

function restore() {
    const history = localStorage.getItem("historyLine");

    if (history) {
        return JSON.parse(history);
    }

    return [];
}

$historyLine.watch((history) => {
    localStorage.setItem("historyLine", JSON.stringify(history));
});
