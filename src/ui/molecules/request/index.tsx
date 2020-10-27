import * as React from "react";
import { Event } from "effector";
import styled, { css } from "styled-components";

import { statuses } from "lib/status";
import { RequestType } from "features/history-line/model";

type RequestProps = RequestType & {
    open: boolean;
    removeRequest: Event<number>;
    copyRequest: Event<number>;
};

type StatusProps = {
    status: boolean;
};

type DotsProps = {
    open: boolean;
};

type ActionProps = {
    remove: boolean;
    copy: boolean;
};

const Status = styled.div`
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.2);
    width: 10px;
    height: 10px;
    background-color: ${({ status }: StatusProps) =>
        status ? "#30b800" : "#cf2c00"};
`;

const Name = styled.span``;

const Dots = styled.div`
    position: relative;
    width: 4px;
    height: 4px;
    top: 0;
    background-color: var(--color-logotype);
    border-radius: 50%;
    opacity: ${({ open }: DotsProps) => (open ? "1" : "0.7")};

    &:before,
    &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        background-color: inherit;
        border-radius: inherit;
    }

    &:before {
        top: 7px;
    }

    &:after {
        top: 14px;
    }
`;

const DotsButton = styled.div`
    width: 5px;
    height: 18px;
    position: relative;
    cursor: pointer;
`;

const Info = styled.div`
    display: flex;
    align-items: center;
    border-radius: 7px;

    ${Status} {
        margin-right: 5px;
    }

    ${Name} {
        margin-right: 10px;
    }
`;

const Action = styled.li`
    position: relative;
    cursor: pointer;
    padding: 0.625rem 0.625rem;
    margin: 0.3125rem 0;

    &:hover {
        background: green;
        color: #fff;
    }

    ${({ copy }: Partial<ActionProps>) =>
        copy &&
        css`
            &:hover {
                background: blue;
            }
        `}

    ${({ remove }: Partial<ActionProps>) =>
        remove &&
        css`
            &:hover {
                background: red;
            }
        `}
`;

const Menu = styled.ul`
    position: absolute;
    border-radius: 7px;
    margin: 0;
    padding: 0;
    list-style: none;
    background: var(--color-background);
    left: 0;
    right: 0;
    top: 28px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled.div`
    display: inline-flex;
    position: relative;
    background: var(--color-background-primary);
    flex-direction: column;
    width: fit-content;
    align-items: center;
    padding: 0.3125rem 0.625rem;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    z-index: 5;
    margin-right: 0.625rem;

    &:last-child {
        margin-right: 0;
    }
`;

export const Request = (props: RequestProps) => {
    const { status, name, id, open, removeRequest, copyRequest } = props;

    if (status === "done" || status === "fail") {
        return (
            <Wrapper>
                <Info>
                    <Status status={statuses[status]} />
                    <Name>{name}</Name>
                    <DotsButton>
                        <Dots open={open} />
                    </DotsButton>
                </Info>
                {open && (
                    <Menu>
                        <Action>Выполнить</Action>
                        <Action onClick={() => copyRequest(id)} copy>
                            Скопировать
                        </Action>
                        <Action onClick={() => removeRequest(id)} remove>
                            Удалить
                        </Action>
                    </Menu>
                )}
            </Wrapper>
        );
    }

    return null;
};
