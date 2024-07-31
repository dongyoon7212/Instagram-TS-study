/** @jsxImportSource @emotion/react */
import StoryComponent from "../components/MainPageComponents/StoryCoponent/StoryComponent";
import * as s from "./style";

const MainPage = () => {
    return (
        <div css={s.layout}>
            <div css={s.contentLayout}>
                <div>
                    <StoryComponent />
                </div>
            </div>
            <div css={s.recommendLayout}></div>
        </div>
    );
};

export default MainPage;
