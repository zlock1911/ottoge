ServerEvents.recipes(event => {
    event.shaped(Item.of('enderio:loot_capacitor', "{CapacitorData:{Base:3.8d,Modifiers:{}},display:{Name:'{\"text\":\"§6末地钢电容\"}'}}"), [' A ', 'BCB', ' A '], {
        B: 'enderio:octadic_capacitor',
        A: '#forge:ingots/end_steel',
        C: '#forge:ingots/dark_steel'
    }).id('hbx:eio_ender_steel_caoacitor')
    event.shaped(Item.of('enderio:loot_capacitor', "{CapacitorData:{Base:6.2d,Modifiers:{}},display:{Name:'{\"text\":\"§5旋律合金电容\"}'}}"), [' A ', 'BCB', ' A '], {
        B: 'otto:ender_steel_casing',
        A: 'otto:item_alloy_ingot_melodic_alloy',
        C: '#forge:ingots/end_steel'
    }).id('hbx:eio_melodic_caoacitor')
    event.shaped(Item.of('enderio:loot_capacitor', "{CapacitorData:{Base:8,Modifiers:{}},display:{Name:'{\"text\":\"§3恒星合金电容\"}'}}"), [' A ', 'BCB', ' A '], {
        B: 'otto:melodic_casing',
        A: 'otto:item_alloy_ingot_stellar_alloy',
        C: 'otto:item_alloy_ingot_melodic_alloy'
    }).id('hbx:eio_stellar_caoacitor')

})