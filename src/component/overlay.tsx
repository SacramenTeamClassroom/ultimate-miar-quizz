import { h } from "tsx-dom";

/**
 * an overlay dom element which can be hide
 */
export class Overlay {

    dom:HTMLElement = <div></div>;
    constructor() {
        this.render();
        this.dom.classList.add("overlay");
    }
    /**
     * should be override to change the change the dom of the element
     */
    render() {
    }
    show() {
        this.dom.setAttribute("show","");
    }
    hide() {
        this.dom.removeAttribute("show");
    }
}