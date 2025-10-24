ServerEvents.recipes(event => {

    // Iron's Spellbooks Renewables
    event.shapeless(
        Item.of("irons_spellbooks:common_ink", 2),
        [
            "minecraft:ink_sac",
            "minecraft:glass_bottle"
        ]
    )

    event.shapeless(
        Item.of("irons_spellbooks:uncommon_ink", 2),
        [
            "minecraft:ink_sac",
            "minecraft:glass_bottle",
            "minecraft:emerald"
        ]
    )
    event.shapeless(
        Item.of("irons_spellbooks:rare_ink", 2),
        [
            "minecraft:ink_sac",
            "minecraft:glass_bottle",
            "minecraft:diamond"
        ]
    )

    event.shapeless(
        Item.of("irons_spellbooks:epic_ink", 2),
        [
            "minecraft:ink_sac",
            "minecraft:glass_bottle",
            "minecraft:diamond_block"
        ]
    )

    event.shapeless(
        Item.of("irons_spellbooks:legendary_ink", 2),
        [
            "minecraft:ink_sac",
            "minecraft:glass_bottle",
            "minecraft:nether_star"
        ]
    )

    event.shapeless(
        Item.of("irons_spellbooks:arcane_essence", 2),
        [
            "minecraft:amethyst_shard",
            "minecraft:lapis_lazuli"
        ]
    )

    event.shapeless(
        Item.of("irons_spellbooks:cinder_essence", 1),
        [
            "minecraft:blaze_powder",
            "irons_spellbooks:arcane_essence"
        ]
    )

})