function compareArrays(arr1, arr2) {
  let result;
   if (arr1.length === arr2.length) {
    result = arr1.every((item, index) => arr1[item, index] === arr2[item, index]);
   } else if (arr1.length !== arr2.length) {
     return false
   }

  return result; // boolean
}



function advancedFilter(arr) {
  let resultArr;
  
  let arrFilter = arr.filter((item) =>
    item >= 0 && item % 3 === 0)
  console.log(arrFilter);

  resultArr = arrFilter.map((item) => {
   let newArr = item * 10;
   return newArr;
  })


  return resultArr; // array
}
