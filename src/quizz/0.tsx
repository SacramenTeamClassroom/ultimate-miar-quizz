import { h } from "tsx-dom";
import { correct, wrong } from "../manager";

/**
 * A screen with 4 button with implausible answer to the question
 * you must click the 0 in the question title to go to the next question
 * 
 * @returns all element which compose the screen
 */
export function question0():HTMLElement[] {
    const question = <h2>Question <span>0</span>: Combien de pieds possède un arraigné?</h2> as HTMLButtonElement;
    question.querySelector("span")!.onclick = correct;
    const result:HTMLElement[] = [question];
    for (var i = 0;i<4;i++) {
        const answer = 
        <div>
            <input class="btn" type="button" value={4+2*i}/>
        </div> as HTMLElement;
        answer.querySelector("input")!.onclick = wrong;
        result.push(answer);     
    }
    return result;
}