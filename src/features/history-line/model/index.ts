import { createEffect, createEvent, createStore, sample } from "effector";

export type RequestType = {
    name: string;
    id: number;
    data: string;
    open: boolean;
    status: string;
};

export const removeRequest = createEvent<number>();
export const openRequestMenu = createEvent<number>();
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
    .on(removeRequest, (histories, id) =>
        histories.filter((item) => item.id !== id)
    )
    .on(openRequestMenu, (histories, id) => {
        return histories.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    open: !item.open
                };
            }
            return item;
        });
    });

sample({
    source: $historyLine,
    clock: copyRequest,
    fn: (source, id) => source.filter((item) => item.id === id)[0],
    target: putCopyRequestInBufferFx
});

function restore() {
    return [
        {
            name: "action.get",
            data: "action.get data",
            id: 1,
            open: false,
            status: "fail"
        },
        {
            name: "action.remove",
            data: "action.remove data",
            id: 2,
            open: false,
            status: "fail"
        },
        {
            name: "action.put",
            data: "action.put data",
            id: 3,
            open: false,
            status: "success"
        },
        {
            name: "action.store",
            data: "action.store data",
            id: 4,
            open: false,
            status: "fail"
        },
        {
            name: "action.rename",
            data: "action.rename data",
            id: 5,
            open: false,
            status: "fail"
        },
        {
            name: "action.replace",
            data: "action.replace data",
            id: 6,
            open: false,
            status: "success"
        }
    ];
}

$historyLine.watch(console.log);
