const extendHex = (shortHex) => {
  // shortHex = "#aB0"
	let i = shortHex.length - 3,isCapital = false;
	let output = "#";
	while(i < shortHex.length){
		let asciicode = shortHex[i].charCodeAt(0);
		if(asciiCode >= 65 && asciicode <= 90){
			isCapital = true;
		}
		//output = "#" += "a" => "#aa"
		output += shortHex[i] + shortHex[i];
		i++;
	}
	return isCapital ?  output.toUpperCase() : output;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
