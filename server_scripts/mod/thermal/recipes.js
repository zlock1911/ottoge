ServerEvents.recipes(event => {
    //打粉机
    event.replaceInput(
        {
            id: 'thermal:machine_pulverizer'
        },
        'minecraft:flint', 'gtceu:copper_double_wire'
    )
    //感应炉
    event.replaceInput(
        {
            id: 'thermal:machine_smelter'
        },
        "#minecraft:smelts_to_glass", '#gtceu:circuits/lv'
    )
    //冲压机
    event.replaceInput(
        {
            id:'thermal:machine_press'
        },
        "#forge:ingots/bronze", '#forge:double_plates/iron'
    )
    //锯木机
    event.replaceInput(
        {
            id:'thermal:machine_sawmill'
        },
        'thermal:saw_blade', 'gtceu:steel_buzz_saw_blade'
    )
    event.replaceInput(
        {
            id:'thermal:machine_frame'
        },
        '#forge:gears/tin', '#forge:gears/iron'
    )
})

ServerEvents.recipes(event => {
    event.shaped('2x systeams:boiler_pipe', ["  A", " B ", "A  "], {
        A: "#forge:gears/bronze",
        B: 'enderio:fused_quartz'
    }).id("hbx:te_boiler_pipe")
    event.shapeless('2x thermal:enderium_dust', 
        ['2x #forge:dusts/lead',
        '#forge:dusts/platinum',
        '#forge:dusts/diamond',
        '2x #forge:dusts/ender_pearl']
    ).id("hbx:te_enderium_dust")
})