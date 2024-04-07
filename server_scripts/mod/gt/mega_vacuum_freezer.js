const allthemod_fluid_2_ingot = [
    ['hbx:gt_atm_unobtainium_allthemodium_alloy_ingot' ,"otto:unbotallthemodium_molten", 'allthemodium:unobtainium_allthemodium_alloy_ingot'],
    ['hbx:gt_atm_unobtainium_vibranium_alloy_ingot' ,"otto:unboiranium_molten", 'allthemodium:unobtainium_vibranium_alloy_ingot'],
    ['hbx:gt_atm_vibranium_allthemodium_alloy_ingot' ,"otto:vibrallthemodium_molten", 'allthemodium:vibranium_allthemodium_alloy_ingot']
]
ServerEvents.recipes(event => {
    allthemod_fluid_2_ingot.forEach(allthemod_fluid_2_ingot_Type => {
        event.recipes.gtceu.vacuum_freezer(allthemod_fluid_2_ingot_Type[0])
            .inputFluids(Fluid.of(allthemod_fluid_2_ingot_Type[1], 144))
            .notConsumable('gtceu:ingot_casting_mold')
            .itemOutputs(allthemod_fluid_2_ingot_Type[2])
            .duration(20)
            .EUt(ZPM)
    })
})