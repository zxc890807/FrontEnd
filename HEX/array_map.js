const arr = [1, 5, 10];
const newar = arr.map(function (item) {
	return item * item;
});

const data = [1, 8, 13, 20];
const newdata = data.map(function (item) {
	let obj = {};
	obj.checknum = item < 10;
	return obj;
});
