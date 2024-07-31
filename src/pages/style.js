import { css } from "@emotion/react";

export const layout = css`
    width: 1196px;
    height: 100vh;
    margin-left: 244px;
    display: flex;
    justify-content: center;
`;

export const contentLayout = css`
    width: 630px;
    height: 100%;
    background-color: aliceblue;

    & > div {
        width: 630px;
        height: 100%;
        margin-top: 16px;
    }
`;

export const recommendLayout = css`
    width: 319px;
    height: 100%;
    padding-left: 64px;
    background-color: wheat;
`;
