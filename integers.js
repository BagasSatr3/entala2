function theSums(theNums, target) {
    const iContainer = {};
  
    for (let i = 0; i < theNums.length; i++) {
      const hasilku = target - theNums[i];
  
      if (iContainer.hasOwnProperty(hasilku)) {
        return [iContainer[hasilku], i];
      }
  
      iContainer[theNums[i]] = i;
    }
  
    return null;
  }

  const theNums = [2, 7, 11, 15];
const target = 9;
const hasil = theSums(theNums, target);

console.log(`if target is ${target}, then the output is :`, hasil);