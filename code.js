let can = false;
console.log("1");
function myFO() {
  if (can === false) {
    let value2 = document.getElementById("input2").value;
    if (value2 == NaN) {
      value2 = 0;
    }
    can = true;
    timePlus = moment().add(value2, "minute");
    time = moment();
    myVarPlus = moment.duration(timePlus).asSeconds();
    myVar = moment.duration(time).asSeconds();
    timer = myVarPlus - myVar;
    myTimer = setInterval(() => {
      if (timer > 0) {
        if (timer * 1000 > 86400000) {
          time = moment.utc(timer * 1000).format("d:h:mm:ss");
        } else if (timer * 1000 > 3600000) {
          console.log("3");
          time = moment.utc(timer * 1000).format("h:mm:ss");
        } else if (timer * 1000 < 3600000) {
          time = moment.utc(timer * 1000).format("mm:ss");
        }
        document.getElementById("demo").innerHTML = time;
        timer = timer - 1;
      } else {
        document.getElementById("demo).innerHTML = timer;
        clearInterval(myTimer);
        can = false;
        return can;
      }
    }, 1000);
  } else {
    clearInterval(myTimer);
    let value2 = document.getElementById("input2").value;
    if (value2 == NaN) {
      value2 = 0;
    }
    can = true;
    timePlus = moment().add(value2, "minute");
    time = moment();
    myVarPlus = moment.duration(timePlus).asSeconds();
    myVar = moment.duration(time).asSeconds();
    timer = myVarPlus - myVar;
    document.getElementById("demo").innerHTML = 0;
    myTimer = setInterval(() => {
      if (timer > 0) {
        if (timer * 1000 > 86400000) {
          time = moment.utc(timer * 1000).format("d:h:mm:ss");
        } else if (timer * 1000 > 3600000) {
          console.log("3");
          time = moment.utc(timer * 1000).format("h:mm:ss");
        } else if (timer * 1000 < 3600000) {
          time = moment.utc(timer * 1000).format("mm:ss");
        }
        document.getElementById("demo").innerHTML = time;
        timer = timer - 1;
      } else {
        document.getElementById("demo").innerHTML = timer;
        clearInterval(myTimer);
        can = false;
        return can;
      }
    }, 1000);
  }
}
