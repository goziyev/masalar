// Teskari ko'dlash #3 8 % 1-masala
const reverse_encoding = (son) => {
  let res = son ** 3 + son;
  return res;
};
// console.log(reverse_encoding(8));

// Beshburchakli sonlar 8 % 2-masala
const pentagonalNumbers = (n) => {
  let sum = 1;
  sum = (n - 1) * n + (n * (n + 1)) / 2;
  return sum;
};
// console.log(pentagonalNumbers(2));

// Oltiburchakli sonlar 8 % 3-masala
function hexagon(son) {
  son = son * (2 * son - 1);
  return son;
}
// console.log(hexagon(2));

// Ko'pburchak yig'indi 8 % 4-masala
const polygonTotal = (son) => {
  return (son - 2) * 180;
};
// console.log(polygonTotal(3));

// Vaqt 8 % 5-masala
function newTime(k, q) {
  let arr = k.split(":").map(parseFloat);
  let soat = arr[0];
  let minut = arr[1];
  let a = q;
  let b = 0;
  let c = Math.trunc(a / 60);
  soat += c;
  b = a % 60;
  minut += b;

  if (minut >= 60) {
    minut -= 60;
    soat++;
  }
  if (soat >= 24) {
    soat -= 24;
  }

  if (soat == 0 && minut == 0) {
    console.log(`${soat}0 : ${minut}0`);
  } else if (soat == 0) {
    console.log(`${soat}0 : ${minut}`);
  } else if (minut == 0) {
    console.log(`${soat} : ${minut}0`);
  } else {
    console.log(`${soat} : ${minut}`);
  }
}

// newTime("10 : 10",10)

// Toq va juft 8 % 6-masala
function evenAndOdd(son) {
  let res = son.toString().split("").map(parseFloat);
  let odd = 0;
  let even = 0;
  res.forEach((element, index) => {
    if (index % 2 == 0) {
      even += element;
    }
    if (index % 2 == 1) {
      odd += element;
    }
  });
  let result = even - odd;
  if (result == 0) {
    return "Yes";
  } else {
    return "No";
  }
}
// console.log(evenAndOdd(1212121212121));

// Yordamchi 8 % 7-masala
const helper = (son, son1) => {
  if(son1 == 1){
    return 1
  }
  let arr = "";
  let result, newResult;
  let newArr = [];
  for (let i = son; i < son1; i++) {
    let num = i;
    arr = "";
    for (let j = 0; j < i; j++) {
      arr = arr + " " + num;
    }
    newArr.push(arr);
  }
  newResult = 0;
  result = newArr.join("").split(" ").map(parseFloat);
  for (let s = 1; s <= son1; s++) {
    newResult += result[s];
  }
  return newResult;
};
// console.log(helper(1, 6));

