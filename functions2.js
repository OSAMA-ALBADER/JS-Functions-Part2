function isOdd(n) {
  if (n % 2 === 1) return true;
  else return false;
}

function oddsSmallerThan(n) {
  if (isOdd(n) === true) consol.log((n + 1) / 2);
  else return n;
}

function squareOrDouble(n) {
  if (isOdd(n)) return n ** 2;
  else return n * 2;
}
