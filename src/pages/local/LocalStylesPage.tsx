import XNode from "@web-atoms/core/dist/core/XNode";
import styled from "@web-atoms/core/dist/style/styled";
import { ContentPage } from "@web-atoms/web-controls/dist/mobile-app/MobileApp";

/**
 * We recommend creating only single local style per compnent/page. This is just an example.
 * 
 * Ideally we recommend creating local css only for the top component.
 * 
 * Comments inside the styles are not currently supported.
 */

const greenPanelCSS = styled.css `

    color: darkgray;
    margin: 10px;
    border: solid 1px lightgray;
    border-radius: 10px;
    padding: 10px;

    & > header {
        margin: 5px;
        padding: 5px;
        background-color: green;
        color: white;
    }
`.installLocal();

const redPanelCSS = styled.css `

    color: darkgray;
    margin: 10px;
    border: solid 1px lightgray;
    border-radius: 10px;
    padding: 10px;

    & > header {
        margin: 5px;
        padding: 5px;
        background-color: red;
        color: white;
    }
`.installLocal();

export default class LocalStylesPage extends ContentPage {

    public async init() {

        this.renderer = <div>
            <div class={greenPanelCSS}>
                <header>This is in Green color</header>
                <details>This is in normal color.</details>
                <div class={redPanelCSS}>
                    <header>This is in Red color</header>
                    <details>This is in normal color.</details>
                </div>
            </div>
        </div>;

    }

}
