let button = document.querySelector("button");
let h1 = document.querySelector("h1");
let retry = document.querySelector("#retry");

let arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
	
const rand = (length) =>  Math.floor(Math.random() * length);
	
function removeArrayElement(array, n){
	   let index = array.indexOf(n);
	   if (index > -1) {
	    array.splice(index, 1);
	}
     return array;
 }

function myFunction(){
	if(arr.length==0){
		$("#myModal").modal("show");
		return
	}
	let arrItem = arr[rand(arr.length)]
		h1.innerHTML = arrItem
		arr = removeArrayElement(arr,arrItem)
	 }

 	retry.addEventListener("click",()=>{
 		arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
 		$("#myModal").modal("hide");
 	});

button.addEventListener("click",myFunction)
