// Direktor tashrifi 2 % 1-masala
const director = function(n,p){
    return n * p
}
// console.log(director(4, 2025));

// O'rin almashtirish 2 % 2-masala
const replacement = (son,son1) =>{
    let a = son1;
    son1 = son;
    son = a
    return `${son} ${son1}` ;
}
// console.log(replacement(5,50));

// Zarik 2 % 3-masala
function zarik (son){
    let result;
    if (1 <= son <=6) {
     result = 7-son;
    }
    else{
        result = "Siz kiritgan son savolga mos emas"
    }
    return result
 
}
// console.log(zarik(4));

// Kvadrat sonlar 2 % 4-masala
const square = (son) => {
    let sum = son ** 2;
    return sum
}
// console.log(square(5));

// Eng katta son 2 % 5-masala
const ThreeNumberMax = (son,son1,son2) =>{
    let max;
    if (son > son1) {
        max = son
    }else{
        max = son1
    }
    if (max < son2) {
        max = son2
    }
    return max
}
// console.log(ThreeNumberMax(12,36,-98));

// Tortburchak 2% 6-masala
function rectangle (a,b){
    let p =( a + b )*2;
    let y = a * b;
    if (p > y) {
        return p
    }
    else{
        return y
    }
}
// console.log(rectangle(42,18468));

// HTTS 2 % 7-masala
function htts (son){
    let count = 0
   while (son >= 1) {
       if (son % 2 == 0) {
           return "No"
       }
       count++
       son = Math.trunc(son / 10)
   }
   if (count % 2 == 1) {
       return "Yes"
   }
}
// console.log(htts(13578));
