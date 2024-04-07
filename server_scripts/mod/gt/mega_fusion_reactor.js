
const allthemod_mix = [
    ['hbx:gt_atm_vibranium_allthemodium_fluid_mix', "allthemodium:molten_vibranium", "allthemodium:molten_allthemodium", "otto:vibrallthemodium_molten"],
    ['hbx:gt_atm_unobtainium_allthemodium_fluid_mix', "allthemodium:molten_unobtainium", "allthemodium:molten_allthemodium", "otto:unbotallthemodium_molten"],
    ['hbx:gt_atm_unobtainium_vibranium_fluid_mix', "allthemodium:molten_vibranium", "allthemodium:molten_unobtainium", "otto:unboiranium_molten"]
]

ServerEvents.recipes(event => {
    allthemod_mix.forEach(allthemod_fluid_mix => {
    event.recipes.gtceu.mega_fusion_reactor(allthemod_fluid_mix[0])
        .inputFluids(
            Fluid.of(allthemod_fluid_mix[1], 144),
            Fluid.of(allthemod_fluid_mix[2], 144)
        )
        .outputFluids(Fluid.of(allthemod_fluid_mix[3], 36))
        .duration(200)
        .EUt(UHV)
        .fusionStartEU(600000000)
    })
    event.recipes.gtceu.mega_fusion_reactor('hbx:inf_liquid')
        .inputFluids(
            Fluid.of("otto:unbotallthemodium_molten", 6480),
            Fluid.of("otto:unboiranium_molten", 6480),
            Fluid.of("otto:vibrallthemodium_molten", 6480)
        )
        .itemInputs(
            [
                '8x avaritia:crystal_matrix_ingot',
                '8x avaritia:neutron_ingot'
            ]
        )
        .outputFluids(Fluid.of("otto:infinity_molten", 32))
        .duration(240)
        .EUt(UHV)
})