ServerEvents.recipes(event => {
    event.recipes.gtceu.circuit_assembler('hbx:gt_break_micro_processor_tin')
        .itemInputs(['otto:break_micro_processor', '4x #forge:bolts/annealed_copper', '8x #forge:fine_wires/red_alloy'])
        .inputFluids(Fluid.of('gtceu:tin', 144))
        .itemOutputs('4x gtceu:micro_processor')
        .EUt(2400)
        .duration(500)

    event.recipes.gtceu.circuit_assembler('hbx:gt_break_micro_processor_soldering_alloy')
        .itemInputs(['otto:break_micro_processor', '4x #forge:bolts/annealed_copper', '8x #forge:fine_wires/red_alloy'])
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('4x gtceu:micro_processor')
        .EUt(2400)
        .duration(500)

    event.recipes.gtceu.circuit_assembler('hbx:gt_break_nano_processor_tin')
        .itemInputs(['otto:break_nano_processor', '8x #forge:fine_wires/electrum', '4x #forge:bolts/platinum'])
        .inputFluids(Fluid.of('gtceu:tin', 144))
        .itemOutputs('4x gtceu:nano_processor')
        .EUt(2400)
        .duration(500)

    event.recipes.gtceu.circuit_assembler('hbx:gt_break_nano_processor_soldering_alloy')
        .itemInputs(['otto:break_nano_processor', '8x #forge:fine_wires/electrum', '4x #forge:bolts/platinum'])
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('4x gtceu:nano_processor')
        .EUt(2400)
        .duration(500)

    event.recipes.gtceu.circuit_assembler('hbx:gt_break_quantum_processor_tin')
        .itemInputs(['otto:break_quantum_processor', '24x #forge:fine_wires/platinum', '16x #forge:bolts/niobium_titanium'])
        .inputFluids(Fluid.of('gtceu:tin', 144))
        .itemOutputs('4x gtceu:quantum_processor')
        .EUt(2400)
        .duration(500)

    event.recipes.gtceu.circuit_assembler('hbx:gt_break_quantum_processor_soldering_alloy')
        .itemInputs(['otto:break_quantum_processor', '24x #forge:fine_wires/platinum', '16x #forge:bolts/niobium_titanium'])
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('4x gtceu:quantum_processor')
        .EUt(2400)
        .duration(500)
})