const makeChange = (c) => {
  // your name here
	let change={
		q: "",
		d: "",
		n: "",
		c: ""
	};
	let coinValue={
		q: "25",
		d: "10",
		n: "5",
		c: "1"
	};

	for(let coin in coinValue) {
		change[coin] = Math.floor(c / parseInt(coinValue[coin]));		
		c = Math.floor(c % parseInt(coinValue[coin]));
	}

	return change;
	
};

// Do not the change the code below
const c = prompt("Enter c: ");

alert(JSON.stringify(makeChange(c)));
