ServerEvents.recipes(event => {
    // Nerf fertile lily pad recipe
    event.remove({ output: "reliquary:fertile_lily_pad" })
    event.shapeless("reliquary:fertile_lily_pad", [
        "3x reliquary:fertile_essence",
        "minecraft:emerald_block",
        "minecraft:lily_pad"
    ])
})