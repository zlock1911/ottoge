
ServerEvents.recipes(event => {
    event.custom(
        {
            "type":"botanypots:crop",
            "seed":{
                "item":"gtceu:rubber_sapling"
            },
            "categories": ["dirt"],
            "growthTicks":2400,
            "display": {
                "block": "gtceu:rubber_sapling"
            },
            "drops":[
                {
                    "chance":1.00,
                    "output":{
                        "item":"gtceu:rubber_log",
                        "minRolls":4,
                        "maxRolls":8
                    }
                },
                {
                    "chance":0.2,
                    "output":{
                        "item":"gtceu:rubber_sapling",
                        "minRolls":1,
                        "maxRolls":2
                    }
                },
                {
                    "chance":1.00,
                    "output":{
                        "item":"gtceu:sticky_resin",
                        "minRolls":1,
                        "maxRolls":2
                    }
                }
            ]
        }
    ).id('hbx:botanypots_gt_rubber')
})

ServerEvents.recipes(event => {
    Color.DYE.forEach(color => {
        event.custom(
            {
                "type":"botanypots:crop",
                "seed":{
                    "item":`floralis:${color}_flower_seeds`
                },
                "categories": ["dirt"],
                "growthTicks":1500,
                "display": {
                    "block": `floralis:${color}_flower`
                },
                "drops":[
                    {
                        "chance":1.00,
                        "output":{
                            "item":`floralis:${color}_petals`,
                            "minRolls":1,
                            "maxRolls":3
                        }
                    },
                    {
                        "chance":0.5,
                        "output":{
                            "item":`floralis:${color}_flower_seeds`,
                            "minRolls":1,
                            "maxRolls":2
                        }
                    },
                    {
                        "chance":0.5,
                        "output":{
                            "item":'floralis:plant_fibers',
                            "minRolls":1,
                            "maxRolls":2
                        }
                    }
                ]
            }
        ).id(`hbx:botanypots_${color}_floralis_flower`)
    })
})

ServerEvents.recipes(event => {
    Color.DYE.forEach(color => {
        event.custom(
            {
                "type":"botanypots:crop",
                "seed":{
                    "item":`floralis:${color}_cactus_seeds`
                },
                "categories": ["dirt"],
                "growthTicks":1500,
                "display": {
                    "block": `floralis:${color}_cactus`
                },
                "drops":[
                    {
                        "chance":1.00,
                        "output":{
                            "item":`floralis:${color}_petals`,
                            "minRolls":1,
                            "maxRolls":3
                        }
                    },
                    {
                        "chance":0.5,
                        "output":{
                            "item":`floralis:${color}_cactus_seeds`,
                            "minRolls":1,
                            "maxRolls":2
                        }
                    },
                    {
                        "chance":0.5,
                        "output":{
                            "item":'floralis:plant_fibers',
                            "minRolls":1,
                            "maxRolls":2
                        }
                    }
                ]
            }
        ).id(`hbx:botanypots_${color}_floralis_cactus`)
    })
})

ServerEvents.recipes(event => {
    Color.DYE.forEach(color => {
        event.custom(
            {
                "type":"botanypots:crop",
                "seed":{
                    "item":`minecraft:${color}_concrete_powder`
                },
                "categories": ["water"],
                "growthTicks":40,
                "display": {
                    "block": `minecraft:${color}_concrete`
                },
                "drops":[
                    {
                        "chance":1.00,
                        "output":{
                            "item":`minecraft:${color}_concrete`,
                            "minRolls":1,
                            "maxRolls":1
                        }
                    }
                ]
            }
        )
    })
})