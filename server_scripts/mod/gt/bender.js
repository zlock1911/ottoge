ServerEvents.recipes(event => {
    //MEK强化合金板
    event.recipes.gtceu.bender('hbx:gt_mek_reinforced_alloy_plate')
        .itemInputs('#mekanism:alloys/reinforced')
        .itemOutputs('otto:alloy_reinforced_plate')
        .duration(60)
        .circuit(1)
        .EUt(508)
    //MEK双层强化合金板1
    event.recipes.gtceu.bender('hbx:gt_mek_reinforced_alloy_double_plate_0')
        .itemInputs('2x #mekanism:alloys/reinforced')
        .itemOutputs('otto:alloy_reinforced_double_plate')
        .duration(60)
        .circuit(2)
        .EUt(508)
    //MEK双层强化合金板2
    event.recipes.gtceu.bender('hbx:gt_mek_reinforced_alloy_double_plate_1')
        .itemInputs('2x otto:alloy_reinforced_plate')
        .itemOutputs('otto:alloy_reinforced_double_plate')
        .duration(60)
        .circuit(2)
        .EUt(508)
    //MEK原子合金板
    event.recipes.gtceu.bender('hbx:gt_mek_atomic_alloy_plate')
        .itemInputs('#forge:alloys/ultimate')
        .itemOutputs('otto:alloy_atomic_plate')
        .duration(60)
        .circuit(1)
        .EUt(1020)
    //MEK双层原子合金板1
    event.recipes.gtceu.bender('hbx:gt_mek_atomic_alloy_double_plate_0')
        .itemInputs('2x #forge:alloys/ultimate')
        .itemOutputs('otto:alloy_atomic_double_plate')
        .duration(60)
        .circuit(2)
        .EUt(1020)
    //MEK双层原子合金板2
    event.recipes.gtceu.bender('hbx:gt_mek_atomic_alloy_double_plate_1')
        .itemInputs('2x otto:alloy_atomic_plate')
        .itemOutputs('otto:alloy_atomic_double_plate')
        .duration(60)
        .circuit(2)
        .EUt(1020)
})