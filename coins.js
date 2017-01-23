function coinCounter (event) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};

  // grab user input
  var skrill = Math.floor(moneyField.value * 100);
  console.log(skrill)

  // Initialize output div
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = '';

  var remainder = 0;
  // Assign coin values to coinPurse properties
  coinPurse.quarters = Math.floor(skrill / 25);
  remainder = skrill % 25;
  console.log(Math.floor(skrill/25));
  coinPurse.dimes = Math.floor(remainder / 10);
  console.log(Math.floor(skrill/10))
  remainder %= 10;
  console.log(remainder);
  coinPurse.nickels = Math.floor(remainder / 5);
  console.log(Math.floor(skrill/5))
  remainder %= 5;
  console.log(remainder);
  coinPurse.pennies = remainder;
  
  // Assign coinPurse key strings to array for output
  var currencyName = Object.keys(coinPurse);


  // Output results	
  currencyName.forEach( function(element, index) {
  	outputDiv.innerHTML += element + ' = ' + coinPurse[element] + ' ';
  });


  return coinPurse;
}


function randomPlaceholder() {
	return (Math.floor(Math.random() * 100.00) + Math.random()).toFixed(2);
}

// Wire up money field to present random placeholder value.
var moneyField = document.getElementById("money-count");
moneyField.setAttribute('placeholder', randomPlaceholder()); 

// Wire submit button to trigger coinCounter()
submitButton = document.getElementById('submit');
submitButton.addEventListener('click', coinCounter);