ServerEvents.recipes(event => {
    event.shapeless('16x ae2:fluix_glass_cable', ['ae2:quartz_fiber', '#forge:gems/fluix', '#forge:gems/fluix']).id('hbx:ae_fluix_cable_16x')
    event.shaped('6x ae2:quartz_fiber', ['AAA', 'BBB', 'AAA'], {
        A:"#forge:glass",
        B:"#otto:dusts/all_quartz"
    }).id('hbx:ae_quartz_fiber')
    
    event.replaceInput(
        {
            id: 'expatternprovider:wireless_connector'
        },
        'ae2:wireless_receiver', '#forge:double_plates/stainless_steel'
    )
    event.replaceInput(
        {
            id: 'ae2additions:blocks/wireless_transceiver'
        },
        'ae2:wireless_receiver', '#forge:double_plates/stainless_steel'
    )
    event.replaceInput(
        {
            mod: 'ae2additions'
        },
        'minecraft:netherite_ingot', '#forge:ingots/energetic_alloy'
    )
    event.replaceInput(
        {
            mod: 'ae2additions'
        },
        'minecraft:amethyst_shard', "#ae2:all_quartz"
    )
    event.replaceInput(
        {
            mod: 'ae2things'
        },
        'minecraft:netherite_ingot', '#forge:ingots/energetic_alloy'
    )
    event.replaceInput(
        {
            mod: 'ae2things'
        },
        'minecraft:amethyst_shard', "#ae2:all_quartz"
    )
    event.replaceInput(
        {
            id:'ae2:decorative/quartz_glass'
        },
        '#ae2:all_quartz_dust', '#otto:dusts/all_quartz'
    )


    event.shaped(Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:i",id:"minecraft:sand"}}'), ['ABH', 'CDE', 'FGF'], {
        A:'mekanism:crusher',
        H:'thermal:machine_pulverizer',
        C:'minecraft:water_bucket',
        D:'megacells:bulk_cell_component',
        E:'minecraft:lava_bucket',
        F:'megacells:accumulation_processor',
        G:'ae2:energy_acceptor',
        B:'enderio:sag_mill'
    }).id('hbx:ae_cell_infinity_sand')
    event.shaped(Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:i",id:"minecraft:basalt"}}'), ['ABA', 'CDE', 'FFF'], {
        A:'ae2:quartz_glass',
        B:'minecraft:lava_bucket',
        C:'minecraft:soul_soil',
        D:'ae2:cell_component_256k',
        E:'minecraft:blue_ice',
        F:'#forge:gems/diamond'
    }).id('hbx:ae_cell_infinity_basalt')
    event.shaped(Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:i",id:"minecraft:deepslate"}}'), ['ABA', 'CDE', 'FFF'], {
        A:'ae2:quartz_glass',
        B:'minecraft:lava_bucket',
        C:'minecraft:packed_ice',
        D:'ae2:cell_component_256k',
        E:'minecraft:magma_block',
        F:'#forge:gems/diamond'
    }).id('hbx:ae_cell_infinity_deepslate')
    event.shaped('ae2:cell_component_256k', ['ABA', 'CDC', 'ACA'], {
        A:'ae2:sky_dust',
        B:'ae2:calculation_processor',
        C:'megacells:accumulation_processor',
        D:'appflux:energy_processor'
    }).id('hbx:ae_256k_2')
})

ServerEvents.recipes(event => {
    event.custom(
        {
            "type": "ae2:transform",
            "circumstance": {
              "type": "fluid",
              "tag": "minecraft:water"
            },
            "ingredients": [
              {
                "item": "ae2:flawed_budding_quartz"
              },
              {
                "item": "ae2:fluix_crystal"
              }
            ],
            "result": {
              "count": 1,
              "item": "ae2:flawless_budding_quartz"
            }
          }
    ).id('hbx:ae_budding_quartz')
})

ServerEvents.recipes(event => {
    event.custom(
        {
            "type": "ae2:charger",
            "ingredient": {
              "tag": "otto:all_quartz"
            },
            "result": {
              "item": "ae2:charged_certus_quartz_crystal"
            }
          }
    ).id('hbx:all_quartz_charged')
})