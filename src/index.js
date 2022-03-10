const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
     for (let i = 0; i < expr.length; i+=10) {
         let symbCode = expr.slice(i, i + 10);
         if (symbCode === '**********') {
             result += " ";
         } else {
             let index = symbCode.indexOf('1');
             symbCode = symbCode.slice(index, symbCode.length);
             symbCode = symbCode.replaceAll('10', '.').replaceAll('11', '-')
             result += MORSE_TABLE[symbCode];  
         }
     }
     
 return result;
}

module.exports = {
    decode
}