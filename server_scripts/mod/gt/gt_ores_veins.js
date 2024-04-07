
GTCEuServerEvents.oreVeins(event => {
    let v = [
        "gtceu:diamond_vein",
        "gtceu:olivine_vein",
        "gtceu:sapphire_vein",
        "gtceu:iron_vein",
        "gtceu:lubricant_vein",
        "gtceu:tetrahedrite_vein",
        "gtceu:monazite_vein",
        "gtceu:redstone_vein",
        "gtceu:manganese_vein_ow",
        "gtceu:copper_tin_vein",
        "gtceu:saltpeter_vein",
        "gtceu:coal_vein",
        "gtceu:naquadah_vein",
        "gtceu:magnetite_vein_end",
        "gtceu:beryllium_vein",
        "gtceu:copper_vein",
        "gtceu:magnetite_vein_ow",
        "gtceu:lapis_vein",
        "gtceu:manganese_vein",
        "gtceu:scheelite_vein",
        "gtceu:galena_vein",
        "gtceu:mica_vein",
        "gtceu:cassiterite_vein",
        "gtceu:garnet_vein",
        "gtceu:mineral_sand_vein",
        "gtceu:bauxite_vein_end",
        "gtceu:molybdenum_vein",
        "gtceu:sheldonite_vein",
        "gtceu:pitchblende_vein_end",
        "gtceu:salts_vein",
        "gtceu:redstone_vein_ow",
        "gtceu:banded_iron_vein",
        "gtceu:apatite_vein",
        "gtceu:garnet_tin_vein",
        "gtceu:certus_quartz",
        "gtceu:topaz_vein",
        "gtceu:oilsands_vein",
        "gtceu:nickel_vein",
        "gtceu:nether_quartz_vein",
        "gtceu:sulfur_vein"
    ]
    
    for (let i of v) {
        event.modify(i, vein => {
            vein.density(0.8)
        })
    }
    event.modify("gtceu:sulfur_vein", vein => {
        vein.clusterSize(32)
    })
    event.modify("gtceu:nether_quartz_vein", vein => {
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.NetherQuartz).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Quartzite).size(1, 1))
                .layer(l => l.weight(2).state(() => Block.getBlock('minecraft:netherrack').defaultBlockState()).size(2, 4))
                .layer(l => l.weight(1).block(() => Block.getBlock('minecraft:ancient_debris')).size(0.1, 1))
                )
            )
    })
})

