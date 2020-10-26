import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    height: 50px;
    overflow: hidden;

    border-top: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);

    &:after {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 100px;
        background: linear-gradient(
            90deg,
            transparent 0%,
            var(--color-app-background) 110%
        );
        z-index: 10;
        content: "";
    }
`;
