ServerEvents.recipes(event => {
    event.shaped('minecraft:crafting_table', ['AA ', 'AA ', '   '], {
        A: "#minecraft:planks"
    })
})

/* ServerEvents.recipes(event => {
    let removeID= [
        'emi:/crafting/repairing/gtceu/aluminium_axe'
    ]
    for (let i of removeID) {
        event.remove({id: i})
    }
}) */