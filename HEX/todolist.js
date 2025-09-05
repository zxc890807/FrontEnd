const T = document.querySelector(".textInput");
const create = document.querySelector(".create");
const UL = document.querySelector("ul");
let listContent = [];
let listHTML = "";
create.addEventListener("click", function (e) {
	if (T.value !== "") {
		listContent.push(T.value);
		T.value = "";
		updateList();
	} else {
		console.log("Please input content");
		return;
	}
});

UL.addEventListener("click", function (e) {
	if (e.target.getAttribute("class") == "finish") {
		listContent.splice(e.target.getAttribute("data-i"), 1);
		updateList();
	} else {
		return;
	}
});

function updateList() {
	console.log(listContent);
	listHTML = "";
	listContent.forEach(function (v, i) {
		let newStr = `<li class="content">${v}<input type="button" class="finish" data-i = "${i}"value="finish" /></li>`;
		listHTML += newStr;
	});
	updateUL();
}

function updateUL() {
	if (listHTML == "") {
		UL.innerHTML = "<p>You have nothing todo</p>";
	} else {
		UL.innerHTML = listHTML;
	}
}

function finish() {}
