// A + B 1 %  1-masala

function sum(son,son1) {
    return son + son1
}
// console.log(sum(1,5));

// Natural son #2 1 % 2-masala
function natural(a){
    let b = a % 10;
let on = Math.trunc(a /10 % 10);
let yuz = Math.trunc(a / 100);
let result = '';
switch (yuz) {
    case 1:
        result = `Bir yuz`
        break;
    case 2:
        result = `Ikki yuz`
        break;
    case 3:
        result = `Uch yuz`
        break;
    case 4:
        result = `Tort yuz`
        break;
    case 5:
        result = `Besh yuz`
        break;
    case 6:
        result = `Olti yuz`
        break;
    case 7:
        result = `Yetti yuz`
        break;
    case 8:
        result = `Sakkiz yuz`
        break;
    case 9:
        result = `To'qqiz yuz`
        break;

    default:
        result = ""
        break;
}
switch (on) {
    case 1:
        result += ` o'n `
        break;
    case 2:
        result += ` yigirma `
        break;
    case 3:
        result += ` o'ttiz `
        break;
    case 4:
        result += ` qirq `
        break;
    case 5:
        result += ` ellik `
        break;
    case 6:
        result += ` oltmish `
        break;
    case 7:
        result += ` yetmish `
        break;
    case 8:
        result += ` sakson `
        break;
    case 9:
        result += ` to'qson `
        break;

    default:
        result += ""
        break;
}
switch (b) {
    case 1:
        result += ` bir`
        break;
    case 2:
        result += ` ikki`
        break;
    case 3:
        result += ` uch`
        break;
    case 4:
        result += ` tort`
        break;
    case 5:
        result += ` besh`
        break;
    case 6:
        result += ` olti`
        break;
    case 7:
        result += ` yetti`
        break;
    case 8:
        result += ` sakkiz`
        break;
    case 9:
        result += ` to'qqiz`
        break;

    default:
        result += ""
        break;
    }
    return result
}
// console.log(natural(123));

// Juft Karrali 1 % 3-masala
function evenMultiples(son){
    if (son % 2 == 0) {
        return son
    }else {
        return son * 2
    }
}
// console.log(evenMultiples(362));

// Taqqoslash 1 % 4-masala
const comparison = (son,son1,son2) => {
    let count = 0
    if (son == son1 && son1 == son2) {
         count = 1
    }
    if (son != son1 ) {
        count++
    }
    if (son1 != son2 ) {
        count++
    }
    if (son != son2) {
        count++
    }
    return count
}
// console.log(comparison(1,1,3));

// Damino toshlari 1 % 5-masala
const stone = (son ,son1) => {
     let sum =  Math.trunc(son * son1 / (2*1))
     return sum 
}
// console.log(stone(2,4));

// Mr.Quloq 1 % 6-masala
function ear (text){
    return text
}
// console.log(ear("Assalomu alaykum"));

// Ajoyib o'yin 1 % 7-masala
function greatGame(a,b){
    let count  = 0 ;
    while(a <= b){
        count++
        a++
    }
    return count
}
// console.log(greatGame(5,10));

