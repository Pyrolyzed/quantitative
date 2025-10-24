ServerEvents.tags('item', event => {
    // Remove ender chest from chests tag to fix EMI showing it instead of a normal chest
    event.remove('c:chests', '#c:chests/ender')
})