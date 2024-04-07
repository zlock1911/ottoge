ServerEvents.recipes(event => {
    event.shaped('avaritia:neutron_gear', ['ABA', 'BCB', 'ABA'], {
        A:'#forge:ingots/naquadah',
        B:'avaritia:neutron_ingot',
        C:'avaritia:crystal_matrix_ingot'
    })
    event.shaped('avaritia:neutron_collector', ['AAA', 'ABA', 'CAC'], {
        A:'#forge:storage_blocks/iron',
        B:'avaritia:crystal_matrix_ingot',
        C:'#forge:storage_blocks/redstone'
    })
    /* event.replaceInput(
        {
            id:'avaritia:densest_neutron_collector'
        },
        Item.of('avaritia:singularity', '{Id:"avaritia:redstone"}'), 'avaritia:neutron'
    ) */
})