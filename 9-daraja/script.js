// MOD %3 9 % 1-masala
function threeNumber(son) {
  return son % 3 == 0 ? "Yes" : "No";
}
// console.log(threeNumber(99));

// Foiz2 9 %  2-masala (0515)
const percentage = (son) => {
  let son1 = son.split("");
  son1.pop();
  let son2 = son1.map(parseFloat).join("");

  return 10000 / son2 + "%";
};
// console.log(percentage("250%"));

// Ketma - ketlikni top 9 % 3-masala
const find_the_sequence = function (arg) {
  let son = (100 + arg) ** 3;
  return son;
};

// console.log(find_the_sequence(7));

// Vaqtlar oralig'i 9 % 4-masala
function timeInterval(arg, arg1) {
  let son = arg.trim().split(" ").map(parseFloat);
  let son1 = arg1.trim().split(" ").map(parseFloat);
  let res =
    son1[0] * 3600 +
    son1[1] * 60 +
    son1[2] -
    (son[0] * 3600 + son[1] * 60 + son[2]);
  return res;
}
// console.log(timeInterval("   1 2 30","1 3 20    "));

// 2 And 3 #1 9 % 5-masala
const twoAndThree = (son, son1) => {
  let res = son * 3 >= son1 ? "Yes" : "No";
  return res;
};

// console.log(twoAndThree(2,5));


// 9 % o'rniga 10 % masalalardan foydalanilgan

// O'rtacha maosh 10 % 1-masala
function maosh(arr) {
  let sortedArr = arr.trim().split(" ").map(parseFloat).sort((a, b) => {
    return a - b;
  });
  sortedArr.pop();
  sortedArr.shift();
  let count = 0;
  let sum = 0;
  sortedArr.forEach((element) => {
    count++;
    sum += element;
  });
 return sum = sum / count;
}
// console.log(maosh("3000 1000 2000 4000   "));

// Sardor va uning buvisi 10 % 2-masala
const sardorAge = (arg) => {
    let count = 0;
    let son = arg.trim().split(" ").map(parseFloat)
    if (son[0] < son[1] ) {
        return -1
    }
        for (let i = 0; i <= 100; i++) {
            if (son[0]+i == (son[1] +i)*2) {
                break
            }
            count++
        }
        return count
}
// console.log(sardorAge("38 16"));

