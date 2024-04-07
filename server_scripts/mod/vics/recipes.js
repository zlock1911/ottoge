ServerEvents.recipes(event => {
    event.shapeless('otto:gun_ingot', ['#forge:ingots/iron', '#forge:gems/flint', '#forge:ingots/iron', '#forge:gems/flint'])
    event.shapeless('otto:ammo_box', ['otto:gun_ingot', 'otto:gun_ingot', 'otto:gun_ingot', '#forge:ingots/iron'])
    event.shaped('12x pointblank:ammo9mm', ['ABC'], {
        A:'#forge:dusts/gunpowder',
        B:'otto:ammo_box',
        C:'#forge:ingots/copper'
    })
    event.shaped('12x pointblank:ammo45acp', ['ABC', 'A  '], {
        A:'#forge:dusts/gunpowder',
        B:'otto:ammo_box',
        C:'#forge:ingots/copper'
    } )
    event.shaped('48x pointblank:ammo46', ['ABC', 'ACA'], {
        A:'#forge:dusts/gunpowder',
        B:'otto:ammo_box',
        C:'#forge:ingots/copper'
    })
    event.shaped('32x pointblank:ammo545', ['ABC', 'AAA'], {
        A:'#forge:dusts/gunpowder',
        B:'otto:ammo_box',
        C:'#forge:ingots/copper'
    })
    event.shaped('32x pointblank:ammo556', ['ABA', 'AAA'], {
        A:'#forge:dusts/gunpowder',
        B:'otto:ammo_box'
    })
    event.shaped('16x pointblank:ammo68', ['ABA', 'ACA'], {
        A:'#forge:dusts/gunpowder',
        B:'otto:ammo_box',
        C:'#forge:ingots/copper'
    })
    event.shaped('32x pointblank:ammo762', ['CBC', 'AAA'], {
        A:'#forge:dusts/gunpowder',
        B:'otto:ammo_box',
        C:'#forge:ingots/copper'
    })
    event.shaped('32x pointblank:ammo762x51', ['CAC', 'ABA'], {
        A:'#forge:dusts/gunpowder',
        B:'otto:ammo_box',
        C:'#forge:ingots/copper'
    })
    event.shaped('10x pointblank:ammo338lapua', ['AAA', 'ABA', 'ACA'], {
        A:'#forge:dusts/gunpowder',
        B:'otto:ammo_box',
        C:'#forge:ingots/copper'
    })
    event.shaped('4x pointblank:ammo50bmg', ['ACA', 'ABA', 'ACA'], {
        A:'#forge:dusts/gunpowder',
        B:'otto:ammo_box',
        C:'#forge:ingots/copper'
    })
    event.shaped('12x pointblank:ammo12gauge', ['CAC', 'ABA', 'CAC'], {
        A:'#forge:dusts/gunpowder',
        B:'otto:ammo_box',
        C:'#forge:ingots/copper'
    })
})