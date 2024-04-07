const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA
const infinity_catalyst = [
    ["cofh_core:experience", 'hbx:infinity_catalyst_cofh'],
    ["enderio:xp_juice", 'hbx:infinity_catalyst_eio'],
    ["mob_grinding_utils:fluid_xp", 'hbx:infinity_catalyst_mgu'],
    ["experienceobelisk:cognitium", 'hbx:infinity_catalyst_eb']
]
ServerEvents.recipes(event => {
    event.recipes.gtceu.star_forge('hbx:neutron_coil')
        .itemInputs(
            [
                '8x avaritia:neutron_ingot',
                '2x avaritia:neutron_gear',
                '16x avaritia:crystal_matrix_ingot'

            ]
        )
        .inputFluids(
            [
                Fluid.of('gtceu:neutronium', 32),
                Fluid.of('allthemodium:molten_unobtainium', 1152)
            ]
        )
        .itemOutputs('otto:neutron_coil_block')
        .duration(600)
        .EUt(262140)
    infinity_catalyst.forEach(infType => {
        event.recipes.gtceu.star_forge(infType[1])
            .itemInputs(
                [
                    '64x avaritia:crystal_matrix_ingot',
                    '64x avaritia:neutron_ingot',
                    '64x allthemodium:unobtainium_allthemodium_alloy_ingot',
                    '64x allthemodium:unobtainium_vibranium_alloy_ingot',
                    '64x allthemodium:vibranium_allthemodium_alloy_ingot',
                    '64x allthemodium:allthemodium_ingot',
                    '64x allthemodium:vibranium_ingot',
                    '64x allthemodium:unobtainium_ingot',
                    '64x thermal_extra:dragonsteel_ingot',
                    '64x otto:item_alloy_ingot_stellar_alloy',
                    '64x gtceu:ruthenium_trinium_americium_neutronate_ingot',
                    '64x minecraft:netherite_ingot',
                    '64x cataclysm:ignitium_ingot',
                    '64x mekanism:alloy_atomic',
                    '64x #ae2:all_quartz'

                ]
            )
            .inputFluids(
                [
                    Fluid.of("otto:unbotallthemodium_molten", 12960),
                    Fluid.of("otto:unboiranium_molten", 12960),
                    Fluid.of("otto:vibrallthemodium_molten", 12960),
                    Fluid.of("gtceu:neutronium", 12690),
                    Fluid.of(infType[0], 12690)
                ]
            )
            .itemOutputs('avaritia:infinity_catalyst')
            .duration(240)
            .EUt(UV)
    })
    event.recipes.gtceu.star_forge('hbx:inf_ingot')
        .itemInputs(
            [
                '4x avaritia:infinity_catalyst',
                '64x avaritia:crystal_matrix_ingot',
                '64x avaritia:neutron_ingot'
            ]
        )
        .inputFluids(Fluid.of("otto:infinity_molten", 144))
        .itemOutputs('avaritia:infinity_ingot')
        .EUt(UHV)
        .duration(900)
    event.recipes.gtceu.star_forge('hbx:endest_pearl')
            .itemInputs(
                [
                    '24x minecraft:end_stone',
                    '32x #forge:gems/ender_pearl',
                    'gtceu:gravi_star',
                    '4x avaritia:neutron_ingot'
                ]
            )
            .itemOutputs('avaritia:endest_pearl')
            .EUt(UV)
            .duration(400)
    event.recipes.gtceu.star_forge('hbx:mega_fusion_reactor')
            .itemInputs(
                [
                    'avaritia:infinity_catalyst',
                    'gtceu:uv_fusion_reactor',
                    '32x gtceu:uv_sensor',
                    '16x #gtceu:circuits/luv',
                    '8x gtceu:uv_field_generator'
                ]
            )
            .itemOutputs('gtceu:mega_fusion_reactor')
            .inputFluids(
                [
                    Fluid.of('gtceu:neutronium', 1000),
                ])
            .EUt(UHV)
            .duration(12000)
})