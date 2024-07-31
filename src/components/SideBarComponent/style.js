import { css } from "@emotion/react";

export const layout = css`
    width: 245px;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
`;

export const logoLayout = css`
    box-sizing: border-box;
    width: 245px;
    height: 100%;
    padding: 8px 12px 20px 12px;
    border-right: 1px solid rgba(219, 219, 219, 1);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const logoBox = css`
    width: 220px;
    height: 92px;
`;

export const logo = css`
    width: 196px;
    height: 32px;
    padding: 25px 12px 16px 12px;
    margin-bottom: 19px;
`;

export const menuLayout = css`
    width: 220px;
    height: auto;
`;

export const menuBox = css`
    width: 220px;
    height: 56px;
    display: flex;
    align-items: center;

    & > a {
        text-decoration: none;
        color: black;
    }
`;

export const textBox = css`
    width: 196px;
    height: 24px;
    padding: 12px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    transition: 0.1s all ease-in-out;

    &:hover {
        background-color: rgb(239, 239, 239);
    }
`;

export const icon = css`
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
`;

export const menuTitle = css`
    height: 24px;
    padding-left: 16px;
    display: flex;
    align-items: center;
    font-size: 16px;
`;
