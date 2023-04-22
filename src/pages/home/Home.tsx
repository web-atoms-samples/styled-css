import XNode from "@web-atoms/core/dist/core/XNode";
import styled from "@web-atoms/core/dist/style/styled";
import { ContentPage } from "@web-atoms/web-controls/dist/mobile-app/MobileApp";

    /** This is the way you can install global styles on the page */
    styled.css `
        &:root {
            --accent-color: darkorange;
            --accent-text-color: white;
        }
        &* {
            box-sizing: border-box;
        }
    `.installGlobal();

const homeCSS = styled.css `
    display: flex;
    flex-direction: column;
    gap: 10px;
`.installLocal();

export default class HomePage extends ContentPage {

    public async init() {
        this.renderer = <div class={homeCSS}>
            <div>
                Global styles are declared on this page. Please note,
                global styles must contain & before the the selector.
            </div>
            <div>Ideally global styles should only be declared on the
                root/index page/component.
            </div>
        </div>;
    }

}
