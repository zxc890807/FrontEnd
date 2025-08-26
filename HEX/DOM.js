// 使用querySelector來選擇元素
// querySelector只會選擇DOM中的第一個符合的元素
const T = document.querySelector('h1');

// textContent可以更改文字內容
T.textContent = "TITLE VERIFIED BY JS"

// innerHTML會將元素內的HTML直接清除並改寫成``內的字串
// ``內的字串可以帶入變數
const ol = document.querySelector('ol');
let P = "p3(verified order by js)"
ol.innerHTML = `<li>
				<p>${P}</p>
			</li>
			<li>
				<p>p2</p>
			</li>
			<li>
				<p>p1</p>
			</li>`

// 使用querySelectorAll可以選擇所有符合的元素，並透過類似陣列的方式操作
const G = document.querySelectorAll('a');
G[1].setAttribute("href","https://yahoo.com.tw")
G[2].setAttribute("href","https://apple.com.tw")
G[0].setAttribute("class","red")
G[1].setAttribute("class","blue")
G[2].setAttribute("class","brown")

// 抓屬性 x.getAttribute("屬性")
const ul = document.querySelector("ul");
console.log("G[2]的class:"+G[2].getAttribute("class"))
// 抓結構
console.log(ul.innerHTML)
// 抓文字
console.log(ul.textContent)

//
const txt = document.querySelector(".txt");
const opt = document.querySelector(".selectlist");
console.log(opt.value)