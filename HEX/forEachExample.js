let data = [
	{ charge: "free", name: "spot A" },
	{ charge: "charge", name: "spot B" },
	{ charge: "charge", name: "spot C" },
	{ charge: "free", name: "spot D" },
	{ charge: "charge", name: "spot E" }
];

function init() {
	const list = document.querySelector(".list");
	let str = "";
	data.forEach(function (item, idx, ary) {
		// <li>xx充電站，免費<li>
		let content = `<li>${item.name} is ${item.charge}</li>`;
		str += content;
	});
	list.innerHTML = str;
}

init();
