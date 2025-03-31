import { world, system } from "@minecraft/server";

world.beforeEvents.chatSend.subscribe((ev) => {
    const { sender, message } = ev;

    if (message.startsWith("!")) {
        ev.cancel = true;

        system.runTimeout(() => {
            const args = message.slice(1).split(" ");

            if (args[0] === "tp") {
                sender.runCommandAsync("tp @s @a[name=water_challenge]");
                sender.sendMessage("すまない先生にテレポートしました。");
            }
        }, 0);
    }
});