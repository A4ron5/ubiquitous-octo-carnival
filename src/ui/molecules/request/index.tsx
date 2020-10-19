import * as React from "react";
import styled from "styled-components";

const Status = styled.div`
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.2);
    width: 10px;
    height: 10px;
    background-color: ${({ status }) => (status ? "#30b800" : "#cf2c00")};
`;

const Name = styled.span``;

const Dots = styled.div`
    position: relative;
    width: 4px;
    height: 4px;
    top: 0;
    background-color: var(--color-logotype);
    border-radius: 50%;
    opacity: ${({ open }) => (open ? "1" : "0.7")};

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
    border-radius: 7px;

    ${Status} {
        margin-right: 5px;
    }

    ${Name} {
        margin-right: 10px;
    }
`;

const Action = styled.li`
    padding: 10px 0;
    position: relative;
`;

const Menu = styled.ul`
    position: absolute;
    border-radius: 7px;
    margin: 0;
    padding: 0.3125rem 0.625rem;
    list-style: none;
    background: var(--color-background);
    left: 0;
    right: 0;
    top: 28px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled.div`
    display: flex;
    position: relative;
    background: var(--color-background-primary);
    flex-direction: column;
    width: fit-content;
    align-items: center;
    padding: 0.3125rem 0.625rem;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    z-index: 5;
`;

export const Request = (props) => {
    const { status, name, open, clickOpen } = props;
    return (
        <Wrapper>
            <Info>
                <Status status={status} />
                <Name>{name}</Name>
                <DotsButton onClick={clickOpen}>
                    <Dots open={open} />
                </DotsButton>
            </Info>
            <Menu>
                <Action>Выполнить</Action>
                <Action>Скопировать</Action>
                <Action>Удалить</Action>
            </Menu>
        </Wrapper>
    );
};
