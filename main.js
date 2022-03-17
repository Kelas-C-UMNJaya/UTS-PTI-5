//----------------- Jam ---------------
function waktu1(){
    for (let i=0; i<24; i++){
        setTimeout(function timer() {
            console.log("Jam" + i);
            document.getElementById("jam").innerHTML = i;
            if (i == 5) {
                alert("Selamat Pagi");
            }
            if (i == 10) {
                alert("Selamat Siang");
            }
            if (i == 15) {
                alert("Selamat Sore");
            }
            if (i == 20) {
                alert("Selamat Malam");
            }
        }, i * 15000);
    }

}

function waktu2(){
    for (let j=0; j<60; j++){
        setTimeout(function timer() {
            console.log("detik" + j);
            document.getElementById("menit").innerHTML = j;
        }, j * 250); 
        
    }
}

waktu1();
waktu2();
setInterval(waktu1, 360000);
setInterval(waktu2, 15000);

