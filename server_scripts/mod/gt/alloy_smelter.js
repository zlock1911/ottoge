ServerEvents.recipes(event => {
    //MEK控制电路
    event.recipes.gtceu.alloy_smelter('hbx:gt_mek_basic_control_circuit')
        .itemInputs('gtceu:red_alloy_ingot', 'mekanism:ingot_osmium')
        .itemOutputs("mekanism:basic_control_circuit")
        .EUt(126)
        .duration(200)
})