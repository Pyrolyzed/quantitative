ServerEvents.recipes(event => {
    function replaceItemGlobal(item, replacement) {
        event.replaceInput({ input: item }, item, replacement)
    }

    replaceItemGlobal("minecraft:ender_pearl", "#c:ender_pearls")
})