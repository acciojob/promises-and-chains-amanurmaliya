//your JS code here. If required.

let evt = document.getElementById("myForm").addEventListener("submit", isValid);
function isValid(e){
	e.preventDefault();
	let name = document.getElementById("name").value;
	let age = document.getElementById("age").value;

	let newPromise = new Promise((resolve, reject)=>{
		setTimeout(()=>{
if(age>=18 )
	// you can use this condition && isNaN(name)===true taki agar koi naam ki jagh number daal de phir bhi usse wrong message hi de it is optional not given in your question so i am not writing while submitting."Aman Tripathi"
{
	resolve(`Welcome ${name}., You can vote`)
}
		else
{
	reject(`Oh sorry ${name}. You aren't old enough`);
}}, 4000)
	})

	newPromise.then((data) => alert(data)).catch((err) => alert(err))
}

