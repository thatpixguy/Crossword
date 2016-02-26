// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clueQuick: "First letter of greek alphabet",
					clueCryptic: "First letter of greek alphabet",
					answer: "alpha",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 1
				},
			 	{
					clueQuick: "Not a one ___ motor, but a three ___ motor",
					clueCryptic: "Not a one ___ motor, but a three ___ motor",
					answer: "phase",
					position: 3,
					orientation: "across",
					startx: 7,
					starty: 1
				},
				{
					clueQuick: "Created from a separation of charge",
					clueCryptic: "Created from a separation of charge",
					answer: "capacitance",
					position: 5,
					orientation: "across",
					startx: 1,
					starty: 3
				},
				{
					clueQuick: "The speeds of engines without and accelaration",
					clueCryptic: "The speeds of engines without and accelaration",
					answer: "idlespeeds",
					position: 8,
					orientation: "across",
					startx: 1,
					starty: 5
				},
				{
					clueQuick: "Complex resistances",
					clueCryptic: "Complex resistances",
					answer: "impedances",
					position: 10,
					orientation: "across",	
					startx: 2,
					starty: 7
				},
				{
					clueQuick: "This device is used to step-up, step-down, and/or isolate",
					clueCryptic: "This device is used to step-up, step-down, and/or isolate",
					answer: "transformer",
					position: 13,
					orientation: "across",
					startx: 1,
					starty: 9
				},
				{
					clueQuick: "Type of ray emitted frm the sun",
					clueCryptic: "Type of ray emitted frm the sun",
					answer: "gamma",
					position: 16,
					orientation: "across",
					startx: 1,
					starty: 11
				},
				{
					clueQuick: "C programming language operator",
					clueCryptic: "C programming language operator",
					answer: "cysan",
					position: 17,
					orientation: "across",
					startx: 7,
					starty: 11
				},
				{
					clueQuick: "Defines the alpha-numeric characters that are typically associated with text used in programming",
					clueCryptic: "Defines the alpha-numeric characters that are typically associated with text used in programming",
					answer: "ascii",
					position: 1,
					orientation: "down",
					startx: 1,
					starty: 1
				},
				{
					clueQuick: "Generally, if you go over 1kV per cm this happens",
					clueCryptic: "Generally, if you go over 1kV per cm this happens",
					answer: "arc",
					position: 2,
					orientation: "down",
					startx: 5,
					starty: 1
				},
				{
					clueQuick: "Control system strategy that tries to replicate the human through process (abbr.)",
					clueCryptic: "Control system strategy that tries to replicate the human through process (abbr.)",
					answer: "ann",
					position: 4,
					orientation: "down",
					startx: 9,
					starty: 1
				},
				{
					clueQuick: "Greek variable that usually describes rotor positon",
					clueCryptic: "Greek variable that usually describes rotor positon",
					answer: "theta",
					position: 6,
					orientation: "down",
					startx: 7,
					starty: 3
				},
				{
					clueQuick: "Electromagnetic (abbr.)",
					clueCryptic: "Electromagnetic (abbr.)",
					answer: "em",
					position: 7,
					orientation: "down",
					startx: 11,
					starty: 3
				},
				{
					clueQuick: "No. 13 across does this to a voltage",
					clueCryptic: "No. 13 across does this to a voltage",
					answer: "steps",
					position: 9,
					orientation: "down",
					startx: 5,
					starty: 5
				},
				{
					clueQuick: "Emits a lout wailing sound",
					clueCryptic: "Emits a lout wailing sound",
					answer: "siren",
					position: 11,
					orientation: "down",
					startx: 11,
					starty: 7
				},
				{
					clueQuick: "Information technology (abbr.)",
					clueCryptic: "Information technology (abbr.)",
					answer: "it",
					position: 12,
					orientation: "down",
					startx: 1,
					starty: 8
				},
				{
					clueQuick: "Asynchronous transfer mode (abbr.)",
					clueCryptic: "Asynchronous transfer mode (abbr.)",
					answer: "atm",
					position: 14,
					orientation: "down",
					startx: 3,
					starty: 9
				},
				{
					clueQuick: "Offset current control (abbr.)",
					clueCryptic: "Offset current control (abbr.)",
					answer: "occ",
					position: 15,
					orientation: "down",
					startx: 7,
					starty: 9
				}
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)
