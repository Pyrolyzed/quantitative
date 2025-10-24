ServerEvents.recipes(event => {
    event.replaceInput({ mod: "toms_storage" }, "minecraft:quartz", "minecraft:iron_ingot")
    event.replaceInput({ mod: "toms_storage" }, "#c:ender_pearls", "toms_storage:inventory_cable")
    event.replaceInput({ mod: "toms_storage" }, "minecraft:diamond", "minecraft:gold_ingot")
    event.replaceInput({ mod: "toms_storage" }, "minecraft:comparator", "minecraft:repeater")
    event.replaceInput({ mod: "toms_storage" }, "minecraft:glowstone_dust", "minecraft:redstone")
})