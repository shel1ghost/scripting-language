const validateForm = () => {
	document.getElementById("err_fullname").innerText = "";
	document.getElementById("err_username"),innerText = "";
	document.getElementById("err_email").innerText = "";
	document.getElementById("err_password").innerText = "";
	let full_name = document.getElementById("fullName").value.trim();
	let username = document.getElementById("username").value.trim();
	let email = document.getElementById("email").value.trim();
	let password = document.getElementById("password").value;
	let name_pattern = /^[A-Z]([\sA-Za-z]+)/;
	let email_pattern = /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$/;
	let error = 0;
	
	if(full_name == "" || !name_pattern.test(full_name)){
		document.getElementById("err_fullname").innerText = "Please enter a valid name.";
		error++;
	}else if(username == "" || username.length < 8){
		document.getElementById("err_username").innerText = "Username must be at least 8 characters.";
		error++;
	}else if(email == "" || !email_pattern.test(email)){
		document.getElementById("err_email").innerText = "Please enter a valid email."
		error++;
	}else if(password == ""){
		document.getElementById("err_password").innerText = "Please enter a valid password.";
		error++;
	}
	if(error > 0){
		return false;
	}
}
