// MOD % 7 10 % 1-masala //berilgan son 7 ga qoldiqsiz bo'linadimi
function seventhNumber(son) {
  let res = son % 7 == 0 ? "Yes" : "No";
  return res;
}
// console.log(seventhNumber(77777));

// Eng katta juft son 10 % 2-masala
const largeNumber = (arg) => {
  let son = arg.trim().split(" ").map(parseFloat);
  let res = son.every((value) => {
    return value % 2 == 1;
  });
  if (res == true) {
    return -1;
  }
  let arr = son.filter((value) => {
    return value % 2 == 0;
  });
  let max = arr[0];
  arr.forEach((element) => {
    if (max < element) {
      max = element;
    }
  });
  return max;
};
// console.log(largeNumber("113 65 21 98"));

// Yig'indi 10 % 3-masala
const total = (son) => {
  let res = 0;
  if (son > 0) {
    for (let i = 1; i <= son; i++) {
      res += i;
    }
  } else {
    for (let i = son; i <= -1; i++) {
      res += i;
    }
  }
  return res;
};
// console.log(total(3));

// Tub sonlarni hosil qilish 10 % 4-masala
function prime(son) {
  let count = 0;
  for (let i = 1; i <= son; i++) {
    if (son % i == 0) {
      count++;
    }
  }
  return count == 2 ? true : false;
}

const number_prime = function (arg) {
  let arr = arg.split(" ").map(parseFloat);
  let son = arr[0];
  let son1 = arr[1];
  let res = "";
  for (let i = son; i <= son1; i++) {
    if (prime(i)) {
      res += i + " ";
    }
  }
  return res;
};
// console.log(number_prime("2 9"));

// Yandex taxi 10 % 5-masala

const taxi = function (son) {
  let n = son.split(" ").map(parseFloat)[0];
  let m = son.split(" ").map(parseFloat)[1];

  let max = Math.trunc(n / 5);
  let min = 0;
  if (m <= max) {
    min = -1;
    max = -1;
  }
  return `${min} ${max}`;
};

// console.log( taxi("14 4"));

// Qism satrlar soni 10 % 6-masala
const text = function (text) {
  return text.length;
};
// console.log(text("a"));

// Yolg'iz son 10 % 7-masala

function alone_number(arg) {
  let son = arg.split(" ").map(parseFloat);
  let res = ''
  for (const value of son) {
    let count = 0;
    for (const element of son) {
      if (value == element) {
        count++;
      }
    }
    if (count == 1) {
      res += value + " "
    }
  }
  return res
}
// console.log(alone_number("0 0 2 1 1 3 4 "));
