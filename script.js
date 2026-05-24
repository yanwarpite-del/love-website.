/* =========================
   TULISAN KETIK OTOMATIS
========================= */

const text = "Aku sayang kamu ❤️";

let i = 0;

function ngetik(){

    if(i < text.length){

        document.getElementById("teks").innerHTML += text.charAt(i);

        i++;

        setTimeout(ngetik,100);

    }

}

ngetik();


/* =========================
   TOMBOL SURAT
========================= */

function bukaSurat(){

    document.getElementById("surat").style.display = "block";

}


/* =========================
   SLIDE FOTO
========================= */

const gambar = [
    "foto1.jpg",
    "foto2.jpg",
    "foto3.jpg",
    "foto4.jpg",
    "foto5.jpg",
    "foto6.jpg",
    "foto7.jpg"
];

let index = 0;

setInterval(() => {

    index++;

    if(index >= gambar.length){
        index = 0;
    }

    document.getElementById("slide").src = gambar[index];

}, 2000);


/* =========================
   HUJAN HATI
========================= */

function buatHati(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = Math.random() * 20 + 20 + "px";

    heart.style.animationDuration = Math.random() * 3 + 2 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    },5000);

}

setInterval(buatHati,300);