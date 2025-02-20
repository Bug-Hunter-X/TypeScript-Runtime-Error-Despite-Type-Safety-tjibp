function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

try {
  let result = add("hello", "world");
  console.log(result);
} catch (error) {
  console.error(error.message); // Handles the runtime error gracefully
}

let correctResult = add(10, 5);
console.log(correctResult); // This will work correctly