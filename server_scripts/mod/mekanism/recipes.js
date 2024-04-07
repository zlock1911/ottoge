ServerEvents.recipes(event => {
    event.replaceInput(
        {
            id:'mekanism:control_circuit/elite'
        },
        'mekanism:alloy_reinforced', 'otto:alloy_reinforced_plate'
    )
    event.replaceInput(
        {
            id:'mekanism:control_circuit/ultimate'
        },
        'mekanism:alloy_atomic', 'otto:alloy_atomic_plate'
    )
    event.replaceInput(
        {
            id:'mekanism:tier_installer/advanced'
        },
        '#minecraft:planks', 'gtceu:micro_processor_assembly'
    )
    event.replaceInput(
        {
            id:'mekanism:tier_installer/elite'
        },
        'minecraft:gold_ingot', 'gtceu:micro_processor_computer'
    )
    event.replaceInput(
        {
            id:'mekanism:tier_installer/ultimate'
        },
        '#minecraft:planks', 'gtceu:nano_processor_computer'
    )
    event.replaceInput(
        {
            id:'mekanism:metallurgic_infuser'
        },
        "minecraft:redstone", "mekanism:basic_control_circuit"
    )
    event.replaceInput(
        {
            id: 'mekanism:logistical_sorter'
        },
        "mekanism:basic_control_circuit", 'enderio:energetic_alloy_ingot'
    )
    event.replaceInput(
        {
            id: 'mekanism:transmitter/logistical_transporter/basic'
        },
        "mekanism:basic_control_circuit", 'enderio:energetic_alloy_ingot'
    )
    event.replaceInput(
        {
            id:'mekanism:precision_sawmill'
        },
        "mekanism:alloy_infused", 'gtceu:steel_buzz_saw_blade'
    )
})

ServerEvents.recipes(event => {
    let mek_low = [
        'mekanism:enrichment_chamber',
        'mekanism:energized_smelter',
        'mekanism:precision_sawmill',
        'mekanism:formulaic_assemblicator',
        'mekanism:fuelwood_heater',
    ]
    for (let i of mek_low){
    event.replaceInput(
        {
            id:i
        },
        'mekanism:steel_casing', 'enderio:void_chassis'
    )}
    for (let i of mek_low){
        event.replaceInput(
            {
                id:i
            },
            "mekanism:basic_control_circuit", 'enderio:energetic_alloy_ingot'
        )
    }
})

ServerEvents.recipes(event => {
    const meksuit = [
        ['mekanism:mekasuit_helmet', 'minecraft:netherite_helmet', 'allthemodium:unobtainium_helmet'],
        ['mekanism:mekasuit_bodyarmor', 'minecraft:netherite_chestplate', 'allthemodium:unobtainium_chestplate'],
        ['mekanism:mekasuit_pants', 'minecraft:netherite_leggings', 'allthemodium:unobtainium_leggings'],
        ['mekanism:mekasuit_boots', 'minecraft:netherite_boots', 'allthemodium:unobtainium_boots']
    ]
    meksuit.forEach(meksuitType => {
        event.replaceInput(
            {
                id:meksuitType[0]
            },
            meksuitType[1], meksuitType[2]
        )
    })
})
