import { system, CommandPermissionLevel, CustomCommandParamType } from "@minecraft/server";
import { sdaFatalPoison, sdaHelp, sdaTestfor, sdaWarp } from "./cmd";

system.beforeEvents.startup.subscribe(ev => {
    ev.customCommandRegistry.registerCommand({
        name: "sda:warp",
        description: "実行したら監視人物にワープ",
        permissionLevel: CommandPermissionLevel.Any,
        mandatoryParameters: [
            {
                name: "target",
                type: CustomCommandParamType.String
            }
        ],
        optionalParameters: [
            {
                name: "invisibility",
                type: CustomCommandParamType.Boolean
            }
        ]
    }, (origin, arg, arg2) => sdaWarp(origin, arg, arg2));

    ev.customCommandRegistry.registerCommand({
        name: "sda:help",
        description: "説明文を表示",
        permissionLevel: CommandPermissionLevel.Any,
        mandatoryParameters: [],
        optionalParameters: []
    }, (origin) => sdaHelp(origin));

    ev.customCommandRegistry.registerCommand({
        name: "sda:testfor",
        description: "監視人物がいるか検索",
        permissionLevel: CommandPermissionLevel.Any,
        mandatoryParameters: [],
        optionalParameters: []
    }, (origin) => sdaTestfor(origin));

    ev.customCommandRegistry.registerCommand({
        name: "sda:fp",
        description: "監視人物に毒の魔法をかける",
        permissionLevel: CommandPermissionLevel.Any,
        mandatoryParameters: [],
        optionalParameters: []
    }, (origin) => sdaFatalPoison(origin));
});