import { css } from "@emotion/react";

export const layout = css`
    width: 630px;
    height: 101px;
    margin-bottom: 24px;
    background-color: tan;

    & > div {
        width: 630px;
        height: 101px;
    }
`;

export const box = css`
    width: 630px;
    height: 85px;
    padding: 0 8px 0 8px 0;

    & > ul {
        display: flex;
        align-items: center;
    }
`;

export const storyBox = css`
    list-style: none;
    width: 66px;
    height: 85px;
    background-color: oldlace;
`;
