function initial(){
	return new Promise((resolve)=>{
		setTimeout(()=>{
			let val = parseFloat(document.getElementById("ip").value);
			resolve(val);
			document.getElementById("output").innerHTML=`<p>Result: ${val}</p>`;
		},2000);
	})
}

function mult(num){
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(num*2);
			document.getElementById("output").innerHTML=`<p>Result: ${num*2}</p>`;
		},2000);
	})
}

function subs(num){
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(num-3);
			document.getElementById("output").innerHTML=`<p>Result: ${num-3}</p>`;
		},1000);
	})
}

function divi(num){
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(num/2);
			document.getElementById("output").innerHTML=`<p>Result: ${num/2}</p>`;
		},1000);
	})
}

function add(num){
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(num+10);
			document.getElementById("output").innerHTML=`<p>Result: ${num+10}</p>`;
		},1000);
	})
}

document.getElementById("btn").addEventListener('click', function() {

	initial().then((res)=>{
		return mult(res);
	})
	.then((res)=>{
		return subs(res);
	})
	.then((res)=>{
		return divi(res);
	})
	.then((res)=>{
		return add(res);
	})
})