const letter = document.getElementById('letter');
const answer = document.getElementById('answer');


// Cherokee Syllabery Rows
const prows = [
    ["a", "e", "i", "o", "u", "v"],
    ["ga", "ka", "ke/ge", "ki/gi", "ko/go", "ku/gu", "kv/gv"],
    ["ha", "he", "hi", "ho", "hu", "hv"],
    ["la", "le", "li", "lo", "lu", "lv"],
    ["ma", "me", "mi", "mo", "mu"],
    ["na", "hna", "ne", "ni", "no", "nu", "nv"],
    ["qua", "que", "qui", "quo", "quu", "quv"],
    ["sa", "s", "se", "si", "so", "su", "sv"],
    ["da", "ta", "de", "te", "di", "ti", "do/to", "du/tu", "dv/tv"],
    ["dla", "tla", "tle/dle", "tli/dli", "tlo/dlo", "tlu/dlu", "tlv/dlu"],
    ["tsa", "tse", "tsi", "tso", "tsu", "tsv"],
    ["wa", "we", "wi", "wo", "wu", "wv"],
    ["ya", "ye", "yi", "yo", "yu", "yv"]];

const crows = [
    ["\u13A0", "\u13A1", "\u13A2", "\u13A3", "\u13A4", "\u13A5"],
    ["\u13A6", "\u13A7", "\u13A8", "\u13A9", "\u13AA", "\u13AB", "\u13AC"],
    ["\u13AD", "\u13AE", "\u13AF", "\u13B0", "\u13B1", "\u13B2"],
    ["\u13B3", "\u13B4", "\u13B5", "\u13B6", "\u13B7", "\u13B8"],
    ["\u13B9", "\u13BA", "\u13BB", "\u13BC", "\u13BD"],
    ["\u13BE", "\u13BF", "\u13C1", "\u13C2", "\u13C3", "\u13C4", "\u13C5"],
    ["\u13C6", "\u13C7", "\u13C8", "\u13C9", "\u13CA", "\u13CB"],
    ["\u13CC", "\u13CD", "\u13CE", "\u13CF", "\u13D0", "\u13D1", "\u13D2"],
    ["\u13D3", "\u13D4", "\u13D5", "\u13D6", "\u13D7", "\u13D8", "\u13D9", "\u13DA", "\u13DB"],
    ["\u13DC", "\u13DD", "\u13DE", "\u13DF", "\u13E0", "\u13E1", "\u13E2"],
    ["\u13E3", "\u13E4", "\u13E5", "\u13E6", "\u13E7", "\u13E8"],
    ["\u13E9", "\u13EA", "\u13EB", "\u13EC", "\u13ED", "\u13EE"],
    ["\u13EF", "\u13F0", "\u13F1", "\u13F2", "\u13F3", "\u13F4"]];


// Main Function
const randomLetter = document.getElementById('random-letter');
randomLetter.addEventListener('click', () => {
    let letterRows = [];
    let scriptChoice = [];

    //check if row selectors are checked and adds row index to letterRows
    for (let i = 1; i <= 13; i++){
        if (document.getElementById("row" + i).checked) {
            letterRows.push(i - 1);
        }
    }


    if (letterRows.length >= 1){
        let selectedRow = letterRows[Math.floor(Math.random() * letterRows.length)];
        let selectedLetter = Math.floor(Math.random() * prows[selectedRow].length);
        letter.textContent = prows[selectedRow][selectedLetter];
        answer.textContent = crows[selectedRow][selectedLetter];
    }
    

})