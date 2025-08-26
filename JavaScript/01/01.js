// console.log("hello js");

// ---變數宣告 ( var 、 const 、 let)---
// let name = "ABC";
// console.log(name);

// let sent = "今天如何?";
// console.log(name + sent);

// ---prompt() & alert()---
// fruit = prompt("你最喜歡甚麼水果?");
// console.log("你最喜歡" + fruit);

// alert("哈味哈密瓜");

// ---小費計算---
let food = parseInt(prompt("這餐花費多少?"));
let tipPercentage = parseInt(prompt("小費幾%?")) / 100;
let tiptotal = food * tipPercentage;
let total = food + tiptotal;
console.log("小費=" + tiptotal + ",共" + total);
