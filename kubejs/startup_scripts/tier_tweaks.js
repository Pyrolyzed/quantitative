ItemEvents.modification(event => {
    // Modify dig speed using a callback function
    // Without a namespace defaults to "minecraft:"
    function modifyDigSpeed(itemId, operation) {

        if (Array.isArray(itemId)) {
            itemId.forEach(id => modifyDigSpeed(id, operation))
            return
        }

        const hasNamespace = itemId.split(":").length > 1
        itemId = hasNamespace ? itemId : `minecraft:${itemId}`

        event.modify(itemId, item => {
            item.setTier(tier => { tier.setSpeed(operation(tier.getSpeed())) })
        })
    }

    const TOOL_ARRAY = [
        "wooden_pickaxe",
        "wooden_axe",
        "wooden_shovel",
        "wooden_hoe",
        "stone_pickaxe",
        "stone_axe",
        "stone_shovel",
        "stone_hoe",
        "golden_pickaxe",
        "golden_axe",
        "golden_shovel",
        "golden_hoe",
        "iron_pickaxe",
        "iron_axe",
        "iron_shovel",
        "iron_hoe",
        "diamond_pickaxe",
        "diamond_axe",
        "diamond_shovel",
        "diamond_hoe",
        "netherite_pickaxe",
        "netherite_axe",
        "netherite_shovel",
        "netherite_hoe",
        "mekanismtools:refined_obsidian_pickaxe",
        "mekanismtools:refined_obsidian_axe",
        "mekanismtools:refined_obsidian_shovel",
        "mekanismtools:refined_obsidian_hoe",
        "mekanismtools:lapis_lazuli_pickaxe",
        "mekanismtools:lapis_lazuli_axe",
        "mekanismtools:lapis_lazuli_shovel",
        "mekanismtools:lapis_lazuli_hoe",
        "deeperdarker:warden_pickaxe",
        "deeperdarker:warden_axe",
        "deeperdarker:warden_shovel",
        "deeperdarker:warden_hoe",
        "justdirethings:eclipsealloy_pickaxe",
        "justdirethings:eclipsealloy_axe",
        "justdirethings:eclipsealloy_shovel",
        "justdirethings:eclipsealloy_hoe",
        "justdirethings:celestigem_pickaxe",
        "justdirethings:celestigem_axe",
        "justdirethings:celestigem_shovel",
        "justdirethings:celestigem_hoe",
        "justdirethings:blazegold_pickaxe",
        "justdirethings:blazegold_axe",
        "justdirethings:blazegold_shovel",
        "justdirethings:blazegold_hoe",
        "justdirethings:ferricore_pickaxe",
        "justdirethings:ferricore_axe",
        "justdirethings:ferricore_shovel",
        "justdirethings:ferricore_hoe",
        "pickletweaks:wooden_paxel",
        "pickletweaks:stone_paxel",
        "pickletweaks:iron_paxel",
        "pickletweaks:golden_paxel",
        "pickletweaks:diamond_paxel",
        "pickletweaks:netherite_paxel",
        "mekanismtools:refined_obsidian_paxel",
        "mekanismtools:lapis_lazuli_paxel",
        "justdirethings:celestigem_paxel",
        "justdirethings:eclipsealloy_paxel"
    ]

    const DIG_SPEED_MAX_BONUS = 4
    const DIG_SPEED_MULTIPLIER = 1.333

    // This multiplies digSpeed by DIG_SPEED_MULTIPLIER
    // To stop stronger tools from becoming truly broken, there is DIG_SPEED_MAX_BONUS
    function calculateDigSpeed(digSpeed) {
        return Math.round(Math.min(digSpeed + DIG_SPEED_MAX_BONUS, digSpeed * DIG_SPEED_MULTIPLIER))
    }

    modifyDigSpeed(TOOL_ARRAY, speed => calculateDigSpeed(speed))
})