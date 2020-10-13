import * as React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
	to { 
		transform: rotate(1turn)
	}
`;

const Stick = styled.div``;

const Wrapper = styled.span`
    height: 1.25rem;
    width: 1.25rem;
    display: inline-block;
    font-size: 3px;
    position: absolute;
    overflow: hidden;
    pointer-events: none;
    top: 25%;
    left: 42%;
    animation: ${spin} 1s infinite steps(8);
    transition: opacity 0.5s ease-out 0.2s;
    transform-origin: 3.25em;

    &:before,
    &:after,
    ${Stick}:before, ${Stick}:after {
        top: 0;
        left: 3em;
        background-color: #999;
        border-radius: 0.2em;
        content: "";
        height: 2.5em;
        position: absolute;
        width: 0.5em;
        box-shadow: 0 4em #eee;
        transform-origin: 50% 3.25em;
    }

    &:after {
        background-color: #aaa;
        transform: rotate(45deg);
    }

    ${Stick}:after {
        background-color: #ccc;
        transform: rotate(135deg);
    }

    ${Stick}:before {
        background-color: #bbb;
        transform: rotate(90deg);
    }
`;

export const Loader = () => (
    <Wrapper>
        <Stick />
    </Wrapper>
);
