function solveEquation(a, b, c) {

  let arr = [];
  let x1 = 0;
  let x2 = 0;
 
  let d = Math.pow(b, 2) - (4 * a * c); 
  
  if (d < 0)  {
    console.log(arr);
  } else if (d === 0) {
    x1 = -b / (2 * a);
    arr.unshift(x1);
    console.log(arr);
  } else if (d > 0) {
    x1 = (-b + Math.sqrt(d) ) / (2 * a);
    x2 = (-b - Math.sqrt(d) ) / (2 * a);
     arr.unshift(x1, x2);
     console.log(arr);
  }
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, date) {
  
  let totalAmount;
  let S = amount - contribution; //тело кредита

  let now = new Date(); //объект Date с текущей датой
  let months = (date.getFullYear() - now.getFullYear()) * 12;

  let P = 1 / 12 * percent / 100;

  let payment = S * (P + P/ Math.pow((1 + P), months) - 1);
  
  totalAmount = payment * months;

  return totalAmount.toFixed(2);
}
