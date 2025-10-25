ItemEvents.modification(event => {
    function setMaxDurability(itemId, durability) {
		if (Array.isArray(itemId)) {
			itemId.forEach(id => setMaxDurability(id, durability))
			return
		}
        event.modify(itemId, item => item.maxDamage = durability);
    }

    setMaxDurability("minecraft:fishing_rod", 1000)
    setMaxDurability("minecraft:carrot_on_a_stick", 350)
	setMaxDurability("minecraft:warped_fungus_on_a_stick", 350)
	setMaxDurability("minecraft:bow", 1000)
	setMaxDurability("supplementaries:slingshot", 350)
	setMaxDurability("supplementaries:wrench", 500)
    setMaxDurability("minecraft:crossbow", 2000)	
	setMaxDurability("minecraft:trident", 5000)
    setMaxDurability("create:super_glue", 3000)
	setMaxDurability("create:sand_paper", 500)
	setMaxDurability("minecraft:elytra", 3000)
	setMaxDurability("minecraft:shield", 1250)

	setMaxDurability("waystones:warp_stone", 2000)

	setMaxDurability("alltheores:copper_ore_hammer", 256)
	setMaxDurability("alltheores:iron_ore_hammer", 512)
	setMaxDurability("alltheores:bronze_ore_hammer", 768)
	setMaxDurability("alltheores:invar_ore_hammer", 1024)
	setMaxDurability("alltheores:platinum_ore_hammer", 2056)

	setMaxDurability("modern_industrialization:iron_hammer", 10000)
	setMaxDurability("modern_industrialization:steel_hammer", 22000)
	setMaxDurability("modern_industrialization:diamond_hammer", 55000)
	setMaxDurability("modern_industrialization:netherite_hammer", 70000)

	setMaxDurability("pickletweaks:wooden_paxel", 400)
	setMaxDurability("pickletweaks:golden_paxel", 500)
	setMaxDurability("pickletweaks:stone_paxel", 800)
	setMaxDurability("pickletweaks:iron_paxel", 1800)
	setMaxDurability("pickletweaks:diamond_paxel", 5000)
	setMaxDurability("pickletweaks:netherite_paxel", 16000)

	setMaxDurability([
	"minecraft:wooden_pickaxe",
	"minecraft:wooden_axe",
	"minecraft:wooden_shovel",
	"minecraft:wooden_hoe",
	"minecraft:wooden_sword",
	"pickletweaks:wooden_scythe",
	"farmersdelight:flint_knife",
	], 200)
	
	setMaxDurability([
	"minecraft:golden_pickaxe",
	"minecraft:golden_axe",
	"minecraft:golden_shovel",
	"minecraft:golden_hoe",
	"minecraft:golden_sword",
	"pickletweaks:golden_scythe",
	"farmersdelight:golden_knife"
	], 250)
	
	setMaxDurability([
	"minecraft:stone_pickaxe",
	"minecraft:stone_axe",
	"minecraft:stone_shovel",
	"minecraft:stone_hoe",
	"minecraft:stone_sword",
	"pickletweaks:stone_scythe",
	"minecraft:shears",
	"minecraft:flint_and_steel"
	], 500)
	
	setMaxDurability([
	"minecraft:iron_pickaxe",
	"minecraft:iron_axe",
	"minecraft:iron_shovel",
	"minecraft:iron_hoe",
	"minecraft:iron_sword",
	"pickletweaks:iron_scythe",
	"farmersdelight:iron_knife"
	], 1000)

    setMaxDurability([
	"minecraft:diamond_pickaxe",
	"minecraft:diamond_axe",
	"minecraft:diamond_shovel",
	"minecraft:diamond_hoe",
	"minecraft:diamond_sword",
	"pickletweaks:diamond_scythe",
	"farmersdelight:diamond_knife"
	], 3000)

    setMaxDurability([
	"minecraft:netherite_pickaxe",
	"minecraft:netherite_axe",
	"minecraft:netherite_shovel",
	"minecraft:netherite_hoe",
	"minecraft:netherite_sword",
	"pickletweaks:netherite_scythe",
	"farmersdelight:netherite_knife"
	], 8000)

	setMaxDurability([
		"justdirethings:ferricore_sword",
		"justdirethings:ferricore_pickaxe",
		"justdirethings:ferricore_axe",
		"justdirethings:ferricore_shovel",
		"justdirethings:ferricore_hoe"
	], 1000)

	setMaxDurability([
		"justdirethings:blazegold_sword",
		"justdirethings:blazegold_pickaxe",
		"justdirethings:blazegold_axe",
		"justdirethings:blazegold_shovel",
		"justdirethings:blazegold_hoe"
	], 3000)

	setMaxDurability([
		"justdirethings:celestigem_sword",
		"justdirethings:celestigem_pickaxe",
		"justdirethings:celestigem_axe",
		"justdirethings:celestigem_shovel",
		"justdirethings:celestigem_hoe"
	], 4000)

	setMaxDurability([
		"justdirethings:eclipsealloy_sword",
		"justdirethings:eclipsealloy_pickaxe",
		"justdirethings:eclipsealloy_axe",
		"justdirethings:eclipsealloy_shovel",
		"justdirethings:eclipsealloy_hoe"
	], 6000)

	setMaxDurability("justdirethings:celestigem_paxel", 8000)
	setMaxDurability("justdirethings:eclipsealloy_paxel", 12000)

	setMaxDurability("justdirethings:bow_ferricore", 500)
	setMaxDurability("justdirethings:bow_blazegold", 1500)
	setMaxDurability("justdirethings:bow_celestigem", 2000)
	setMaxDurability("justdirethings:bow_eclipsealloy", 3000)

	setMaxDurability([
		"justdirethings:ferricore_helmet",
		"justdirethings:ferricore_chestplate",
		"justdirethings:ferricore_leggings",
		"justdirethings:ferricore_boots",
	], 1000)
	setMaxDurability([
		"justdirethings:blazegold_helmet",
		"justdirethings:blazegold_chestplate",
		"justdirethings:blazegold_leggings",
		"justdirethings:blazegold_boots",
	], 1500)
	setMaxDurability([
		"justdirethings:celestigem_helmet",
		"justdirethings:celestigem_chestplate",
		"justdirethings:celestigem_leggings",
		"justdirethings:celestigem_boots",
	], 2000)
	setMaxDurability([
		"justdirethings:eclipsealloy_helmet",
		"justdirethings:eclipsealloy_chestplate",
		"justdirethings:eclipsealloy_leggings",
		"justdirethings:eclipsealloy_boots",
	], 2500)

	setMaxDurability([
		"justdirethings:blazejet_wand",
		"justdirethings:voidshift_wand",
		"justdirethings:eclipsegate_wand",
		"justdirethings:polymorphic_wand"
	], 400)
	
	setMaxDurability([
	"minecraft:golden_helmet",
	"minecraft:golden_chestplate",
	"minecraft:golden_leggings",
	"minecraft:golden_boots",
	], 300)	

	setMaxDurability([
	"minecraft:leather_helmet",
	"minecraft:leather_chestplate",
	"minecraft:leather_leggings",
	"minecraft:leather_boots",
	], 300)

	setMaxDurability([
	"minecraft:iron_helmet",
	"minecraft:iron_chestplate",
	"minecraft:iron_leggings",
	"minecraft:iron_boots",
	], 800)

	setMaxDurability([
	"minecraft:diamond_helmet",
	"minecraft:diamond_chestplate",
	"minecraft:diamond_leggings",
	"minecraft:diamond_boots",
	], 1500)

	setMaxDurability([
	"minecraft:netherite_helmet",
	"minecraft:netherite_chestplate",
	"minecraft:netherite_leggings",
	"minecraft:netherite_boots",
	], 3000)
});
