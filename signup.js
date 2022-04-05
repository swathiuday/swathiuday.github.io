	//Validtion Code For Inputs

var email = document.forms['form']['email'];
var password = document.forms['form']['password'];
var conf_pass = document.forms['form']['confirmpassword'];



var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');
var confirmpass_error = document.getElementById('confirmpass_error');



email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);
//confirmpassword.addEventListener('textInput', confirmpass_Verify);

form.onsubmit=(validated() && passvalid());

function validated(){
	var pattern=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (email.value.match(pattern ) ) {
		
		email.focus();
		return true;
	}
	else {

		alert("Invalid email address!");
		return false;
	}
}

function passvalid(){


		if ((password.value != conf_pass.value) | (password.value == 0 )) {
			alert("password does not same");
			password.focus();
			return false;
		}
		else{
			//alert("password same");
			return true;
		}
}
//function email_Verify(){
	/*if (email.value.length >= 8) {
		*email.style.border = "1px solid silver";
		email_error.style.display = "none";
		return true;
	}
}*/
//function pass_Verify(){
	/*if (password.value.length >= 5) {
		password.style.border = "1px solid silver";
		pass_error.style.display = "none";
		return true;
	}
}*/

