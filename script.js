//your JS code here. If required.
const form = document.getElementById("userform");

form.addEventListener("submit", function(event){
	event.preventDefault();

	const name = document.getElementById("name").value.trim();
	const age = parseInt(document.getElementById("age").value.trim(),10);

	

	if(name==="" || age===""){
		alert("Please enter valid details.")
	}else{
		alert("Form submitted successfully!")
	}

	new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(age>18){
				resolve(`Welcome, . You can vote`)
			}
			else{
				reject(`Oh sorry . You aren't old enough.`)
			}
		}, 4000)
	})
	.then((message)=>{
		alert(message)
	})
	.catch((errorMessage)=>{
		alert(errorMessage)
	})
})