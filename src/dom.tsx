import { LoseOverlay } from "./component/loseOverlay";
import { WinOverlay } from "./component/winOverlay";

/**
 * A collection of dom element reference
 * that can be import in other part of the application
 */

export const main = document.querySelector("main") as HTMLElement;
export const divLive = main.querySelector("div#live") as HTMLElement;
export const sectionQuizz = main.querySelector("section#quizz") as HTMLElement;
export const lose = new LoseOverlay();
export const win = new WinOverlay();

document.body.appendChild(lose.dom);
document.body.appendChild(win.dom);