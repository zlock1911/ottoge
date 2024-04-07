
LootJS.modifiers(event => {
    event.addLootTypeModifier(LootType.CHEST).replaceLoot("enderio:dark_steel_ingot", "minecraft:iron_ingot");
    event.addLootTypeModifier(LootType.CHEST).replaceLoot('allthemodium:vibranium_nugget', 'thermal:enderium_nugget');
    event.addLootTypeModifier(LootType.CHEST).replaceLoot('allthemodium:allthemodium_nugget', 'thermal:signalum_nugget');

});