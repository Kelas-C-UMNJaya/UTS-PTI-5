//----------------- Jam ---------------
document.getElementById("salam").innerHTML = "Selamat Malam"
function waktu1(){
    for (let i=0; i<24; i++){
        setTimeout(function timer() {
            document.getElementById("jam").innerHTML = i;
            if (i == 5) {
                document.getElementById("salam").innerHTML = "Selamat Pagi"
            }
            if (i == 10) {
                document.getElementById("salam").innerHTML = "Selamat Siang"
            }
            if (i == 15) {
                document.getElementById("salam").innerHTML = "Selamat Sore"
            }
            if (i == 20) {
                document.getElementById("salam").innerHTML = "Selamat Malam"
            }
        }, i * 15000);
    }

}

function waktu2(){
    for (let j=0; j<60; j++){
        setTimeout(function timer() {
            document.getElementById("menit").innerHTML = j;
        }, j * 250); 
        
    }
}

waktu1();
waktu2();
setInterval(waktu1, 360000);
setInterval(waktu2, 15000);

document.getElementById("semester").innerHTML = "Semester " + "1";
function sem(){
    for ( let s=2; s<=8; s++){
        setTimeout(function timer() {

            console.log(s);
            document.getElementById("semester").innerHTML = "Semester " + s;

        }, s * 360000); 
        
    }
}

sem();

var i = 0;
function move1() {
if (i == 0) {
  i = 1;
  var elem = document.getElementById("makan");
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      i = 0;
    } else {
      width++;
      elem.style.width = width + "%";
    }
    makan -= 4
  }
}
}

var i = 0;
function move2() {
if (i == 0) {
  i = 1;
  var elem = document.getElementById("tidur");
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      i = 0;
    } else {
      width++;
      elem.style.width = width + "2%";
    }
  }
}
}

var i = 0;
function move3() {
if (i == 0) {
  i = 1;
  var elem = document.getElementById("main");
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      i = 0;
    } else {
      width++;
      elem.style.width = width + "2%";
    }
  }
}
}

var i = 0;
function move4() {
if (i == 0) {
  i = 1;
  var elem = document.getElementById("belajar");
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      i = 0;
    } else {
      width++;
      elem.style.width = width + "2%";
    }
  }
}
}
