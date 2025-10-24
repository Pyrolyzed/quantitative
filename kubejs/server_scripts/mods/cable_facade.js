ServerEvents.recipes(event => {
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
            B: "#c:stones"
        }
    )
})