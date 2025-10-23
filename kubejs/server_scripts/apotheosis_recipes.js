ServerEvents.recipes(event => {
    function makeApotheosisRecipe(output, input, outAmount, inAmount) {
        output = `apotheosis:${output}`
        input = `apotheosis:${input}`
        event.shapeless(
            Item.of(output, outAmount),
            [
                `${inAmount}x ${input}`
            ]
        )
    }

    // Material upgrade recipes
    makeApotheosisRecipe("uncommon_material", "common_material", 1, 4)
    makeApotheosisRecipe("rare_material", "uncommon_material", 1, 4)
    makeApotheosisRecipe("epic_material", "rare_material", 1, 4)
    makeApotheosisRecipe("mythic_material", "epic_material", 1, 4)
    event.shapeless(
        "ancientreforging:ancient_material",
        "4x apotheosis:mythic_material"
    )

    // Material downgrade recipes
    makeApotheosisRecipe("common_material", "uncommon_material", 4, 1)
    makeApotheosisRecipe("uncommon_material", "rare_material", 4, 1)
    makeApotheosisRecipe("rare_material", "epic_material", 4, 1)
    makeApotheosisRecipe("epic_material", "mythic_material", 4, 1)
    event.shapeless(
        Item.of("apotheosis:mythic_material", 4),
        "ancientreforging:ancient_material"
    )

    // Recipe for Sigil of Supremacy
    event.shaped(
        Item.of("apotheosis:sigil_of_supremacy", 1),
        [
            "ABA",
            "DCD",
            "ABA"
        ],
        {
            A: "minecraft:diamond_block",
            B: "apotheosis:gem_fused_slate",
            C: "minecraft:nether_star",
            D: "minecraft:netherite_ingot"
        }
    );
})