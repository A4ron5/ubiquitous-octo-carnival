import * as React from "react";
import { useStore } from "effector-react";
import styled, { css } from "styled-components";

import { handleChanged, $textarea, $output } from "features/text-area/model";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    textarea {
        width: 48%;
        min-height: 400px;
        margin: 30px 0 15px 0;
        outline: none;
    }

    textarea:first-child {
        margin-left: 15px;
        ${({ error }) =>
            error &&
            css`
                border: 1px solid red;
            `}
    }

    textarea:last-child {
        margin-right: 15px;
    }
`;

export const TextArea = () => {
    const { error, data } = useStore($textarea);
    const output = useStore($output);

    return (
        <Wrapper error={error}>
            <textarea onChange={handleChanged} value={data} />
            <textarea value={output} disabled />
        </Wrapper>
    );
};
