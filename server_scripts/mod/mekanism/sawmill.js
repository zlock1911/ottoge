ServerEvents.recipes(event => {
    event.custom(
        {
            "type":"mekanism:sawing",
            "input":{"ingredient":{"item":"floralis:plant_fibers"}},
            "mainOutput":{"count":6,"item":"minecraft:string"}}
    ).id('hbx:mek_string_6')
    event.custom(
        {
            "type":"mekanism:sawing",
            "input":{"ingredient":{"item":"floralis:plant_fibers_block"}},
            "mainOutput":{"count":64,"item":"minecraft:string"}}
    ).id('hbx:mek_string_64')
})