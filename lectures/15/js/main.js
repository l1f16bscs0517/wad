var a={
	aTitle: 'Muhammad Daniyal',
	aCurrency: 'PKR',
	aBal: 1234,
	I: 'PKR1234',
};

myFunction();

function myFunction(){
	
	document.getElementById('title').innerText = a.aTitle;
	document.getElementById('balance').innerText = a.aBal;
	document.getElementById('currency').innerText = a.aCurrency;
	document.getElementById('IBAN').innerText = a.I;
}

function dep(){
	var temp,temp2;
	temp = document.getElementById('balance').value;
	temp2 = document.getElementById('deposit').value;
	if(document.getElementById('placeholder'))
	document.getElementById('balance').innerText = temp+temp2;
}