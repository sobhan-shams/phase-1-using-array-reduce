const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

//const totalBatteries = (accumulator, curr) => accumulator + curr;
//console.log(batteryBatches.reduce(totalBatteries));


const initialValue = 0;
const totalBatteries = batteryBatches.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(totalBatteries);