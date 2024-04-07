ServerEvents.recipes(event => {
    //MEK裂变机壳
    event.recipes.gtceu.assembly_line('hbx:gt_mek_fission_reactor_casing')
        .itemInputs(
            '4x mekanism:steel_casing', 
            '2x gtceu:ev_electric_motor', 
            '16x #forge:double_plates/lead', 
            '4x thermal_extra:twinite_gear', 
            '16x otto:alloy_atomic_double_plate',
            '16x mekanism:ultimate_control_circuit',
            '2x gtceu:neutron_reflector'
            )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 2000),
            Fluid.of('gtceu:osmium', 4000)
            )
        .itemOutputs('32x mekanismgenerators:fission_reactor_casing')
        .EUt(8190)
        .duration(160)
        //MEK裂变控制棒
    event.recipes.gtceu.assembly_line('hbx:gt_mek_control_rod_assembly')
            .itemInputs(
                '4x mekanism:steel_casing',
                '8x gtceu:neutron_reflector',
                '16x #forge:double_plates/lead',
                '4x gtceu:ev_electric_motor',
                '2x #gtceu:circuits/ev',
                '8x #forge:double_plates/ruridit',
                '8x #forge:gears/ruridit'
            )
            .inputFluids(
                Fluid.of('gtceu:soldering_alloy', 2000),
                Fluid.of('gtceu:osmium', 4000)
                )
            .itemOutputs('8x mekanismgenerators:control_rod_assembly')
            .EUt(8190)
            .duration(400)
            //MEK裂变玻璃
    event.recipes.gtceu.assembly_line('hbx:gt_mek_reactor_glass')
        .itemInputs(
            '16x gtceu:tempered_glass',
            '4x gtceu:neutron_reflector',
            '16x #forge:dusts/iridium',
            '16x #forge:dusts/platinum'
        )
        .inputFluids(Fluid.of("gtceu:oxygen", 8000))
        .itemOutputs('32x mekanismgenerators:reactor_glass')
        .EUt(8190)
        .duration(200)
        //MEK裂变燃料棒
    event.recipes.gtceu.assembly_line('hbx:gt_mek_fission_fuel_assmebly')
        .itemInputs(
            '4x mekanism:ultimate_chemical_tank',
            '64x #forge:double_plates/lead',
            '4x gtceu:neutron_reflector',
            '64x #forge:double_plates/osmium'
        )
        .inputFluids(
            Fluid.of('gtceu:tungsten_steel', 2000),
            Fluid.of('gtceu:osmium', 4000)
            )
        .itemOutputs('16x mekanismgenerators:fission_fuel_assembly')
        .EUt(8190)
        .duration(200)
        //MEK机壳合成3
    event.recipes.gtceu.assembly_line('hbx:gt_mek_steel_casing_2')
        .itemInputs(
            '4x #forge:frames/steel',
            '4x otto:alloy_atomic_plate',
            '4x #forge:circuits/ultimate'
        )
        .inputFluids(
            Fluid.of("gtceu:steel", 1000),
            Fluid.of("gtceu:osmium", 2000)
        )
        .itemOutputs('32x mekanism:steel_casing')
        .EUt(8190)
        .duration(600)
        //EIO机壳合成2
    event.recipes.gtceu.assembly_line('hbx:gt_eio_casing')
        .itemInputs(
            '4x otto:item_alloy_ingot_stellar_alloy',
            '4x enderio:octadic_capacitor',
            '4x thermal:machine_frame'
        )
        .inputFluids(
            Fluid.of("gtceu:osmium", 2000),
            Fluid.of("gtceu:steel", 1000)
        )
        .itemOutputs('32x enderio:void_chassis')
        .EUt(8190)
        .duration(600)
    event.recipes.gtceu.assembly_line('hbx:gt_eio_avaritia_capacitor')
        .itemInputs(
            '22x avaritia:infinity_ingot',
            '20x avaritia:crystal_matrix_ingot',
            '7x avaritia:infinity_catalyst',
            '4x avaritia:neutron_ingot'
        )
        .itemOutputs(Item.of('enderio:loot_capacitor', "{CapacitorData:{Base:99,Modifiers:{ENERGY_CAPACITY:99}},display:{Name:'{\"text\":\"§b无尽电容\"}'}}"))
        .EUt(8190)
        .duration(600)

    event.recipes.gtceu.assembly_line('hbx:gt_atomic_casing')
        .itemInputs(
            '4x #forge:frames/naquadah_alloy',
            '64x #forge:alloys/ultimate',
            '16x #forge:ingots/unobtainium',
            '4x #forge:ingots/naquadria',
            '4x #forge:gears/unobtainium',
            '4x mekanism:pellet_polonium'
        )
        .itemOutputs('8x gtceu:atomic_casing')
        .EUt(131068)
        .duration(100)

    event.recipes.gtceu.assembly_line('hbx:gt_star_forge')
        .itemInputs(
            'gtceu:zpm_machine_hull',
            '8x gtceu:zpm_emitter',
            '2x gtceu:zpm_fluid_regulator',
            '4x gtceu:zpm_field_generator',
            '4x gtceu:zpm_sensor',
            '8x #gtceu:circuits/zpm',
            '64x avaritia:crystal_matrix_ingot'
        )
        .itemOutputs('gtceu:star_forge')
        .inputFluids(
            Fluid.of("gtceu:neutronium", 128)
        )
        .EUt(ZPM)
        .duration(6000)
    event.recipes.gtceu.assembly_line('hbx:gt_mek_fusion_casing')
        .itemInputs(
            'mekanism:steel_casing',
            '32x mekanism:pellet_polonium',
            '64x otto:alloy_atomic_double_plate',
            '64x otto:alloy_atomic_double_plate',
            '16x #gtceu:circuits/zpm',
            '64x #forge:circuits/ultimate',
            '16x gtceu:quantum_star'
        )
        .itemOutputs('mekanismgenerators:fusion_reactor_frame')
        .EUt(ZPM)
        .duration(960)
    

    

            
})