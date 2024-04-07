


GTCEuServerEvents.oreVeins(event => {
    //铱锇
    event.add("osmium_vein", vein => {
        vein.weight(70)
        vein.clusterSize(26)
        vein.density(0.9)
        vein.discardChanceOnAirExposure(0)
        vein.layer(GTWorldGenLayers.STONE)
        vein.dimensions("minecraft:overworld", "overworldmirror:overworld")
        vein.biomes("#minecraft:is_overworld")
        vein.heightRange({
            height: {
              type: 'uniform',
              min_inclusive: {
                absolute: -10
              },
              max_inclusive: {
                absolute: 50
              }
            }
          })
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.Platinum).size(1, 1))
                .layer(l => l.weight(1).block(() => Block.getBlock("alltheores:iridium_ore")).size(1, 1))
                .layer(l => l.weight(4).state(() => Block.getBlock("mekanism:osmium_ore").defaultBlockState()).size(2, 4))
                )
            )
    })
    //氟石
    event.add("fluorite_vein", vein => {
        vein.weight(80)
        vein.clusterSize(32)
        vein.density(0.7)
        vein.discardChanceOnAirExposure(0)
        vein.layer(GTWorldGenLayers.STONE)
        vein.dimensions("minecraft:overworld")
        vein.biomes("#minecraft:is_overworld")
        vein.heightRange({
            height: {
              type: 'uniform',
              min_inclusive: {
                absolute: -20
              },
              max_inclusive: {
                absolute: 40
              }
            }
          })
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Galena).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Calcite).size(1, 1))
                .layer(l => l.weight(2).state(() => Block.getBlock("mekanism:fluorite_ore").defaultBlockState()).size(1, 2))
                )
            )
    })
    //铀
    event.add('not_gt_uranium_vein', vein => {
      vein.weight(45)
      vein.clusterSize(32)
      vein.density(0.6)
      vein.discardChanceOnAirExposure(0.5)
      vein.layer(GTWorldGenLayers.STONE)
      vein.dimensions("minecraft:overworld")
      vein.biomes("#minecraft:is_overworld")
      vein.heightRange({
        height: {
          type: 'uniform',
          min_inclusive: {
            absolute: 15
          },
          max_inclusive: {
            absolute: 75
          }
        }
      })
      vein.layeredVeinGenerator(generator => 
        generator.buildLayerPattern(pattern => 
          pattern.layer(l => l.weight(2).state(() => Block.getBlock('mekanism:uranium_ore').defaultBlockState()).size(1, 2))
                 .layer(l => l.weight(1).mat(GTMaterials.Lead).size(1, 1))
        ))
    })

    event.add('all_quartz_vein', vein => {
      vein.weight(60)
      vein.clusterSize(22)
      vein.density(1)
      vein.discardChanceOnAirExposure(0.3)
      vein.layer(GTWorldGenLayers.STONE)
      vein.dimensions("minecraft:overworld")
      vein.biomes("#minecraft:is_overworld")
      vein.heightRange({
        height: {
          type: 'uniform',
          min_inclusive: {
            absolute: -55
          },
          max_inclusive: {
            absolute: 95
          }
        }
      })
      vein.layeredVeinGenerator(generator => 
        generator.buildLayerPattern(pattern => 
          pattern.layer(l => l.weight(1).mat(GTMaterials.Quartzite).size(1, 1))
                 .layer(l => l.weight(3).mat(GTMaterials.CertusQuartz).size(1, 3))
                 .layer(l => l.weight(1).mat(GTMaterials.QuartzSand).size(1, 1))
        ))
    })
    
})