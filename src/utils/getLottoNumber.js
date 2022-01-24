function generateRandomNumber() {
  let numbers = new Set();
  while (numbers.size < 7) {
    numbers.add(Math.floor(Math.random() * (46 - 1) + 1));
  }
  return [...numbers].sort((a, b) => a - b);
}

export function getLottoNumber() {
  return generateRandomNumber();
}
