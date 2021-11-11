import { h } from "tsx-dom";
import { next } from "../manager";

/**
 * A screen with just a play button that lead
 * to the first question
 * 
 * @returns all element which compose the screen
 */
export function start():HTMLElement[] {
    const dom = <input class="btn" id="start" type="button" name="play" value="play"/> as HTMLButtonElement;
    dom.onclick = next;
    return [dom];
}