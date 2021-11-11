import { h } from "tsx-dom";
import { correct, wrong } from "../manager";

/**
 * A screen with 4 button with all card game symbol
 * with one of them changing to a star on hover, see css.
 * Click this one to go the next question.
 * 
 * @returns all element which compose the screen
 */
export function question1():HTMLElement[] {
    const question = <h2>Question <span>1</span>: Lequel de ces symboles n'est pas dans un jeu de carte?</h2> as HTMLButtonElement;
    question.querySelector("span")!.onclick = wrong;
    const result:HTMLElement[] = [question];
    for (var i = 0;i<4;i++) {
        const answer:HTMLElement =  <div class="btn swapEmoji">{String.fromCodePoint(9828+i)}</div>;
        answer.onclick = i==1 ? correct : wrong;
        result.push(answer);     
    }
    return result;
}