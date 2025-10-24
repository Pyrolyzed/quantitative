ItemEvents.modification(event => {
    function maxStackSize(itemStack, stackSize) {
        event.modify(itemStack, item => {
            item.maxStackSize = stackSize
        })
    }

    maxStackSize("minecraft:ender_pearl", 64)
    maxStackSize("minecraft:egg", 64)
    maxStackSize("minecraft:snowball", 64)
    maxStackSize("minecraft:bucket", 64)
    maxStackSize("minecraft:honey_bottle", 64)
    maxStackSize("minecraft:potion", 64)
    maxStackSize("minecraft:splash_potion", 64)
    maxStackSize("minecraft:lingering_potion", 64)
    maxStackSize(/.*_sign.*/, 64)
    maxStackSize(/.*_banner$/, 64)
    maxStackSize("woodenbucket:wooden_bucket", 64)
    maxStackSize("supplementaries:jar", 64)
})