const allthemod_fluid = [
    ['hbx:gt_atm_atmium_fluid', 'allthemodium:allthemodium_ingot', "allthemodium:molten_allthemodium"],
    ['hbx:gt_atm_vibranium_fluid', 'allthemodium:vibranium_ingot', "allthemodium:molten_vibranium"],
    ['hbx:gt_atm_unobrainium_fluid', 'allthemodium:unobtainium_ingot', "allthemodium:molten_unobtainium"]
]
ServerEvents.recipes(event => {
    allthemod_fluid.forEach(fluidType => {
        event.recipes.gtceu.extractor(fluidType[0])
            .itemInputs(fluidType[1])
            .outputFluids(Fluid.of(fluidType[2], 144))
    })
})