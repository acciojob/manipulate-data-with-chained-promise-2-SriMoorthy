//your JS code here. If required.
function getData() {
	return new Promise((resolve)=>{
		setTimeout(()=>{
			const numbers = [1,2,3,4]
			resolve(filterEvenNum(numbers))
		},3000)
	})
}

function filterEvenNum(numbers) {
	return new Promise((resolve)=>{
		setTimeout(()=>{
			const evenNum = numbers.filter(num => num % 2 == 0)
			document.getElimentById("output").textcontent = evenNum.join(',')
			resolve(multipleByTwo(evenNum));
		},1000)
	})
}

function multipleByTwo(evenNum) {
	return new Promise((resolve)=>{
		setTimeout(()=>{
			const multi = evenNum.map(num => num * 2)
			document.getElimentById("output").textcontent = multi.join(',')
			resolve(multi)
		},2000)
	})
}

getData();