
import * as moment from '../node_modules/moment/moment'; 

function myFO() {
  let value2 = document.getElementById('input2').value;
  if (Number.isNaN(value2)) {
    value2 = 0;
  }
  const timePlus = moment().add(value2, 'minute');
  let time = moment();
  let timer = moment.duration(timePlus).asSeconds() - moment.duration(time).asSeconds();
  const myTimer = setInterval(() => {
    if (timer > 0) {
      if (timer * 1000 > 86400000) {
        time = moment.utc(timer * 1000).format('d:h:mm:ss');
      } else if (timer * 1000 > 3600000) {
        time = moment.utc(timer * 1000).format('h:mm:ss');
      } else if (timer * 1000 < 3600000) {
        time = moment.utc(timer * 1000).format('mm:ss');
      }
      document.getElementById('demo').innerHTML = time;
      timer -= 1;
    } else {
      document.getElementById('demo').innerHTML = timer;
      clearInterval(myTimer);
    }
  }, 1000);
}

myFO();
