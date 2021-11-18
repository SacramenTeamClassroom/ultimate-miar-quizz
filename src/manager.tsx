import { divLive, lose, sectionQuizz, win } from "./dom";
import { start } from "./quizz/start";
import { question0 } from "./quizz/0";
import { question1 } from "./quizz/1";
import { question2 } from "./quizz/2";
import { question3 } from "./quizz/3";
import { h } from "tsx-dom";
import { maxLive, resetState, state } from "./store/state";

/**
 * A quizz screen is just a function that return an array of HTMLElement
 */
export type QuizzScreen = () => HTMLElement[];

/**
 * The array of quizz screen in order
 */
 const quizzScreens:QuizzScreen[] = [
    start,
    question0,
    question1,
    question2,
    question3
]

var { player } = state;

/**
 * Clear the current quizz screen and append the new one
 */
export function drawCurrent() {
    sectionQuizz.innerHTML = "";
    quizzScreens[state.current]().forEach(d=>sectionQuizz.appendChild(d));
}

/**
 * Initialization of the manager that called on app creation and restart
 * set current screen to the start one
 * reset player stat
 * draw the start screen
 * and draw live
 */
export function init() {
    drawCurrent();
    drawLive();
    loseLive(0);
}

export function reset() {
    resetState();
    init();
}

/**
 * Draw the next quizz screen
 * Or show the win overlay
 */
export function next() {
    state.current++;
    if (state.current<quizzScreens.length) return drawCurrent();
    win.show();

}
/**
 * should be call when the player succesfully 
 * find the right answer to the quizz
 * 
 * For the moment, it simply draw the next quizz screen
 */
export function correct() {
    next();
}

/**
 * should be call when the player choose 
 * the wrong answer to the quizz
 * 
 * For the moment, the player just lose a life
 */
export function wrong() {
    loseLive();
    //next();
}

/**
 * remove n live of the player
 * then add lost attribute to the correct number of 
 * heart html element which will make it slowly fade out
 * 
 * And show lose overlay if the player has 0 live left
 * 
 * @param n the number of live loose
 */
export function loseLive(n=1) {
    player.live-=n;
    for (var i=maxLive-1;i>player.live-1;i--) {
        divLive.children[i].setAttribute("lost","");
    }
    if (player.live == 0) lose.show();

}
//TODO we should component'ify live too
/**
 * clear the heart container and 
 * add "maxLive" filled heart
 * 
 * heart never really disseappear they 
 * become invisible with lost attribute
 */
export function drawLive() {
    divLive.innerHTML = "";
    for (var i=0;i<maxLive;i++) {
        const heart = <div class="heart">🧡</div>;
        divLive.appendChild(heart);
    }
}