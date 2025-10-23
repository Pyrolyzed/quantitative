LootJS.lootTables(event => {
    function modifyEntityDrop(mod, entityId, drop, count) {
        mod = mod ?? "minecraft"
        const entity = `${mod}:entities/${entityId}`
        event.getLootTable(entity).firstPool().modifyItemEntry(itemEntry => {
            if (itemEntry.item.id === drop) {
                itemEntry.setCount(count)
            }
            return itemEntry
        })
    }

    modifyEntityDrop("shulker", "minecraft:shulker_shell", 2)
    modifyEntityDrop("enderman", "minecraft:ender_pearl", 1)
    modifyEntityDrop("cow", "minecraft:leather", [1, 3])
    modifyEntityDrop("horse", "minecraft:leather", [1, 3])
    modifyEntityDrop("creeper", "minecraft:gunpowder", [1, 3])
    modifyEntityDrop("zombie", "minecraft:rotten_flesh", [1, 3])
    modifyEntityDrop("skeleton", "minecraft:bone", [1, 3])
    modifyEntityDrop("skeleton", "minecraft:arrow", [1, 2])
    modifyEntityDrop("spider", "minecraft:string", [1, 3])
    modifyEntityDrop("spider", "minecraft:spider_eye", 1)
    modifyEntityDrop("blaze", "minecraft:blaze_rod", [1, 2])
    modifyEntityDrop("ghast", "minecraft:ghast_tear", [1, 2])
    modifyEntityDrop("magma_cube", "minecraft:magma_cream", [1, 2])
    modifyEntityDrop("phantom", "minecraft:phantom_membrane", [1, 2])
    modifyEntityDrop("slime", "minecraft:slime_ball", [1, 3])
    modifyEntityDrop("wither_skeleton", "minecraft:bone", [1, 3])
    modifyEntityDrop("warden", "apothic_enchanting:warden_tendril", [2, 3])
})