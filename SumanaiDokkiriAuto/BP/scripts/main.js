import { world, system } from "@minecraft/server";

world.beforeEvents.chatSend.subscribe((ev) => {
    const { sender, message, player } = ev;

    if (message.startsWith("!")) {
        ev.cancel = true;

        system.runTimeout(() => {
            const args = message.slice(1).split(" ");

            if (args[0] === "tp") {
                player.runCommandAsync("tp @s @a[name=water_challenge]");
                sender.sendMessage("すまない先生にテレポートしました。");
            } else if (args[0] === "locate") {
                player.runCommandAsync("function locate");
            } else if (args[0] === "fp") {
                player.runCommandAsync("function fp");
            }
        }, 0);
    }
});