ItemEvents.modification(event => {
    function maxDura(modifiedItem, modifiedAmount) {
        event.modify(modifiedItem, item => {item.maxDamage = modifiedAmount});
    }

    maxDura('minecraft:fishing_rod', 1000)
    maxDura('minecraft:carrot_on_a_stick', 350)
	maxDura('minecraft:warped_fungus_on_a_stick', 350)
	maxDura('minecraft:bow', 1000)
	maxDura('supplementaries:slingshot', 350)
	maxDura('supplementaries:wrench', 500)
    maxDura('minecraft:crossbow', 2000)	
	maxDura('minecraft:trident', 5000)
    maxDura('create:super_glue', 3000)
	maxDura('create:sand_paper', 500)
	maxDura('minecraft:elytra', 3000)
	maxDura('minecraft:shield', 1250)

	maxDura('waystones:warp_stone', 2000)

	maxDura('alltheores:copper_ore_hammer', 256)
	maxDura('alltheores:iron_ore_hammer', 512)
	maxDura('alltheores:bronze_ore_hammer', 768)
	maxDura('alltheores:invar_ore_hammer', 1024)
	maxDura('alltheores:platinum_ore_hammer', 2056)

	// maxDura('mysticalagriculture:inferium_scythe', 6000)
	// maxDura('mysticalagriculture:prudentium_scythe', 8400)
	// maxDura('mysticalagriculture:tertium_scythe', 12000)
	// maxDura('mysticalagriculture:imperium_scythe', 18000)

	maxDura('modern_industrialization:iron_hammer', 10000)
	maxDura('modern_industrialization:steel_hammer', 22000)
	maxDura('modern_industrialization:diamond_hammer', 55000)
	maxDura('modern_industrialization:netherite_hammer', 70000)

	maxDura('pickletweaks:wooden_paxel', 400)
	maxDura('pickletweaks:golden_paxel', 500)
	maxDura('pickletweaks:stone_paxel', 800)
	maxDura('pickletweaks:iron_paxel', 1800)
	maxDura('pickletweaks:diamond_paxel', 5000)
	maxDura('pickletweaks:netherite_paxel', 16000)

	event.modify([
	'minecraft:wooden_pickaxe',
	'minecraft:wooden_axe',
	'minecraft:wooden_shovel',
	'minecraft:wooden_hoe',
	'minecraft:wooden_sword',
	'pickletweaks:wooden_scythe',
	'farmersdelight:flint_knife',
	], item => {item.maxDamage = 200})
	
	event.modify([
	'minecraft:golden_pickaxe',
	'minecraft:golden_axe',
	'minecraft:golden_shovel',
	'minecraft:golden_hoe',
	'minecraft:golden_sword',
	'pickletweaks:golden_scythe',
	'farmersdelight:golden_knife'
	], item => {item.maxDamage = 250})
	
	event.modify([
	'minecraft:stone_pickaxe',
	'minecraft:stone_axe',
	'minecraft:stone_shovel',
	'minecraft:stone_hoe',
	'minecraft:stone_sword',
	'pickletweaks:stone_scythe',
	'minecraft:shears',
	'minecraft:flint_and_steel'
	], item => {item.maxDamage = 400})
	
	event.modify([
	'minecraft:iron_pickaxe',
	'minecraft:iron_axe',
	'minecraft:iron_shovel',
	'minecraft:iron_hoe',
	'minecraft:iron_sword',
	'pickletweaks:iron_scythe',
	'farmersdelight:iron_knife'
	], item => {item.maxDamage = 900})

    event.modify([
	'minecraft:diamond_pickaxe',
	'minecraft:diamond_axe',
	'minecraft:diamond_shovel',
	'minecraft:diamond_hoe',
	'minecraft:diamond_sword',
	//'mysticalagriculture:diamond_scythe',
	'pickletweaks:diamond_scythe',
	'farmersdelight:diamond_knife'
	], item => {item.maxDamage = 2500})

    event.modify([
	'minecraft:netherite_pickaxe',
	'minecraft:netherite_axe',
	'minecraft:netherite_shovel',
	'minecraft:netherite_hoe',
	'minecraft:netherite_sword',
	'pickletweaks:netherite_scythe',
	'farmersdelight:netherite_knife'
	], item => {item.maxDamage = 8000})
	
	// Hammers & Excavators
//	event.modify([
//		'onlyhammersandexcavators:wooden_hammer',
//		'onlyhammersandexcavators:wooden_excavator'
//	], item => { item.maxDamage = 1000 })
//	event.modify([
//		'onlyhammersandexcavators:stone_hammer',
//		'onlyhammersandexcavators:stone_excavator'
//	], item => { item.maxDamage = 2000 })
//	event.modify([
//		'onlyhammersandexcavators:iron_hammer',
//		'onlyhammersandexcavators:iron_excavator'
//	], item => { item.maxDamage = 4500 })
//	event.modify([
//		'onlyhammersandexcavators:golden_hammer',
//		'onlyhammersandexcavators:golden_excavator'
//	], item => { item.maxDamage = 1250 })
//	event.modify([
//		'onlyhammersandexcavators:diamond_hammer',
//		'onlyhammersandexcavators:diamond_excavator'
//	], item => { item.maxDamage = 12500 })
//	event.modify([
//		'onlyhammersandexcavators:netherite_hammer',
//		'onlyhammersandexcavators:netherite_excavator'
//	], item => { item.maxDamage = 40000 })
	
	// Armor
	event.modify([
	'minecraft:golden_helmet',
	'minecraft:golden_chestplate',
	'minecraft:golden_leggings',
	'minecraft:golden_boots',
	], item => {item.maxDamage = 300})	
	event.modify([
	'minecraft:leather_helmet',
	'minecraft:leather_chestplate',
	'minecraft:leather_leggings',
	'minecraft:leather_boots',
	], item => {item.maxDamage = 300})
	event.modify([
	'minecraft:iron_helmet',
	'minecraft:iron_chestplate',
	'minecraft:iron_leggings',
	'minecraft:iron_boots',
	], item => {item.maxDamage = 800})
	event.modify([
	'minecraft:diamond_helmet',
	'minecraft:diamond_chestplate',
	'minecraft:diamond_leggings',
	'minecraft:diamond_boots',
	], item => {item.maxDamage = 1500})
	event.modify([
	'minecraft:netherite_helmet',
	'minecraft:netherite_chestplate',
	'minecraft:netherite_leggings',
	'minecraft:netherite_boots',
	], item => {item.maxDamage = 3000})
});
