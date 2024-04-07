/* StartupEvents.registry('block', event => {
    event.create('otto:neutron_coil_block', 'gtceu:coil')
        .temperature(50000)
        .level(16)
        .energyDiscount(1.1)
        .tier(8)
        .coilMaterial(GTMaterials.get('neutron'))
        .texture('otto:block/neutron_coil_block')
        .hardness(5)
        .requiresTool(true)
        .material('metal')
}) */


StartupEvents.registry('block', event => {
	event.create('otto:neutron_coil_block')
})
