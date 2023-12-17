// Minimum va maksimum yig'indi 5 % 1-masala
function fiveNumberSum(arg) {
  let num = arg.split(" ").map(parseFloat);
  let max, min;
  max = num[0];
  min = num[0];
  let sum = 0;
  let res;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
    if (max < num[i]) {
      max = num[i];
    }
    if (min > num[i]) {
      min = num[i];
    }
  }

  res = `Minumum Yig'indi ${sum - max}; Maxsimum Yig'indi ${sum - min}`;
  return res;
}

// console.log(fiveNumberSum("1 2 3 4 5"));

// Kabisa Yili 5 % 2-masala
const year = (arg) => {
  let res;
  if (arg % 4 == 0 && arg % 100 != 0) {
    res = "Kabisa yili";
  } else {
    res = "Kabisa yili emas";
  }
  if (arg % 400 == 0) {
    res = "Kabisa yili";
  }
  return res;
};
// console.log(year(2020));

// Floyd uchburchagi 5 % 3-masala

function floydTriangle(arg) {
  let tempStr = "";
  for (let i = 0; i < arg; i++) {
    let prevNumber = 1;
    tempStr = "";
    j = 0;
    while (j <= i) {
      tempStr = tempStr + " " + prevNumber;
      j++;
      prevNumber++;
    }
    console.log(tempStr);
  }
}
floydTriangle(3);

// Sovg'a 5 % 4-masala
function gift(arg, arg1) {
  let sum = 0;
  let arr = arg.split(" ").map(parseFloat);
  arr.forEach((element) => {
    sum += element;
  });
  sum = arg1 - sum;
  if (sum <= 0) {
    sum = 0;
  }
  return sum;
}
// console.log(gift("1 2 3 4 5 6 7" ,100));

// Toshalr o'yini 5 % 5-masala
const gameStones = (arg) => {
  if (arg % 2 == 1) {
    return "First player";
  } else {
    return "Second player";
  }
};
// console.log(gameStones(1));

// Koshi 5 % 6-masala
function koshi(arg, arg1) {
  let sum = (arg + arg1) / 2;
  let res;
  let total = Math.sqrt(arg * arg1);
  if (sum > total) {
    res =  ">"
  }else{
    res =  "<"
  }
  if (sum == total) {
    res =  "="
  }
  return res
}
// console.log(koshi(2,2));

// Fasllar 5 % 7-masala
function seasons(arg) {
  let res;
  if(arg >12 || arg <= 0){
    res = "Error";
    return res
  }
  if (arg == 1 || arg == 2 || arg == 12) {
    res = "Winter"
  }
  else if (arg == 3 || arg == 4 || arg == 5){
    res = "Spring"
  }
  else if (arg == 6 || arg == 7 || arg == 8){
    res = "Summer"
  }
  else if (arg == 9 || arg == 10|| arg == 11){
    res = "Autumn"
  }
  return res
}
// console.log(seasons(5));
