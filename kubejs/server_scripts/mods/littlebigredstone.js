ServerEvents.recipes(event => {
    // Make microchips not cost netherite
    event.replaceInput(
        { output: "#little_big_redstone:microchips" },
        "minecraft:netherite_scrap", 
        "minecraft:diamond"
    )
})