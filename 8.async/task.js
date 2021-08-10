
class AlarmClock {
  constructor() {
this.alarmCollection = [];
this.timerId = null;
}

addClock(timeCall, callback, id) {
 if (id === undefined) {
   throw new Error("Параметр id для будильника не передан");
 } 

 const findIdCall = this.alarmCollection.findIndex((item) => item.id === id);
 if(findIdCall > -1) {
  console.error("Будильник с таким id уже существует!");
 }
 else if(findIdCall === -1) {
   this.alarmCollection.push({'id': id, 'time': timeCall, 'callback': callback});
 }
}

removeClock(id) {
 let removeIndex = this.alarmCollection.findIndex((item) => item.id === id);
 if(removeIndex === -1) {
  return false;
 } else {
   this.alarmCollection.splice(removeIndex, 1);
   return true;
 }
}


getCurrentFormattedTime() {
 let now = new Date();
 let nowHours = now.getHours(); 
 if(nowHours < 10) {
   nowHours = '0' + nowHours;
 }
 let nowMinutes = now.getMinutes();
 if(nowMinutes < 10) {
   nowMinutes = '0' + nowMinutes;
 }
 return `${nowHours}:${nowMinutes}`
}

checkClock(alarm) {
  if(this.getCurrentFormattedTime() === alarm.time) {
    alarm.callback();
  } 
}

start() {
   if (this.timerId === null) {
     this.timerId = setInterval(() => { 
     this.alarmCollection.forEach((alarm) => {
       this.checkClock(alarm);
     })
    }, 1000);
  }
}

stop() {
  if(this.timerId != null) {
    clearInterval(this.timerId);
    this.timerId = null;
  }
}

printAlarms(){
  console.log('Печать всех будильников в количестве: ' + this.alarmCollection.length);
  this.alarmCollection.forEach((item) => {console.log('Будильник №' + item.id + ' заведён на ' + item.time);})
};

clearAlarms() {
  this.stop();
  this.alarmCollection = [];
}

}



