ServerEvents.recipes(event => {
    // Convert 1 wool into 2 string
    event.shapeless(
        Item.of("minecraft:string", 2),
        [
            { tag: "minecraft:wool" }
        ]
    )

    // Convert 3 gravel into 1 flint
    event.shapeless(
        Item.of("minecraft:flint", 1),
        [
            "3x minecraft:gravel"
        ]
    )

    // Convert rotten flesh to leather
    event.smelting("minecraft:leather", "minecraft:rotten_flesh").xp(0.5)
    event.smoking("minecraft:leather", "minecraft:rotten_flesh").xp(0.5)

    // Craft saddle
    event.shaped(
        Item.of("minecraft:saddle", 1),
        [
            "AAA",
            "B B",
            "   "
        ],
        {
            A: "minecraft:leather",
            B: "minecraft:iron_ingot"
        }
    )

    // Craft horse armor
    event.shaped(
        Item.of("minecraft:iron_horse_armor", 1),
        [
            "AAA",
            "ABA",
            "   "
        ],
        {
            A: "minecraft:iron_ingot",
            B: "minecraft:leather"
        }
    )

    event.shaped(
        Item.of("minecraft:diamond_horse_armor", 1),
        [
            "AAA",
            "ABA",
            "   "
        ],
        {
            A: "minecraft:diamond",
            B: "minecraft:leather"
        }
    )

    // Change lead recipe
    event.remove({ type: "minecraft:crafting_shaped", input: "minecraft:slime_ball", output: "minecraft:lead" })
    event.shaped(
        Item.of("minecraft:lead", 2),
        [
            "AA ",
            "AA ",
            "  A"
        ],
        {
            A: "minecraft:string"
        }
    )
})