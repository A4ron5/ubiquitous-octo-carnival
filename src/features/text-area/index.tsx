import * as React from "react";
import { useStore } from "effector-react";

import { handleChanged, $textarea, $output } from "./model";
import { Wrapper, InputArea, OutputArea } from "./ui";

export const TextArea = () => {
    const { error, data } = useStore($textarea);
    const output = useStore($output);

    return (
        <Wrapper error={error}>
            <InputArea onChange={handleChanged} value={data} />
            <OutputArea value={output} disabled />
        </Wrapper>
    );
};
