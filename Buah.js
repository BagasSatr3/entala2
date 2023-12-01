function LetterValue(string) {
    const totalLetters = {};
  
    for (const element of string) {
      const letter = element;
      if (totalLetters[letter]) {
        totalLetters[letter]++;
      } else {
        totalLetters[letter] = 1;
      }
    }
  
    return totalLetters;
  }
  
  const string1 = "Buah";
  const string2 = "zoom";
  
  const totalLetters1 = LetterValue(string1);
  const totalLetters2 = LetterValue(string2);
  
  console.log("Buah Output :", totalLetters1);
  console.log("Zoom Output :", totalLetters2);