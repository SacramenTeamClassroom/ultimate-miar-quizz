import { h } from "tsx-dom";
import { correct, wrong } from "../manager";


/**
 * A screen with just a text input where you must enter the
 * birth year of rick astley to go to the next question
 * clicking on the input make you lose focus on it
 * and open a browser tab with a rick roll
 * 
 * Tip: you must select the input with tab index and press 
 * when you succesfully enter the correct date
 * 
 * @returns all element which compose the screen
 */
export function question3():HTMLElement[] {
    const question = <h2>Question <span>3</span>: Quel est l'année de naissance de rick astley ?</h2> as HTMLButtonElement;
    const input = <input type="text" /> as HTMLInputElement;
    input.onclick = () => {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        input.blur();
        input.value = "";
    }
    input.addEventListener("keyup", ({key}) => {
        if (key === "Enter") {
            if (input.value.trim() == "1966") return correct();
            wrong();                   
        }
    });
    return [question,input];
}