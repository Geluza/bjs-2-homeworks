'use strict'
function solveEquation(a, b, c) {

  let arr = [];
  let x1 = 0;
  let x2 = 0;
 
  let d = Math.pow(b, 2) - (4 * a * c); 
  
   if (d === 0) {
    x1 = -b / (2 * a);
    arr.unshift(x1);
  } else if (d > 0) {
    x1 = (-b + Math.sqrt(d) ) / (2 * a);
    x2 = (-b - Math.sqrt(d) ) / (2 * a);
     arr.unshift(x1, x2);
  }
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, date) {
  
  let totalAmount;

   if (isNaN(percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } 

if (isNaN(contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } 

if (isNaN(amount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`; 
  } 

  let S = amount - contribution; //тело кредита

  let now = new Date(); //объект Date с текущей датой
  let months = ((date.getMonth() - now.getMonth()) + (12 * (date.getFullYear() - now.getFullYear())));
  
  let P = 1 / 12 * (percent / 100);

  let payment = S * (P + P/ (Math.pow((1 + P), months) - 1));
  
  totalAmount = payment * months;
  

  return Number(totalAmount.toFixed(2));
}
