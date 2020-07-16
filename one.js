console.log("Hello");
//alert("hey k");
//let age = prompt("what is your age");
//console.log(age);       
let age=21;
if(confirm("is your age is 21+?"))
{
    console.log("can drink");
}
else{
    console.log("cannot drink");
}
//console.log("age")


//methods of Strings and Array
let str1 = "Apple, Banana, Kiwi";
let res1 = str1.substring(2,13);
console.log(res1);

let str = "Apple, Banana, Kiwi";
let res = str.slice(-12,-6);
console.log(res);

let fruits = ["Banana", "Orange", "Apple", "Mango"];
let mm =fruits.join("*");
console.log(mm);

let res3= fruits.shift();
console.log(res3);

delete fruits[2];
console.log(fruits);