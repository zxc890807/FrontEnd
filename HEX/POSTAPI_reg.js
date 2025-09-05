const reg_acnt = document.querySelector(".account");
const reg_pwd = document.querySelector(".password");
const regi = document.querySelector(".register");
let obj = {};

regi.addEventListener("click", function (reg_clicked) {
	obj.email = reg_acnt.value;
	obj.password = reg_pwd.value;
	if ((reg_acnt.value == "") | (reg_pwd.value == "")) {
		alert("帳號、密碼不得為空");
		return;
	} else {
		callSignUp();
	}
});

function callSignUp() {
	axios
		.post("https://escape-room.hexschool.io/api/user/signup", obj)
		.then(function (response) {
			console.log(response);
			alert(response.data.message);
		})
		.catch(function (error) {
			console.log(error);
		});
}
