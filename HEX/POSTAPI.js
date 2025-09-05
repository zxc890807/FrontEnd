// https://escape-room.hexschool.io/api/user/signup

// 練習
const acnt = document.querySelector(".account");
const pwd = document.querySelector(".password");
const login = document.querySelector(".login");
let loginInfo = {};

function singIn() {
	if (acnt.value == "" || pwd.value == "") {
		alert("帳號、密碼不得為空");
	} else {
		loginInfo.email = acnt.value;
		loginInfo.password = pwd.value;
	}
	axios
		.post("https://escape-room.hexschool.io/api/user/signin", loginInfo)
		.then(function (response) {
			console.log(response);
			alert(response.data.message);
		})
		.catch(function (error) {
			console.log(error);
		});
}

login.addEventListener("click", function (loginClick) {
	singIn();
});
// const acnt = document.querySelector(".account");
// const pwd = document.querySelector(".password");
// const send = document.querySelector(".send");
// console.log(acnt, pwd, send);
// send.addEventListener("click", function (sendClicked) {
// 	callSignup();
// });

// function callSignup() {
// 	let obj = {};
// 	if (acnt.value == "" || pwd.value == "") {
// 		alert("帳號、密碼不得為空");
// 		return;
// 	} else {
// 		obj.email = acnt.value;
// 		obj.password = pwd.value;
// 	}
// 	axios
// 		.post("https://escape-room.hexschool.io/api/user/signup", obj)
// 		.then(function (response) {
// 			console.log(response);
// 			alert(response.data.message);
// 		})
// 		.catch(function (error) {
// 			console.log(error);
// 		});
// }
