ServerEvents.recipes(event => {
    //真空管
    event.replaceInput(
        {
            id:'gtceu:shaped/vacuum_tube'
        },
        '#forge:bolts/steel', '#forge:bolts/iron'
    )
    //电路板
    event.replaceInput(
        {
            id:'gtceu:shaped/electronic_circuit_lv'
        },
        "#forge:plates/steel","#forge:plates/iron"
    )
    event.replaceInput(
        {
            id:'gtceu:shaped/electronic_circuit_lv'
        },
        'gtceu:red_alloy_single_cable','#forge:ingots/redstone_alloy'
    )
    event.replaceInput(
        {
            id:'gtceu:shaped/shape_empty'
        },
        '#forge:plates/steel', '#forge:plates/iron'
    )
})