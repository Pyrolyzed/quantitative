ServerEvents.recipes(event => {

    function removeAllRecipes(itemIds) {
        itemIds.forEach(itemId => event.remove({output: itemId}))
    }

    // Remove vanilla material Mekanism paxels in favor of Pickle Tweak's paxels
    removeAllRecipes([
        "mekanismtools:wood_paxel",
        "mekanismtools:stone_paxel",
        "mekanismtools:gold_paxel",
        "mekanismtools:iron_paxel",
        "mekanismtools:diamond_paxel",
        "mekanismtools:netherite_paxel"
    ])
})