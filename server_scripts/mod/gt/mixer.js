ServerEvents.recipes(event => {
    event.recipes.gtceu.mixer('hbx:stellite_100_dust')
        .itemInputs(
            ['4x #forge:dusts/iron',
            '3x #forge:dusts/chromium',
            '2x #forge:dusts/tungsten',
            '#forge:dusts/molybdenum']
        )
        .itemOutputs('7x gtceu:stellite_100_dust')
        .EUt(1920)
        .duration(90)
})