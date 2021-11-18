import { h } from "tsx-dom";
import { correct, next, wrong } from "../manager";

/**
 * A screen with just a shield emoji
 * you must click on it 100 time in 1 minute to destroy it
 * 
 * the shield regen 2 hp per second
 * 
 * @returns all element which compose the screen
 */
export function question2():HTMLElement[] {
    const question = <h2>Challenge <span>2</span>: Détruit le bouclier en 1 minute</h2> as HTMLButtonElement;
    question.querySelector("span")!.onclick = wrong;
    const shield = <div class="shield">🛡️</div>;
    const hpMax = 100;
    var hp = hpMax;
    const regen = setInterval(() => {
        if (hp<hpMax) hp++;
    },500);
    const timeout = setTimeout(() => {
        wrong();
        clearInterval(regen);
        next();
    },60000);
    shield.onclick = () => {
        hp--;
        if (hp<0) {
            shield.onclick = ()=>{};
            correct();
            clearTimeout(timeout);
            clearInterval(regen);
        }
    }
    
    return [question,shield];
}