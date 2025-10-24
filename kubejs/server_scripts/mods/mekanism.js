ServerEvents.recipes(event => {
    // Remove vanilla material Mekanism paxels in favor of Pickle Tweak's paxels
    event.remove({
        output: [
            "mekanismtools:wood_paxel",
            "mekanismtools:stone_paxel",
            "mekanismtools:gold_paxel",
            "mekanismtools:iron_paxel",
            "mekanismtools:diamond_paxel",
            "mekanismtools:netherite_paxel"
        ]
    })
})