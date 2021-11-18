import { h } from "tsx-dom";
import { reset } from "../manager";
import { Overlay } from "./overlay";


export class LoseOverlay extends Overlay {
    override render() {
        this.dom =  <div id="lose">
                        <h2>Boooouuuhh, vous avez perdu!</h2>
                        <input class="btn" type="button" name="play" value="Retour à l'accueil!"/>
                    </div>;
        const btn = this.dom.querySelector("input") as HTMLInputElement;
        btn.onclick = this.onClick.bind(this);
    }
    onClick() {
        reset();
        this.hide();
    }
}
