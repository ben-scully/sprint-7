// Your code here.

function min(a, b) {
  if (a <= b)
    return a;
  return b;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


// Your code here.

function isEven(num) {
	if (num < 0)
      num = num*-1;
  	if (num === 0)
      return true;
  	if (num === 1)
      return false;
	return isEven(num-2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??


// Your code here.

function countBs(str) {
	var num = 0;

  	for (i = 0; i < str.length; i++)
      if (str.charAt(i) === "B")
        num++;
  	return num;
}

function countChar(str, x) {
	var num = 0;

  	for (i = 0; i < str.length; i++)
      if (str.charAt(i) === x)
        num++;
  	return num;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
