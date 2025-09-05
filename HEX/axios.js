// https://hexschool.github.io/ajaxHomework/data.json
const T = document.querySelector("h1");
let ary = [];

// AJAX在發送請求資料並等待資料的同時，會讓JavaScript的程式繼續往下跑
axios
	// .get(...)從...的網址中取得資料
	.get("https://hexschool.github.io/ajaxHomework/data.json")
	.then(function (response) {
		ary = response.data;
		console.log(ary[0].name);
		// console.log(response.status);
		// console.log(response.statusText);
		// console.log(response.headers);
		// console.log(response.config);
		// console.log(response);
		renderData();
	});

function renderData() {
	console.log(ary);
	T.textContent = ary[0].name;
}
console.log(ary);
