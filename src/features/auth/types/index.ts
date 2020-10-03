import { FormEvent } from "react";

export type SubmittedEvent = FormEvent;
export type SetFieldEvent = {
    key: string;
    value: string;
};
