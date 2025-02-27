// function Prom1(){
// 	return new Promise(()=>{
// 		setTimeout(()=>{
// 			document.getElementById("ip").value;
// 		},2000)
// 	})
// }

document.getElementById("btn").addEventListener('click', function() {
    let num = document.getElementById('ip').value;
    
    processNumber(num); // Call the function to start the promise chain
});

function processNumber(num){
	return new Promise((resolve)=>{
		setTimeout(()=>{
			document.getElementById("output").innerHTML+=num;
		    resolve(num);
		},2000)
	}).then(function(num){
	return new Promise((resolve)=>{
		setTimeout(()=>{
			let newNum = num*2;
			// document.getElementById("output").innerHTML+='';
			document.getElementById("output").innerHTML+=newNum;
		    resolve(newNum);
		},2000)
	});
}).then(function(num){
	return new Promise((resolve)=>{
		setTimeout(()=>{
			let newNum = num - 3;
			// document.getElementById("output").innerHTML+='';
			document.getElementById("output").innerHTML+=newNum;
		    resolve(newNum);
		},1000)
	});
}).then(function (num) {
	return new Promise((resolve)=>{
		setTimeout(()=>{
			let newNum = num / 2;
			// document.getElementById("output").innerHTML+='';
			document.getElementById("output").innerHTML+=newNum;
		    resolve(newNum);
		},1000)
	});
}).then(function(num) {
	return new Promise((resolve)=>{
		setTimeout(()=>{
			let newNum = num + 10;
			// document.getElementById("output").innerHTML+='';
			document.getElementById("output").innerHTML+=newNum;
		    resolve(newNum);
		},1000)
	});
})
}
