function getTime() {
    day = new Date().toLocaleDateString();
    time = new Date().toLocaleTimeString();
    // document.body.innerHTML = time;
    document.getElementById("days").innerHTML = day;
    document.getElementById("times").innerHTML = time;
  }
  setInterval(getTime, 1000);