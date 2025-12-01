//type (x: number, y: number) -> number;
const add = (a, b) => a + b;

// type (x: number, y: number) -> number;
const substract = (a, b) => a - b;

// type (x: number, y: number) -> number;
const multiply = (a, b) => a * b;

// type (x: number, y: number) -> number;
const divide = (a, b) => {
  if (b === 0) return;
  return a / b;
};
