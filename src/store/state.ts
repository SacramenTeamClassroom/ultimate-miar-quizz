export type State = {
    player: Player,
    current: number
}

export const maxLive = 3;

export type Player = {
    live: number,
    score: number
}

export function initialPlayer():Player {
    return {
        live: maxLive,
        score: 0
    }
}


export const state = getFromSave() || initial();

export function initial():State {
    return {
        player: initialPlayer(),
        current: 0
    }
}

export function resetState() {
    state.player.live = maxLive;
    state.current = 0;
}

function saveOnExit() {
    window.addEventListener("beforeunload", e => {
        localStorage.setItem("state", JSON.stringify(state));
    });
}

function getFromSave():State | null {
    try {
        const v = localStorage.getItem("state");
        if (!v) return null;
        const json = JSON.parse(v);
        return json;
    } catch (e) {
        return null;
    }
}

saveOnExit();