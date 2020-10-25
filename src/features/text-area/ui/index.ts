import styled, { css } from "styled-components";

const textareaCommon = css`
    resize: none;
    border: 1px solid var(--color-border);
`;

export const InputArea = styled.textarea`
    ${textareaCommon};
`;

export const OutputArea = styled.textarea`
    ${textareaCommon};

    background: var(--color-background);
`;

export const Wrapper = styled.div`
    display: flex;
    height: 100%;
    padding: 15px 0;
    justify-content: space-between;

    textarea {
        width: 48%;
        outline: none;
    }

    textarea:first-child {
        margin-left: 15px;
        ${({ error }: { error: boolean }) =>
            error &&
            css`
                border: 1px solid red;
            `}
    }

    textarea:last-child {
        margin-right: 15px;
    }
`;
