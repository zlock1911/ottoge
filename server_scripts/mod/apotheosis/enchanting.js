ServerEvents.recipes( event => {
    event.custom(
        {
            "type": "apotheosis:enchanting",
            "conditions": [{
                "type": "apotheosis:module",
                "module": "enchantment"
            }],
            "input": {
                "item": "minecraft:enchanting_table"
            },
            "requirements": {
                "eterna": 50,
                "quanta": 100,
                "arcana": 100
            },
            "max_requirements": {
                "eterna": -1,
                "quanta": -1,
                "arcana": -1
            },
            "result": {
                "item": "disenchanting_table:disenchanting_table",
                "count": 1
            }
        }
    )
})