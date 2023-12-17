// Partalar 6 % 1-masala
function desks(son, son1, son2) {
  let sum;
  sum = Math.ceil((son + son1 + son2) / 2);
  return sum;
}
// console.log(desks(16,18,20));

// Raqamlar yig'indisi 6 % 2-masala
function numberSum(son) {
  let sum = 0;
  while (son >= 1) {
    sum += son % 10;
    son = Math.trunc(son / 10);
  }
  return sum;
}
// console.log(numberSum(12345));

// Omadli chipta 6 % 3-masala
const luckyTicket = function (son) {
  let res;
  let sum = 0;
  let total = 0;
  if (son < 99999 || son > 999999) {
    res = "NO";
    return res;
  }
  let s = son.toString().split("").map(parseFloat);
  for (let i = 0; i < s[2]; i++) {
    sum += s[i];
  }
  for (const item of s) {
    total += item;
  }
  if (total / sum == 2) {
    res = "YES";
  } else {
    res = "NO";
  }
  return res;
};
// console.log(luckyTicket(466559));

// Foiz1 6 % 4-masala
const percentage = (son, son1) => {
  let sum = son1 / (son / 100);
  return sum.toFixed(2) + "%";
};
// console.log(percentage(10, 20));

// Robo Password 6 % 5-masala
function password(son) {
  let sum = 0;
  let count = 0;
  while (son >= 1) {
    count++;
    if (son % 10 == 0) {
      return "No";
    }
    son = Math.trunc(son / 10);
  }
  if (count != 9) {
    return "NO";
  } else {
    return "YES";
  }
}
// console.log(password(123456789));

// A+B#3 6 % 6-masala
function aAndB(son,son1) {
  harflar = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26,
  };
  let a;
  let b;
  for (const key in harflar) {
      if (key == son) {
          a = harflar[key]
      }
      if (key == son1) {
          b = harflar[key]
      }
  }
  return ( a + b);
}
// console.log(aAndB("A","Z"));

// Zina Poya 6 % 7-masala
const stair = function (son){
    let sum = 0;
    while (son > 0) {
        sum++;
        son =  son-sum
    }
    return sum
}
// console.log(stair(6));

