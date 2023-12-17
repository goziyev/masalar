// Katta kichik 3 % 1-masala
const twoMinMax = (son, son1) => {
  let res;
 
  if (son > son1) {
    res = ">";
  } else{
    res = "<";
  }
  if (son == son1) {
    res = "=";
  }
  return res;
};
// console.log(twoMinMax(1,1));

// Sanash varti 3 % 2-masala
function toCount(son,son1){
    let count = 0;
    while (son <= son1){
        count++;
        son++;
    }
    return count * 10
}

// console.log(toCount(976,996));


// Yangi yil sovg'asi 3 % 3-masala 
const newYearsGift = (n,a,b,c) => {
    let sum = a + b +c;
    if (sum >= n) {
        return "Yes" 
    }else{
        return "No"
    }
}
// console.log(newYearsGift(120000,70000,40000,20000));

// Niqob - N1 3 % 4-masala
function mask(n,k){
    let sum = Math.trunc(k / n)
    return sum
}
// console.log(mask(3,12));

// Niqob - N2 3% 5-masala
const twomask = function (n,k){

        let sum =(k % n)
        return sum
    
}
// console.log(twomask(3,14));

// Ikki xonali sonning birinchi raqami 3 % 6-masala
function numberOne(son){
    let res;
    if (9 < son && son < 100) {
     res = Math.trunc(son / 10)
    }else{
        return res= "Siz kiritgan son 2 xonali emas"
    }
    return res
}

// console.log(numberOne(99));

// Oxirgi raqam 3 % 7-masala
const lastNumber = (son) => {
    let res = son % 10;
    return res
}
// console.log(lastNumber(753));