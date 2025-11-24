import { CustomCommandOrigin, system, world } from "@minecraft/server";
import { helpMessages, name } from "./definition";

export const sdaWarp = (origin:CustomCommandOrigin, arg:string, arg2:boolean) => {
    system.runTimeout(() => {
        origin.sourceEntity?.runCommand(`tp @s @a[name=${String(arg)},c=1]`);
        if (arg2 === true) {
            origin.sourceEntity?.runCommand("effect @s invisibility 60 255 true");
        }
        origin.sourceEntity?.runCommandAsync(`tellraw @s {"rawtext":[{"text":"魔法で${String(arg)}にテレポートして\n透明人間になりました。"}]}`);
    })
}

export const sdaHelp = (origin:CustomCommandOrigin) => {
    system.runTimeout(() => {
        for(let i = 0;i < helpMessages.length;i++){
            origin.sourceEntity?.runCommandAsync(`tellraw @s {"rawtext":[{"text":${helpMessages[i]}}]}`);
        }
    })
}

export const sdaTestfor = (origin:CustomCommandOrigin) => { 
    system.runTimeout(() => {
        const players = world.getAllPlayers();
        let playerNames = [];
        for(let i = 0;i < players.length;i++){
            playerNames[i] = players[i].name;
        }
        for(const playerName of playerNames){
            if(playerName === "water_challenge"){
                origin.sourceEntity?.runCommandAsync('tellraw @s {"rawtext":[{"text":"すまない先生は存在します"}]}');
            }
            if(playerName === "NMNGyuri"){
                origin.sourceEntity?.runCommandAsync('tellraw @s {"rawtext":[{"text":"名前は長い方が有利は存在します"}]}');
            }
        }
    })
}

export const sdaFatalPoison = (origin:CustomCommandOrigin) => {
    system.runTimeout(async() => {
        for(let i = 0;i < name.length;i++){
            const result1 = await origin.sourceEntity?.runCommandAsync(`effect @a[name=${name[i]}] fatal_poison 30 0 true`);
            const result2 = await origin.sourceEntity?.runCommandAsync(`effect @a[name=${name[i]}] instant_damage 1 2 true`);
            const result3 = await origin.sourceEntity?.runCommandAsync(`effect @a[name=${name[i]}] blindness 30 255 true`);
            if(
                result1!.successCount > 0 &&
                result2!.successCount > 0 &&
                result3!.successCount > 0
            ){
                origin.sourceEntity?.runCommandAsync(`tellraw @s {"rawtext":[{"text": "§9ヒェーッヒェッヒェッヒェッ、${name[i]}\nに見つからないように魔の呪文をかけたぜ"}]}`);
            } else {
                origin.sourceEntity?.runCommandAsync(`tellraw @s {"rawtext":[{"text": "§9${name[i]}\nに魔の呪文が効かない!?"}]}`);
            }
        }
    })
}