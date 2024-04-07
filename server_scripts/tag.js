ServerEvents.tags('item', event => {
    event.remove('forge:gears/stone', 'enderio:iron_gear')
    event.add('otto:dusts/all_quartz', [
        "#forge:dusts/certus_quartz",
        "#forge:dusts/quartz",
        "#forge:dusts/quartzite"
    ])
    event.add("ae2:all_quartz", 'gtceu:quartzite_gem')
    event.add("otto:all_quartz", [
        'gtceu:quartzite_gem',
        'gtceu:certus_quartz_gem',
        'ae2:certus_quartz_crystal',
        'minecraft:quartz'
    ])
})