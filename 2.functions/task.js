// Задание 1
function getArrayParams(arr) {
  let min,max,sum,avg;
  min = arr[0];
  max = min;
  sum = 0;
  for (i = 0; i < arr.length; i += 1) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
      sum += arr[i];
  }   
     avg = sum / arr.length;

  return { min: min, max: max, avg: avg.toFixed(2)};
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max;
  max = func(arrOfArr[0]);
  
  for (let i = 0; i < arrOfArr.length; i += 1) {
    let sum = func(arrOfArr[i])
    if (sum > max) {
      max = sum;
    }
  }
   
  return max
}



// Задание 3
function worker2(arr) {
  let minArr = arr[0];
  let maxArr = minArr;

  for (let i = 0; i < arr.length; i += 1) {
     if (arr[i] > maxArr) {
        maxArr = arr[i]
     } else if (arr[i] < minArr) {
       minArr = arr[i]
     } 
    }
    let diff = maxArr - minArr;
    
     return diff;
  }


  function makeWork(arrOfArr, func) {
    let max;
    max = func(arrOfArr[0]);
    
    for (let i = 0; i < arrOfArr.length; i += 1) {
      let sum = func(arrOfArr[i])
      if (sum > max) {
        max = sum;
      }
    }
     
    return max
  }


