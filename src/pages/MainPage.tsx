/** @jsxImportSource @emotion/react */
import * as s from "./style";
import SideBarComponent from "../components/SideBarComponent/SideBarComponent";

const MainPage = () => {
    return (
        <div css={s.layout}>
            <SideBarComponent />
        </div>
    );
};

export default MainPage;
