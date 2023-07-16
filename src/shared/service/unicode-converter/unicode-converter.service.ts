import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnicodeConverterService {

  constructor() { }

  convertToKap(gujaratiText: string): string {
    const unicodeToKap127Mapping: { [key: string]: string } = {
      // "શ્": "`",
      "ક્ષ": "1",
      "દ્ર": "2",
      "ઘ": "3",
      ",": "4",
      "પ": "5",
      "ણ": "6",
      "જ્ઞ": "7",
      "ટ": "8",
      "ઠ": "9",
      "ડ": "0",
      "રૂ": "~",
      "૧": "!",
      "ક્ર": "@",
      "૩": "#",
      "૪": "$",
      "પ્": "%",
      "૬": "^",
      "૭": "&",
      "૮": "*",
      "૯": "(",
      "૦": ")",
      "ષ્": "q",
      "ધ્": "w",
      "ભ્": "e",
      "ચ્": "r",
      "ત્": "t",
      "થ્": "y",
      "ગ્": "u",
      "ય્": "i",
      "ઃ": "o",
      "ઉ": "p",
      "ે": "[",
      "ષ": "Q",
      "ધ": "W",
      "ભ": "E",
      "ચ": "R",
      "ત": "T",
      "થ": "Y",
      "ગ": "U",
      "ય": "I",
      "ફ": "O",
      ".": "P",
      "ૈ": "{",
      "બ્": "a",
      "(": "s",
      "મ્": "d",
      ")": "f",
      "ન્": "g",
      "ઝ": "h",
      "વ્": "j",
      "ઋ": "k",
      "િ": "l",
      "સ": ";",
      "ૃ": "'",
      "બ": "A",
      "ક": "S",
      "મ": "D",
      "ા": "F",
      "ન": "G",
      "જ": "H",
      "વ": "J",
      "છ": "K",
      "ી": "L",
      "સ્": ":",
      "શ્ર": "z",
      "શ્": "x",
      "ણ્": "c",
      "ફ્ર": "v",
      "ખ્": "b",
      "દ્ય": "n",
      "?": "m",
      "લ": ",",
      "ઇ": ".",
      "ળ": "/",
      "ર": "Z",
      "શ": "X",
      "હ": "C",
      "અ": "V",
      "ખ": "B",
      "દ": "N",
      "ો": "M",
      "-": "<",
      "ઈ": ">",
      "ળ્": "?",
      "ર્": '"'
    }

    let kap127Text = '';
    for (let i = 0; i < gujaratiText.length; i++) {
      const char = gujaratiText[i];
      const convertedChar = unicodeToKap127Mapping[char] || char;
      kap127Text += convertedChar;
      if (convertedChar === 'l' && !!gujaratiText[i - 1] && kap127Text.length > 1) {
        const secondLastChar = kap127Text.slice(-2, -1);
        const lastChar = kap127Text.slice(-1);
        const swappedString = kap127Text.slice(0, -2) + lastChar + secondLastChar;
        kap127Text = swappedString;
      }
    }

    return kap127Text;
  }

}
