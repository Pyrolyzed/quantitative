ServerEvents.recipes(event => {
    event.remove({id: 'explorerscompass:explorers_compass'})
    event.shaped('explorerscompass:explorerscompass', [
        'NAN',
        'ACA',
        'NAN'
    ], {
        A: 'alltheores:enderium_gear',
        N: 'minecraft:netherite_ingot',
        C: 'minecraft:recovery_compass',
    })

    event.remove({ output: "#c:tools/paxel", mod: "mekanismtools"})
    event.remove({output: "reliquary:fertile_lily_pad"})
    event.shapeless("reliquary:fertile_lily_pad", [
        "3x reliquary:fertile_essence",
        "minecraft:emerald_block",
        "minecraft:lily_pad"
    ])

    // Make nether items
    event.shapeless(
        Item.of("minecraft:blaze_powder", 1),
        [
            "minecraft:lava_bucket",
            "minecraft:gunpowder"
        ]
    )

    event.shapeless(
        Item.of("minecraft:ghast_tear", 2),
        [
            "7x minecraft:bone_block",
            "2x minecraft:iron_nugget"
        ]
    )

    event.shapeless(
        Item.of("minecraft:soul_sand", 2),
        [
            "minecraft:sand",
            "minecraft:bone_block"
        ]
    )

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

    // Alternate facade recipe
    event.shaped(
        Item.of("cable_facades:facade", 16),
        [
            "AAA",
            "ABA",
            "AAA"
        ],
        {
            A: "framedblocks:framed_cube",
            B: "minecraft:stone"
        }
    )

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