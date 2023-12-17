// Uchburchakli sonlar 4 % 1-masala
function triangleNumber(son) {
  let sum = (son * (son + 1)) / 2;
  return sum;
}
// console.log(triangleNumber(3));

// Maosh 4 %  2-masala
let a = "963 487 847";
function salary(arg) {
  let max;
  let min;
  let arr = arg.split(" ").map(parseFloat);
  max = arr[0];
  min = arr[0];
  arr.forEach((element) => {
    if (max < element) {
      max = element;
    }
    if (min > element) {
      min = element;
    }
  });
  return max - min;
}
// console.log(salary(a));

// Qurilmalar yetkazish 4 % 3-masala
function deviceDelivery(arg, arg1) {
  return Math.ceil(arg / arg1);
}

// console.log(deviceDelivery(5,2));

// Yo'ldagi daraxtalar 4 % 4-masala
function roadTrees(arg, arg1) {
  let count = 0;
  for (let i = arg; i <= arg1; i++) {
    count++;
  }
  return count;
}
// console.log(roadTrees(12,25));

// Poyezdga chipta 4 % 5-masala
function trainTicket(arg) {
  let res;
  if (arg <= 0 || arg >= 11) {
    return (res = "Siz mavjud bo'lmagan sinfni kiritdingiz !!!");
  }
  if (arg >= 2 && arg <= 7) {
    res = "Ecanom 105K";
  }
  if (arg == 8 || arg == 9) {
    res = "Biznes 140K";
  }
  if (arg == 1 || arg == 10) {
    res = "VIP 210K";
  }
  return res;
}
// console.log(trainTicket(1));


// Robolandiya(Ro'yhatga olish) 4 % 6-masala
function election(arg) {
  let res;
  let str = arg.split(" ");
  let str1 = str[0].split("");
  let str2 = str1[str1.length - 1];
  if (str2 == "v" || str2  == "V") {
    str.reverse();
  }
  return str;
}
// console.log(election("Rustamov Javohir"));
// console.log(election("Sherali Jo'rayev"));

// 3 Kengru 4 % 7-masala
function threeKengaru(arg,arg1,arg2){
  let min,max;
  let sum;
  if (arg > arg1 ) {
    max = arg;
    min = arg1
  }
  else{
    max = arg1;
    min = arg;
  }
  if (min > arg2) {
    min = arg2
  }
  if (max < arg2) {
    max = arg2
  }
  let count = 0;
  sum = (arg+arg1+arg2)-(min+max)+1;
  for (let i = sum; i < max; i++) {
    count++
  }
  return count
}
// console.log(threeKengaru(3, 5,9));



const arr = [1,2,3,4,5,6,7,8,9,10];
const findValue = (number) => number == 0
const fountValue =  arr.find(findValue)
console.log(fountValue);