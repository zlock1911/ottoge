ServerEvents.recipes(event => {
    //去基岩粉
    event.replaceInput(
        {
            mod:'enderio',
            type:'crafting_shaped',
            not:{
                output:[
                    'enderio:reinforced_obsidian_block',
                    'enderio:void_chassis',
                    'enderio:iron_gear'
                ]
            }
        }, 
        'enderio:grains_of_infinity', 'thermal:rf_coil'
        )
        //去石齿轮
        event.replaceInput(
            {
                mod:'enderio',
                type:'crafting_shaped',
                not:{
                    output:[
                        'enderio:yeta_wrench'
                    ]
                }
            }, 
            '#forge:gears/stone', 'enderio:iron_gear'
            )
    //EIO双齿轮
    event.shaped('enderio:iron_gear', ["ABA","BCB","ABA"], {
        A: '#forge:nuggets/iron',
        B: '#forge:plates/iron',
        C: "#forge:gears/iron"
    }).id("hbx:eio_stone_gear")
    //EIO虚空框架
    event.shaped("enderio:void_chassis", ["ABA", "BCB", "ABA"], {
        A: 'minecraft:iron_bars',
        B: "#forge:plates/iron",
        C: "thermal:machine_frame"
    }).id("hbx:eio_void_chassis")
    //EIO合金炉
    event.replaceInput(
        {
            id:'enderio:alloy_smelter'
        },
        '#forge:ingots/dark_steel', "#forge:ingots/steel"
    )
    //强化黑曜石
    event.replaceInput(
        {
            id: 'enderio:reinforced_obsidian_block'
        },
        'enderio:grains_of_infinity', "#forge:ingots/steel"
    )
})
//增加自定义能量管道配方
ServerEvents.recipes(event => {
    event.shaped('8x enderio:basic_energy_conduit', ["AAA", "BBB", "AAA"], {
        A: 'enderio:conduit_binder',
        B: '#forge:ingots/conductive_alloy'
    }).id('hbx:eio_basic_conduit')

    event.shaped('8x enderio:enhanced_energy_conduit', ["AAA", "BBB", "AAA"], {
        A: 'enderio:conduit_binder',
        B: '#forge:ingots/energetic_alloy'
    }).id('hbx:eio_enhanced_energy_conduit')

    event.shaped('8x enderio:ender_energy_conduit', ["AAA", "BBB", "AAA"], {
        A: 'enderio:conduit_binder',
        B: '#forge:ingots/vibrant_alloy'
    }).id('hbx:eio_ender_energy_conduit')

    event.shaped('8x enderio:ender_steel_conduit', ["AAA", "BBB", "AAA"], {
        A: 'enderio:conduit_binder',
        B: '#forge:ingots/end_steel'
    }).id('hbx:eio_ender_steel_conduit')

    event.shaped('4x enderio:melodic_conduit', ["AAA", "BCB", "AAA"], {
        A: 'enderio:conduit_binder',
        B: 'otto:item_alloy_ingot_melodic_alloy',
        C: 'enderio:ender_steel_conduit'
    }).id('hbx:eio_melodic_conduit')

    event.shaped('4x enderio:stellar_conduit', ["AAA", "BCB", "AAA"], {
        A: 'enderio:conduit_binder',
        B: 'otto:item_alloy_ingot_stellar_alloy',
        C: 'enderio:melodic_conduit'
    }).id('hbx:eio_stellar_conduit')
    
    event.shaped('4x enderio:dragonsteel_conduit', ["AAA", "BCB", "AAA"], {
        A: 'enderio:conduit_binder',
        B: '#forge:ingots/dragonsteel',
        C: 'enderio:stellar_conduit'
    }).id('hbx:eio_dragonsteel_conduit')

})