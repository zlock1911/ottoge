ServerEvents.recipes(event => {

    const atm_fluid = [
        ["cofh_core:experience", 'atm_ingot_cofh_experience'],
        ["enderio:xp_juice", 'atm_ingot_enderio_experience'],
        ["mob_grinding_utils:fluid_xp", 'atm_ingot_mgu_experience'],
        ["experienceobelisk:cognitium", 'atm_ingot_eb_experience']
    ]

    const vibranium_fluid = [
        ["cofh_core:experience", 'vibranium_ingot_cofh_experience'],
        ["enderio:xp_juice", 'vibranium_ingot_enderio_experience'],
        ["mob_grinding_utils:fluid_xp", 'vibranium_ingot_mgu_experience'],
        ["experienceobelisk:cognitium", 'vibranium_eb_experience']
    ]

    const unobtainium_fluid = [
        ["cofh_core:experience", 'unobtainium_ingot_cofh_experience'],
        ["enderio:xp_juice", 'unobtainium_ingot_enderio_experience'],
        ["mob_grinding_utils:fluid_xp", 'unobtainium_ingot_mgu_experience'],
        ["experienceobelisk:cognitium", 'unobtainium_eb_experience']
    ]

    const atm_dust2ingot = [
        ['hbx:atm2ingot', '#forge:dusts/allthemodium', 'allthemodium:allthemodium_ingot', IV, 7200],
        ['hbx:viberanium2ingot', '#forge:dusts/vibranium', 'allthemodium:vibranium_ingot', IV, 7200],
        ['hbx:unobatinium', '#forge:dusts/unobtainium', 'allthemodium:unobtainium_ingot', LuV, 9200]
    ]
    //TE末影锭
    event.recipes.gtceu.electric_blast_furnace('hbx:gt_enderium')
        .itemInputs('#forge:dusts/enderium')
        .itemOutputs('thermal:enderium_ingot')
        .duration(200)
        .EUt(128)
        .blastFurnaceTemp(2500)
        .circuit(1)
    //TE龙钢
    event.recipes.gtceu.electric_blast_furnace('hbx:gt_dragonsteel')
        .itemInputs('#forge:dusts/dragonsteel')
        .itemOutputs('thermal_extra:dragonsteel_ingot')
        .duration(400)
        .EUt(512)
        .blastFurnaceTemp(3750)
        .circuit(1)
    //TE注灵锭
    event.recipes.gtceu.electric_blast_furnace('hbx:gt_soul_infused')
        .itemInputs('#forge:dusts/soul_infused')
        .itemOutputs('thermal_extra:soul_infused_ingot')
        .duration(230)
        .EUt(256)
        .blastFurnaceTemp(2700)
        .circuit(1)
    //TE潜影合金
    event.recipes.gtceu.electric_blast_furnace('hbx:gt_shellite')
        .itemInputs('#forge:dusts/shellite')
        .itemOutputs('thermal_extra:shellite_ingot')
        .duration(280)
        .EUt(320)
        .blastFurnaceTemp(3300)
        .circuit(1)
    //TE双子物质
    event.recipes.gtceu.electric_blast_furnace('hbx:gt_twinite')
        .itemInputs('#forge:dusts/twinite')
        .itemOutputs('thermal_extra:twinite_ingot')
        .duration(340)
        .EUt(400)
        .blastFurnaceTemp(3500)
        .circuit(1)
    //MEK铀矿冶炼
    event.recipes.gtceu.electric_blast_furnace('hbx:gt_uranium_ore')
        .itemInputs('#forge:ores/uranium')
        .itemOutputs("mekanism:ingot_uranium")
        .duration(40)
        .EUt(32)
        .blastFurnaceTemp(1800)
        .circuit(1)
    //MEK粗铀冶炼
    event.recipes.gtceu.electric_blast_furnace('hbx:gt_uranium_raw')
        .itemInputs('#forge:raw_materials/uranium')
        .itemOutputs("mekanism:ingot_uranium")
        .duration(40)
        .EUt(32)
        .blastFurnaceTemp(1800)
        .circuit(1)
    //MEK铀粉冶炼
    event.recipes.gtceu.electric_blast_furnace('hbx:gt_uranium_dust')
        .itemInputs('#forge:dusts/uranium')
        .itemOutputs("mekanism:ingot_uranium")
        .duration(40)
        .EUt(32)
        .blastFurnaceTemp(1800)
        .circuit(1)
    //ATM INGOT
    atm_fluid.forEach(fluidType => {
        event.recipes.gtceu.electric_blast_furnace(fluidType[1])
            .itemInputs('#forge:ingots/dragonsteel', 'otto:item_alloy_ingot_stellar_alloy', '#forge:ingots/iridium')
            .itemOutputs('allthemodium:allthemodium_ingot')
            .inputFluids(Fluid.of(fluidType[0], 2000))
            .duration(60)
            .EUt(8192)
            .blastFurnaceTemp(7200)
    })
    vibranium_fluid.forEach(fluidType => {
        event.recipes.gtceu.electric_blast_furnace(fluidType[1])
            .itemInputs('#forge:ingots/allthemodium', '#forge:ingots/dragonsteel', '#forge:ingots/rhodium_plated_palladium')
            .itemOutputs('allthemodium:vibranium_ingot')
            .inputFluids(Fluid.of(fluidType[0], 4000))
            .duration(60)
            .EUt(8192)
            .blastFurnaceTemp(7200)
    })
    unobtainium_fluid.forEach(fluidType => {
        event.recipes.gtceu.electric_blast_furnace(fluidType[1])
            .itemInputs('#forge:ingots/vibranium', '#forge:ingots/dragonsteel', '#forge:ingots/naquadah_alloy')
            .itemOutputs('allthemodium:unobtainium_ingot')
            .inputFluids(Fluid.of(fluidType[0], 8000))
            .duration(60)
            .EUt(32768)
            .blastFurnaceTemp(9200)
    })

    atm_dust2ingot.forEach(atm => {
        event.recipes.gtceu.electric_blast_furnace(atm[0])
            .itemInputs(atm[1])
            .itemOutputs(atm[2])
            .duration(60)
            .EUt(atm[3])
            .blastFurnaceTemp(atm[4])
    })


})