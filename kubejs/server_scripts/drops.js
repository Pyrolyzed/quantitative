LootJS.lootTables(event => {
    function modifyDrop(entity, drop, count) {
        event.getLootTable(entity).firstPool().modifyItemEntry(itemEntry => {
            if (itemEntry.item.id === drop) {
                itemEntry.setCount(count)
            }
            return itemEntry
        })
    }

    modifyDrop("minecraft:entities/shulker", "minecraft:shulker_shell", 2)
    modifyDrop("minecraft:entities/enderman", "minecraft:ender_pearl", 1)
    modifyDrop("minecraft:entities/cow", "minecraft:leather", [1, 3])
    modifyDrop("minecraft:entities/horse", "minecraft:leather", [1, 3])
    modifyDrop("minecraft:entities/creeper", "minecraft:gunpowder", [1, 3])
    modifyDrop("minecraft:entities/zombie", "minecraft:rotten_flesh", [1, 3])
    modifyDrop("minecraft:entities/skeleton", "minecraft:bone", [1, 3])
    modifyDrop("minecraft:entities/spider", "minecraft:string", [1, 3])
    modifyDrop("minecraft:entities/spider", "minecraft:spider_eye", 1)
})