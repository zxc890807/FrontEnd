const F = document.querySelector(".filter");
const list = document.querySelector(".list");
const S = document.querySelector("#save");
const textInput = document.querySelector("#textInput");
const dropdownInput = document.querySelector("#dropdown");

let data = [
	{ charge: "free", name: "spot A" },
	{ charge: "charge", name: "spot B" },
	{ charge: "charge", name: "spot C" },
	{ charge: "free", name: "spot D" },
	{ charge: "charge", name: "spot E" }
];

function init() {
	let str = "";
	data.forEach(function (item, idx, ary) {
		// <li>xx充電站，免費<li>
		let content = `<li>${item.name} is ${item.charge}</li>`;
		str += content;
	});
	list.innerHTML = str;
}
init();

F.addEventListener("click", function (e) {
	if (e.target.value == undefined) {
		console.log("Click Null");
		return;
	} else {
		console.log(e.target.value);
	}

	let new_str = "";
	data.forEach(function (item) {
		let content = `<li>${item.name} is ${item.charge}</li>`;

		if (e.target.value == item.charge) {
			new_str += content;
		} else if (e.target.value == "ALL") {
			new_str += content;
		} else {
			return;
		}
	});
	list.innerHTML = new_str;
});

S.addEventListener("click", function (c) {
	let registered = false;
	console.log(textInput.value, dropdownInput.value);
	if (textInput.value != "") {
		data.forEach(function (item) {
			if (textInput.value == item.name) {
				alert("This stop have been registered!");
				registered = true;
				return;
			}
		});
		if (registered == false) {
			data.push({
				charge: dropdownInput.value,
				name: textInput.value
			});
		}
		init();
	}
});
