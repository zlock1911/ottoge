ServerEvents.recipes(event => {
    //增加钢锭配方
    event.recipes.thermal.smelter('thermal:steel_ingot', ['minecraft:iron_ingot', 'minecraft:coal']).energy(5120).id("hbx:te_smelter_steel_0")
    event.recipes.thermal.smelter('thermal:steel_ingot', ['minecraft:iron_ingot', 'minecraft:charcoal']).energy(5120).id("hbx:te_smelter_steel_1")
    //
    
})