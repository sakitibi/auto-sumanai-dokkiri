import * as server from "@minecraft/server";

const INTERVAL_SEC = 1;
const name = water_challenge;

system.runInterval(() => {
    const players = world.getAllPlayers()

    for (const player of players) {
        let dimension = player.dimension.id
        world.getDimension(dimension).runCommandAsync(`effect @a[name=${name}] weakness 1 2 true`)
        world.getDimension(dimension).runCommandAsync(`effect @a[name=${name}] slowness 1 2 true`)
    }

}, INTERVAL_SEC * 20)