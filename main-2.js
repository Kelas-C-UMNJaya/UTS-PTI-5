var value = window.prompt('Who Are You ?');
document.getElementById("nama").innerHTML = value;

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
    for ( let s=2; s<=9; s++){
        setTimeout(function timer() {
            document.getElementById("semester").innerHTML = "Semester " + s;
        }, s * 360000); 
        if (s > 9) {
          alert("Selamat Anda Lulus");
        }
    }
}

sem();

//------------ Progress -----------------------
var width = 50;
function move1() {
  var elem = document.getElementById("makan");
    if (width < 100) {
      width += 10;
      elem.style.width = width + '%';
    }
  document.getElementById("karakter").src ="data/2makan.jpg"
    setTimeout(() => {
      document.getElementById("karakter").src ="data/setip.png"
    }, 5000);
}
setInterval(lapar, 10000);
var width = 50;
function lapar(){
  var elem = document.getElementById("makan");
  width -= 3;
  elem.style.width = width + '%';
  if (width <= 0) {
    location.href = "gameOver.html"
  }
}

//-----------------------------------------------------------------------------------------------
var width = 50;
function move2() {
  var elem = document.getElementById("tidur");
    if (width < 100) {
      width += 10;
      elem.style.width = width + '%';
    }
    document.getElementById("karakter").src ="data/2tidur.jpg"
    setTimeout(() => {
      document.getElementById("karakter").src ="data/setip.png"
    }, 5000);
}

setInterval(ngantuk, 10000);
var width = 50;
function ngantuk(){
  var elem = document.getElementById("tidur");
  width -= 3;
  elem.style.width = width + '%';
  if (width <= 0) {
    location.href = "gameOver.html"
  }
}

//-----------------------------------------------------------------------------------------------
var width = 50;
function move3() {
  var elem = document.getElementById("main");
    if (width < 100) {
      width += 10;
      elem.style.width = width + '%';
    }
    document.getElementById("karakter").src ="data/2main.jpg"
    setTimeout(() => {
      document.getElementById("karakter").src ="data/setip.png"
    }, 5000);
}
setInterval(bosen, 10000);
var width = 50;
function bosen(){
  var elem = document.getElementById("main")
  width -= 3;
  elem.style.width = width + '%';

  if (width <= 0) {
    location.href = "gameOver.html"
  }
}

//-----------------------------------------------------------------------------------------------
var width = 50;
function move4() {
  var elem = document.getElementById("belajar");
    if (width < 100) {
      width += 10;
      elem.style.width = width + '%';
    }
    document.getElementById("karakter").src ="data/2belajar.jpg"
    setTimeout(() => {
      document.getElementById("karakter").src ="data/setip.png"
    }, 5000);
}
setInterval(gabut, 10000);
var width = 50;
function gabut(){
  var elem = document.getElementById("belajar");
  width -= 3;
  elem.style.width = width + '%';

  if (width <= 0) {
    location.href = "gameOver.html"
  }
}
