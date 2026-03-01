let multiplierSingleton = null;

function getMultiplier(factor) {
  // if multiplierSingleton is null/undefined, create it
  multiplierSingleton = multiplierSingleton || ((num) => num * factor);
  return multiplierSingleton;
}

// First call locks factor = 2
const timesTwo = getMultiplier(2);
console.log(timesTwo(5)); // 10
console.log(typeof(timesTwo));

// Second call tries factor = 3, ignored
const timesThree = getMultiplier(3);
console.log(timesThree(5)); // 10

console.log(timesTwo === timesThree);