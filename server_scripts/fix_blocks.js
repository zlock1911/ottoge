/* ServerEvents.recipes(event => {
    const block_item = [
        ['minecraft:iron_block', '9x minecraft:iron_ingot'],
        ['minecraft:gold_block', '9x minecraft:gold_ingot'],
        ['minecraft:quartz_block', '4x minecraft:quartz'],
        ['minecraft:emerald_block', '9x minecraft:emerald'],
        ['minecraft:lapis_block', '9x minecraft:lapis_lazuli'],
        ['minecraft:diamond_block', '9x minecraft:diamond'],
        ['minecraft:amethyst_block', '4x minecraft:amethyst_shard'],
        ['minecraft:redstone_block', '9x minecraft:redstone']
    ]
    const item_nugget = [
        ['minecraft:iron_ingot', '9x minecraft:iron_nugget'],
        ['minecraft:gold_ingot', '9x minecraft:gold_nugget']
    ]
    block_item.forEach(bai => {
        event.shapeless(bai[1], bai[0])
        event.shapeless(bai[0], bai[1])
    })
    item_nugget.forEach(ian => {
        event.shapeless(ian[1], ian[0])
        event.shapeless(ian[0], ian[1])
    })

}) */