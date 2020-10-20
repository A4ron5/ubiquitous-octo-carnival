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

export const putCopyRequestInBufferFx = createEffect<RequestType, string>(
    async (request) => {
        if ("navigator" in window) {
            console.log(request);
            try {
                await navigator.clipboard.writeText(request);
                return "Скопировано";
            } catch (e) {
                return "Не удалось скопировать";
            }
        }
    }
);

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
            data: "test",
            id: 1,
            open: false,
            status: "fail"
        },
        {
            name: "action.remove",
            data: "test",
            id: 2,
            open: false,
            status: "fail"
        },
        {
            name: "action.put",
            data: "test",
            id: 3,
            open: false,
            status: "success"
        },
        {
            name: "action.store",
            data: "test",
            id: 4,
            open: false,
            status: "fail"
        },
        {
            name: "action.rename",
            data: "test",
            id: 5,
            open: false,
            status: "fail"
        },
        {
            name: "action.replace",
            data: "test",
            id: 6,
            open: false,
            status: "success"
        }
    ];
}

$historyLine.watch(console.log);
