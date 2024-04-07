ServerEvents.recipes(event => {
    event.shaped('8x otto:ls_dirt_signalum', ['ABA', 'BCB', 'ABA'], {
        A: '#forge:ingots/signalum',
        B: 'thermal:phytosoil',
        C: '#forge:dusts/signalum'
    }).id('hbx:ls_dirt_signalum')
    event.shaped('16x otto:ls_dirt_lumium', ['ABA', 'BCB', 'ABA'], {
        A: '#forge:ingots/lumium',
        B: 'otto:ls_dirt_signalum',
        C: '#forge:dusts/lumium'
    }).id('hbx:ls_dirt_lumium')
    event.shaped('16x otto:ls_dirt_enderium', ['ABA', 'BCB', 'ABA'], {
        A: '#forge:ingots/enderium',
        B: 'otto:ls_dirt_lumium',
        C: '#forge:dusts/enderium'
    }).id('hbx:ls_dirt_enderium')
    event.shaped('16x otto:ls_dirt_soul_infused', ['ABA', 'BCB', 'ABA'], {
        A: '#forge:ingots/soul_infused',
        B: 'otto:ls_dirt_enderium',
        C: '#forge:dusts/soul_infused'
    }).id('hbx:ls_dirt_soul_infused')
    event.shaped('16x otto:ls_dirt_shellite', ['ABA', 'BCB', 'ABA'], {
        A: '#forge:ingots/shellite',
        B: 'otto:ls_dirt_soul_infused',
        C: '#forge:dusts/shellite'
    }).id('hbx:ls_dirt_shellite')
    event.shaped('16x otto:ls_dirt_twinite', ['ABA', 'BCB', 'ABA'], {
        A: '#forge:ingots/twinite',
        B: 'otto:ls_dirt_shellite',
        C: '#forge:dusts/twinite'
    }).id('hbx:ls_dirt_twinite')
    event.shaped('otto:ls_dirt_dragonsteel', ['ABA', 'BCB', 'ABA'], {
        A: '#forge:ingots/dragonsteel',
        B: 'otto:ls_dirt_twinite',
        C: '#forge:dusts/dragonsteel'
    }).id('hbx:ls_dirt_dragonsteel')

})