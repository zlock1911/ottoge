ServerEvents.recipes(event => {
    event.recipes.gtceu.laser_engraver('hbx:diamond_lattice')
        .itemInputs('4x #mekanism:enriched/diamond')
        .notConsumable('gtceu:nether_star_lens')
        .itemOutputs('avaritia:diamond_lattice')
        .EUt(32768)
        .duration(600)
        
})