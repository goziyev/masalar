//  Egizak tub sonlar 7 % 1-masala
const prime_numbers = function (son, son1) {
  let sonCount = 0;
  let son1Count = 0;
  for (let i = 0; i <= son; i++) {
    if (son % i == 0) {
      sonCount++;
    }
  }
  for (let i = 0; i <= son1; i++) {
    if (son1 % i == 0) {
      son1Count++;
    }
  }
  if (sonCount <= 2 && son1Count <= 2) {
    res = son - son1;
  } else {
    return "NO";
  }
  if (res == 2 || res == -2) {
    return "YES";
  }
};
// console.log(prime_numbers(17,19));

// Teskari So'zlardan iborat Matn  % 2-masala
function reverseWords(son, arr) {
  let b = arr.split(" ");
  let a;
  let res = "";
  b.forEach((element) => {
    a = element.split("");
    if (a.length > son) {
      a.reverse();
    }
    res += a.join("") + " ";
  });
  return res;
}
// console.log(reverseWords(3,"Quvonchbekning savolini topgan Yusuf endi unga quydagicha savol berdi"));

// Tana vazn indeksi 7 % 3-masala
const bodyAndWeight = (weight, height) => {
  let TVI = (10000 * weight) / height ** 2;
  let res;
  if (TVI < 16) {
    res = "Yuqori vazn yetishmovchiligi";
  } else if (16 <= TVI && TVI < 18.5) {
    res = "Vazn yetishmasligi";
  } else if (18.5 <= TVI && TVI <= 25) {
    res = "Ideal vazn";
  } else if (25 < TVI && TVI <= 30) {
    res = "Ortiqcha vazn";
  } else if (30 < TVI && TVI <= 35) {
    res = "Semizlikning 1 darajasi";
  } else if (35 < TVI && TVI <= 40) {
    res = "Semizlikning 2 darajasi";
  } else if (40 < TVI) {
    res = "Semizlikning 3 darajasi";
  }
  return res;
};
// console.log(bodyAndWeight(95,183));

// Paskal Uchburchagi 7 % 4-masala
function pascalTriangle(son) {
  let res = 1;
  if (son == 1) {
    return res;
  }
  return res + son;
}
// console.log(pascalTriangle(1));

// Cheksiz ketma ketlik 7 % 5-masala
const infinite = (son) => {
  let arr = "";
  let newArr = [];
  for (let i = 0; i <= son; i++) {
    let num = 1;
    arr = "";
    for (let j = 0; j < i; j++) {
      arr = arr + " " + num;
      num++;
    }
    newArr.push(arr);
  }
  let result = newArr.join("").split(" ");
  return result[son];
};
// console.log(infinite(3));

// Kitoblar 7 % 6-masala
const books = function (son) {
  let res = 0;
  let count = 0;
  if (son >= 1 && son <= 9) {
    return son;
  }
  for (let i = 1; i <= son; i++) {
    count = 0;
    for (let j = 1; j <= i; j *= 10) {
      count++;
    }
    res += count;
  }
  return res;
};

// console.log(books(13));

// Buratinoning sovg'asi 7 % 7-masala
function buratino(son){
  return son;
}
// console.log(buratino(10));
