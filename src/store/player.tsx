export const maxLive = 3;

export var player = initial();

export function initial() {
    return {
        live: maxLive,
        score: 0
    }
}
export function playerReset() {
    player = initial();
}

