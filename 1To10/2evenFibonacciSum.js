// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");

function generateFibonacci(limit) {
  const fibonacciSequence = [1, 1];
  let i = 2;

  while (fibonacciSequence[i - 1] + fibonacciSequence[i - 2] <= limit) {
    fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2]);
    i++;
  }

  return fibonacciSequence;
}

const limit = 4000000;
const fibonacciSequence = generateFibonacci(limit);
console.log(fibonacciSequence);

let evenSum =0;

for (var j=0; j<=fibonacciSequence.length; j++){
    if(fibonacciSequence[j] %2 == 0){
        evenSum +=fibonacciSequence[j]
    }
}

console.log(evenSum)
