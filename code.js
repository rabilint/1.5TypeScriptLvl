import * as moment from 'node_modules/moment/min/moment.min.js';

let can = false;
console.log('1');
function myFO() {
  if (can === false) {
    let value2 = document.getElementById('input2').value;
    if (isNaN(value2)) {
      value2 = 0;
    }
    can = true;
    const timePlus = moment().add(value2, 'minute');
    let time = moment();
    const myVarPlus = moment.duration(timePlus).asSeconds();
    const myVar = moment.duration(time).asSeconds();
    let timer = myVarPlus - myVar;
    const myTimer = setInterval(() => {
      if (timer > 0) {
        if (timer * 1000 > 86400000) {
          time = moment.utc(timer * 1000).format('d:h:mm:ss');
        } else if (timer * 1000 > 3600000) {
          console.log('3');
          time = moment.utc(timer * 1000).format('h:mm:ss');
        } else if (timer * 1000 < 3600000) {
          time = moment.utc(timer * 1000).format('mm:ss');
        }
        document.getElementById('demo').innerHTML = time;
        timer -= 1;
      } else {
        document.getElementById('demo').innerHTML = timer;
        clearInterval(myTimer);
        can = false;
        return can;
      }
    }, 1000);
  } else {
    clearInterval(myTimer
    let value2 = document.getElementById('input2').value;
    if (isNaN(value2)) {
      value2 = 0;
    }
    can = true;
    const timePlus = moment().add(value2, 'minute');
    let time = moment();
    const myVarPlus = moment.duration(timePlus).asSeconds();
    const myVar = moment.duration(time).asSeconds();
    let timer = myVarPlus - myVar;
    document.getElementById('demo').innerHTML = 0;
    const myTimer = setInterval(() => {
      if (timer > 0) {
        if (timer * 1000 > 86400000) {
          time = moment.utc(timer * 1000).format('d:h:mm:ss');
        } else if (timer * 1000 > 3600000) {
          console.log('3');
          time = moment.utc(timer * 1000).format('h:mm:ss');
        } else if (timer * 1000 < 3600000) {
          time = moment.utc(timer * 1000).format('mm:ss');
        }
        document.getElementById('demo').innerHTML = time;
        timer -= 1;
      } else {
        document.getElementById('demo').innerHTML = timer;
        clearInterval(myTimer);
        can = false;
        return can;
      }
    }, 1000);
  }
}
