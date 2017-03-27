function validate() {
	var name = document.getElementById("Name").value;
	var email = document.getElementById("Email").value;
	var referrer = document.getElementById("Referrer").value;
	var atposition = email.indexOf("@");
	var dotposition = email.lastIndexOf(".");
	var status = false;

	if (name == null || name == "") {
		document.getElementById("nameloc").innerHTML = " &#xf00d; Please enter your name";
		status = false;
	} 
	else {
		document.getElementById("nameloc").innerHTML = " &#xf00c;";
		status = true;
	}
	if (email == null || email == "") {
		document.getElementById("emailoc").innerHTML = " &#xf00d; Please enter your email";
		status = false;
    } 
    else if 
    	(atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
    	document.getElementById("emailoc").innerHTML = " &#xf00d; Please enter valid email address";
        status = false;
	} 
	else {
		document.getElementById("emailoc").innerHTML = " &#xf00c;";
		status = true;
	}
	if (referrer == null || referrer == "") {
		document.getElementById("referrerloc").innerHTML = " &#xf00d; Please enter your referrer";
		status = false;
	} 
	else {
		document.getElementById("referrerloc").innerHTML = " &#xf00c;";
		status = true;
	}
return status;
}