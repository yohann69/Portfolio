"use strict";
/*------------------------------------------------
					Project Name
			  ~ Written By @Yohann69 ~
-----------------------v0.1---------------------*/


console.log("Welcome on Project Name");
console.log("This project has been created by @Yohann69");


/*------------------------------------------------------------
					~ New Section ~
------------------------------------------------------------*/


function fillemail(){
	
	const subject = document.querySelector('.subject').value;
	const message = document.querySelector('.message').value;
	const email= document.querySelector('.emailaddress');

	email.href=`mailto:yohann@chavanel.eu.org?subject=${subject}&body=${message}`

	email.click();
		
}