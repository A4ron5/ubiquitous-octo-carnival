import * as React from "react";

import { Profile } from "features/profile";
import { Logout } from "features/log-out";
import { HistoryLine } from "features/history-line";
import { GithubLink } from "features/github";
import { SendButton } from "features/button/send";
import { FormatButton } from "features/button/format";
import { TextArea } from "features/text-area";

import { HomeTemplate } from "ui/templates/home/home";

import { Header, Main, Footer } from "pages/home/ui";

import { Logotype } from "ui/molecules";
import { Title } from "ui/atoms";

export const HomePage = () => {
    return (
        <HomeTemplate>
            <Header>
                <Logotype />
                <Title>API-консолька</Title>
                <Profile />
                <Logout />
            </Header>
            <HistoryLine />
            <Main>
                <TextArea />
            </Main>
            <Footer>
                <SendButton />
                <GithubLink />
                <FormatButton />
            </Footer>
        </HomeTemplate>
    );
};
