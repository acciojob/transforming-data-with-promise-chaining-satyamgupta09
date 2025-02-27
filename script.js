// // function Prom1(){
// // 	return new Promise(()=>{
// // 		setTimeout(()=>{
// // 			document.getElementById("ip").value;
// // 		},2000)
// // 	})
// // }

// document.getElementById("btn").addEventListener('click', function() {
//     let num = document.getElementById('ip').value;
    
//     processNumber(num); // Call the function to start the promise chain
// });

// function processNumber(num){
// 	return new Promise((resolve)=>{
// 		setTimeout(()=>{
// 			document.getElementById("output").innerHTML+=num;
// 		    resolve(num);
// 		},2000)
// 	}).then(function(num){
// 	return new Promise((resolve)=>{
// 		setTimeout(()=>{
// 			let newNum = num*2;
// 			// document.getElementById("output").innerHTML+='';
// 			document.getElementById("output").innerHTML+=newNum;
// 		    resolve(newNum);
// 		},2000)
// 	});
// }).then(function(num){
// 	return new Promise((resolve)=>{
// 		setTimeout(()=>{
// 			let newNum = num - 3;
// 			// document.getElementById("output").innerHTML+='';
// 			document.getElementById("output").innerHTML+=newNum;
// 		    resolve(newNum);
// 		},1000)
// 	});
// }).then(function (num) {
// 	return new Promise((resolve)=>{
// 		setTimeout(()=>{
// 			let newNum = num / 2;
// 			// document.getElementById("output").innerHTML+='';
// 			document.getElementById("output").innerHTML+=newNum;
// 		    resolve(newNum);
// 		},1000)
// 	});
// }).then(function(num) {
// 	return new Promise((resolve)=>{
// 		setTimeout(()=>{
// 			let newNum = num + 10;
// 			// document.getElementById("output").innerHTML+='';
// 			document.getElementById("output").innerHTML+=newNum;
// 		    resolve(newNum);
// 		},1000)
// 	});
// })
// }
document.getElementById("btn").addEventListener('click', function() {
    let num = Number(document.getElementById('ip').value); // Convert input to number

    processNumber(num)
        .then(doubleNumber)
        .then(subtractThree)
        .then(divideByTwo)
        .then(addTen)
        .then(displayResult); // Ensure the final result is formatted correctly
});

function processNumber(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            document.getElementById("output").innerHTML = `Final Result: ${num}`;
            resolve(num);
        }, 2000); // Reduced delay
    });
}

function doubleNumber(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let newNum = num * 2;
            document.getElementById("output").innerHTML = `Final Result: ${newNum}`;
            resolve(newNum);
        }, 2000);
    });
}

function subtractThree(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let newNum = num - 3;
            document.getElementById("output").innerHTML = `Final Result: ${newNum}`;
            resolve(newNum);
        }, 1000);
    });
}

function divideByTwo(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let newNum = num / 2;
            document.getElementById("output").innerHTML = `Final Result: ${newNum}`;
            resolve(newNum);
        }, 1000);
    });
}

function addTen(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let newNum = num + 10;
            document.getElementById("output").innerHTML = `Final Result: ${newNum}`;
            resolve(newNum);
        }, 1000);
    });
}

// Ensure final display result is consistent with Cypress expectations
function displayResult(num) {
    document.getElementById("output").innerHTML = `Final Result: ${num}`;
}
