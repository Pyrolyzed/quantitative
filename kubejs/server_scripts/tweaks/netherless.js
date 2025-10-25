ServerEvents.recipes(event => {
    // Make nether items

    event.shaped(
        Item.of("minecraft:ghast_tear", 4),
        [
            "ABA",
            "BCB",
            "ABA"
        ],
        {
            A: "minecraft:fire_charge",
            B: "minecraft:iron_nugget",
            C: "minecraft:water_bucket"
        }
    )

    event.shapeless(
        Item.of("minecraft:soul_sand", 2),
        [
            "minecraft:sand",
            "minecraft:bone_block"
        ]
    )
})