/** @jsxImportSource @emotion/react */
import * as s from "./style";

const StoryComponent = () => {
    return (
        <div css={s.layout}>
            <div>
                <div css={s.box}>
                    <ul>
                        <li css={s.storyBox}></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default StoryComponent;
