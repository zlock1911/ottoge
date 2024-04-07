ServerEvents.recipes(e => {
    const {
        fire_crafting,
        grinding_ball,
        alloy_smelting,
        enchanting,
        painting,
        sag_milling,
        slicing,
        soul_binding,
        tank,
    } = e.recipes.enderio;

    /*alloy_smelting('otto:item_alloy_ingot_end_steel', ['#forge:ingots/dark_steel', '#forge:end_stones', "minecraft:obsidian"])
    .energy(20000)
    .id("hbx:alloy_smelter/ender_steel");*/
    //旋律合金
    alloy_smelting("otto:item_alloy_ingot_melodic_alloy", ["minecraft:popped_chorus_fruit", '#forge:ingots/end_steel'])
    .energy(20000)
    .id("hbx:alloy_smelter/melodic_alloy");
    //恒星合金
    alloy_smelting("otto:item_alloy_ingot_stellar_alloy", ["4x minecraft:clay_ball", "minecraft:nether_star", "otto:item_alloy_ingot_melodic_alloy"])
    .energy(20000)
    .id("hbx:alloy_smelter/stellar_alloy");
});