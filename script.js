function initial(){
	return new Promise((resolve)=>{
		setTimeout(()=>{
			let val = parseFloat(document.getElementById("ip").value);
			resolve(val)
		},2000);
	})
}

function mult(num){
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(num*2);
		},2000);
	})
}

function subs(num){
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(num-3);
		},1000);
	})
}

function divi(num){
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(num/2);
		},1000);
	})
}

function add(num){
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(num+10);
		},1000);
	})
}

document.getElementById("btn").addEventListener('click', function() {

	initial().then((res)=>{
		return mult(res);
	})
	.then((res)=>{
		document.getElementById("output").innerHTML=`<p>Result: ${res}</p>`;
		return subs(res);
	})
	.then((res)=>{
		document.getElementById("output").innerHTML=`<p>Result: ${res}</p>`;
		return divi(res);
	})
	.then((res)=>{
		document.getElementById("output").innerHTML=`<p>Result: ${res}</p>`;
		return add(res);
	})
	.then((res)=>{
		document.getElementById("output").innerHTML=`<p>Result: ${res}</p>`;
	})
})