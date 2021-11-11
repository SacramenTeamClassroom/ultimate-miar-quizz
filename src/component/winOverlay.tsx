import { h } from "tsx-dom";
import { init } from "../manager";
import { Overlay } from "./overlay";

export class WinOverlay extends Overlay {
    override render() {
        this.dom =  <div id="win">
                        <div>
                            <h2>Tu as gagné !</h2>
                            <p>Voici un cookie rien que pour toi!</p>
                            <a href="https://orteil.dashnet.org/cookieclicker/">🍪</a>
                            <input class="btn" type="button" name="play" value="Retour à l'accueil!"/>
                        </div>
                    </div>;
        const btn = this.dom.querySelector("input") as HTMLInputElement;
        btn.onclick = () => {
            init();
            this.hide();
        }
    }
}
