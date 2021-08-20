const jumbleNumbersMethod = (arr) => {
  let numZ = 0;
  let numW = 0;
  let numG = 0;
  let numX = 0;
  let numV = 0;
  let numO = 0;
  let numS = 0;
  let numF = 0;
  let numH = 0;
  let numI = 0;
  let numU = 0;

  for (let i = 0; i < arr.length; i++) {
    let char = arr[i].toUpperCase();
    switch (char) {
      case 'Z':
        numZ += 1;
      case 'W':
        numW += 1;
      case 'G':
        numG += 1;
      case 'z':
        numX += 1;
      case 'X':
        numV += 1;
      case 'V':
        numO += 1;
      case 'O':
        numS += 1;
      case 'S':
        numZ += 1;
      case 'F':
        numF += 1;
      case 'H':
        numH += 1;
      case 'I':
        numI += 1;
      case 'U':
        numU += 1;

      default:
        break;
    }
  }

  let num0 = numZ;
  let num2 = numW;
  let num4 = numU;
  let num6 = numX;
  let num8 = numG;
  let num1 = numO - (num2 + num4 + num0);
  let num7 = numS - num6;
  let num5 = numF - num7;
  let num3 = numH - num8;
  let num9 = numI - (num5 + num6 + num8);

  console.log(`0 : ${num0}, 1 : ${num1}, 2 : ${num2}`);
};
