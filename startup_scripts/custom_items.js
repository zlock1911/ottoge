
StartupEvents.registry('item', event => {
	/*event.create('otto:item_alloy_ingot_end_steel').displayName('End Steel Ingot')*/
	event.create('otto:item_alloy_ingot_stellar_alloy').displayName('恒星合金锭')
	event.create('otto:item_alloy_ingot_melodic_alloy').displayName('旋律合金锭')
	event.create('otto:item_aheiluxing').displayName('啊嘿路星')
	event.create('otto:alloy_reinforced_plate').displayName('强化合金板')
	event.create('otto:alloy_reinforced_double_plate').displayName('双层强化合金板')
	event.create('otto:alloy_atomic_plate').displayName('原子合金板')
	event.create('otto:alloy_atomic_double_plate').displayName('双层原子合金板')
	event.create('otto:particle_source').displayName('粒子源')
	event.create('otto:ender_steel_casing').displayName('末影钢电容外壳')
	event.create('otto:melodic_casing').displayName('旋律合金电容外壳')
	event.create('otto:break_micro_processor').displayName('损坏的微处理器')
	event.create('otto:break_nano_processor').displayName('损坏的纳米处理器')
	event.create('otto:break_quantum_processor').displayName('损坏的量子处理器')
	event.create('otto:enriched_prediction_matrix').displayName('富集预测矩阵')
	event.create('otto:immortal_start').displayName('<rainb>不灭星图</rainb>')
	event.create('otto:karma').displayName('因果天道')
	event.create('otto:death_sea').displayName('死海')
	event.create('otto:time_river').displayName('岁月长河')
	event.create('otto:material_corridor').displayName('物质回廊')
	event.create('otto:gun_ingot').displayName('制枪钢锭')
	event.create('otto:ammo_box').displayName('子弹盒')
})

StartupEvents.registry('block', event => {
	event.create('otto:ls_dirt_signalum').displayName('信素植育土')
	event.create('otto:ls_dirt_lumium').displayName('流明植育土')
	event.create('otto:ls_dirt_enderium').displayName('末影植育土')
	event.create('otto:ls_dirt_soul_infused').displayName('注魂植育土')
	event.create('otto:ls_dirt_shellite').displayName('潜影合金植育土')
	event.create('otto:ls_dirt_twinite').displayName('双子物质植育土')
	event.create('otto:ls_dirt_dragonsteel').displayName('龙钢植育土')
})

StartupEvents.registry('fluid', event => {
	event.create('otto:unbotallthemodium_molten')
		.noBucket()
		.noBlock()
		.stillTexture('otto:block/fluid/unbotallthemodium_molten_still')
		.flowingTexture('otto:block/fluid/unbotallthemodium_molten_still')
		.displayName('熔融难得素-ATM')
	event.create('otto:unboiranium_molten')
		.noBucket()
		.noBlock()
		.stillTexture('otto:block/fluid/unboiranium_molten_still')
		.flowingTexture('otto:block/fluid/unboiranium_molten_still')
		.displayName('熔融难得素-振金')
	event.create('otto:vibrallthemodium_molten')
		.noBucket()
		.noBlock()
		.stillTexture('otto:block/fluid/vibrallthemodium_molten_still')
		.flowingTexture('otto:block/fluid/vibrallthemodium_molten_still')
		.displayName('熔融振金-ATM')
	event.create('otto:infinity_molten')
		.noBlock()
		.noBucket()
		.stillTexture('otto:block/fluid/infinity_molten')
		.flowingTexture('otto:block/fluid/infinity_molten')
		.displayName('熔融无尽')
})
