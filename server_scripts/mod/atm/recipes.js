ServerEvents.recipes(event => {
    event.shaped('allthemodium:allthemodium_upgrade_smithing_template', ['ABA', 'ACA', 'AAA'], {
        A:'#forge:ingots/allthemodium',
        B:'#forge:plates/allthemodium',
        C:'minecraft:deepslate'
    }).id('hbx:atm_upgrade')
    event.shaped('allthemodium:vibranium_upgrade_smithing_template', ['ABA', 'ACA', 'AAA'], {
        A:'#forge:ingots/vibranium',
        B:'#forge:plates/vibranium',
        C:'#forge:netherrack'
    }).id('hbx:vibranium_upgrade')
    event.shaped('allthemodium:unobtainium_upgrade_smithing_template', ['ABA', 'ACA', 'AAA'], {
        A:'#forge:ingots/unobtainium',
        B:'#forge:plates/unobtainium',
        C:'minecraft:deepslate'
    }).id('hbx:unobtainium_upgrade')
    event.replaceInput(
        {
            id:'allthemodium:smithing/vibranium_upgrade_smithing_template'
        },
        'allthemodium:ancient_stone', '#forge:netherrack'
    )
})