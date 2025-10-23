ServerEvents.recipes((event) => {
    addCreateRecipeHandler(event);

    // Make deployer andesite age
    event.replaceInput({ id: "create:crafting/kinetics/brass_hand" }, "create:brass_sheet", "create:golden_sheet");

    // Ender Pearl crafting recipe
    event.recipes.create.compacting("minecraft:ender_pearl", ["minecraft:obsidian", "minecraft:lapis_lazuli"]);

    // Better dirt automation
    event.recipes.create.mixing(Item.of("minecraft:dirt", 2), ["minecraft:gravel", "minecraft:dirt"]);

    // Stone crafting recipes
    event.recipes.create.compacting(Item.of("minecraft:calcite", 1), ["minecraft:diorite", "minecraft:bone_meal"])
    event.recipes.create.compacting(Item.of("minecraft:diorite", 1), ["minecraft:granite", "minecraft:bone_meal"]);
    event.recipes.create.compacting(Item.of("minecraft:granite", 2), ["minecraft:cobblestone", "minecraft:bone_meal"])
    event.recipes.create.finalize();
});