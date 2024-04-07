ServerEvents.recipes(event =>{
    //增加木炭粉
    event.recipes.thermal.pulverizer('mekanism:dust_charcoal', 'minecraft:charcoal')
    //增加煤粉
    event.recipes.thermal.pulverizer('gtceu:carbon_dust', 'minecraft:coal')
})