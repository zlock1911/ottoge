ServerEvents.recipes(event => {
    event.custom(
        {
            "type":"mekanism:metallurgic_infusing",
            "chemicalInput":{
                "amount":40,
                "tag":"mekanism:diamond"
            },
            "itemInput":{
                "ingredient":{
                    "item":"hostilenetworks:prediction_matrix"
                }
            },
            "output":{
                "item":"otto:enriched_prediction_matrix"
            }
        }
    ).id('hbx:mek_custom_matrix')
})