ItemEvents.tooltip(event => {
/*     event.add('enderio:dragonsteel_conduit', [
        [Text.of('传输速率：'),Text.of('I').red().bold(),Text.of('N').gold().bold(),Text.of('F').yellow().bold(),Text.of('I').green().bold(),Text.of('N').aqua().bold(),Text.of('I').blue().bold(),Text.of('T').lightPurple().bold(),Text.of('Y').darkPurple().bold(),' ', 'RF']
    ]) */
    event.add('enderio:dragonsteel_conduit', [
        [Text.of('传输速率：'),Text.of('<rainb>INFINITY</rainb>').bold(), ' ', 'RF']
    ])
    event.add('enderio:basic_energy_conduit', [
        [Text.of('传输速率：'), Text.of('640').darkRed(), ' ', 'RF']
    ])
    event.add('enderio:enhanced_energy_conduit', [
        [Text.of('传输速率：'), Text.of('5120').yellow(), ' ', 'RF']
    ])
    event.add('enderio:ender_energy_conduit', [
        [Text.of('传输速率：'), Text.of('20480').green(), ' ', 'RF']
    ])
    event.add('enderio:ender_steel_conduit', [
        [Text.of('传输速率：'), Text.of('81920').gold(), ' ', 'RF']
    ])
    event.add('enderio:melodic_conduit', [
        [Text.of('传输速率：'), Text.of('327680').lightPurple(), ' ', 'RF']
    ])
    event.add('enderio:stellar_conduit', [
        [Text.of('传输速率：'), Text.of('1310720').bold(), ' ', 'RF']
    ])
    event.add('biggerreactors:reactor_casing', [
        [Text.of('最大长宽高：9×9×16')]
    ])
    event.add('biggerreactors:reactor_glass', [
        [Text.of('最大长宽高：9×9×16')]
    ])
    event.add('biggerreactors:turbine_casing', [
        [Text.of('最大长宽高：9×9×32')]
    ])
    event.add('biggerreactors:turbine_glass', [
        [Text.of('最大长宽高：9×9×32')]
    ])
    
})