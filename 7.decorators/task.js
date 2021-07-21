function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
    const hash = args.join(',');
    let idx = cache.findIndex((item) => item.hash === hash)
    if (idx > -1) {
      console.log("Из кэша: " + cache[idx].value);
      return "Из кэша: " + cache[idx].value;
    } else {
      let result = func(...args);
      cache.push({hash: `${hash}`, value: `${result}`});
      if (cache.length > 5) {
       cache.shift();
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
    }
  }
  return wrapper;
}

//задача2

function debounceDecoratorNew(func, ms) {
  let checkFunc = true; 
  return function(...args) {
   if(checkFunc === false) { 
   func(...args);
  }
  checkFunc = true;
  setTimeout(() => { 
  checkFunc = false;
  }, ms);
   };
   }
   sendSignal = () => console.log("Сигнал отправлен");
   upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);
   setTimeout(upgradedSendSignal); 
   setTimeout(upgradedSendSignal, 300); 
   setTimeout(upgradedSendSignal, 900); 
   setTimeout(upgradedSendSignal, 1200); 
   setTimeout(upgradedSendSignal, 2300); 
   setTimeout(upgradedSendSignal, 4400); 
   setTimeout(upgradedSendSignal, 4500); 
  
   //задача 3
function debounceDecorator2(func) {
  let checkFunc = true;
  wrapper.count = 0;
  function wrapper(...args) {
     if(checkFunc === false) { 
     func(...args); 
    } 
    checkFunc = true;
    setTimeout(() => { 
    checkFunc = false;
    }, ms);
    wrapper.count += 1;
  }
  return wrapper;
}
