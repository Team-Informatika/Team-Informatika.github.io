import {onClick,renderHTML} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js";
import {getHash,onHashChange} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/url.js";
import {getJSON} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/api.js";

onHashChange(pilihanMenu);

//document.getElementById("content").innerHTML="<h1>ini adalah isi dari konten</h1>";
onClick("halo",ubahHeader);


function pilihanMenu(){
    console.log(getHash());
    const hashpath=getHash();
    if (hashpath==="main"){
        console.log("ini kedetek main");
        renderHTML('content','content/main.html');
    }
    if (hashpath==="about"){
        console.log("ini kedetek about");
        renderHTML('content','content/about.html');
    }

    if (hashpath==="team"){
        console.log("ini team nya masuk cok");
        renderHTML('content','content/team.html');
    }

    if (hashpath==="panduan"){
        console.log("wadidaw terkidaw-kidaw");
        renderHTML('content','content/panduan.html');
    }
    if (hashpath==="layanan"){
        console.log("layanan disini ya boss");
        renderHTML('content','content/layanan.html',renderDatadariJson);
    }
}


function renderDatadariJson(){
    getJSON("https://t.if.co.id/json/layanan.json", "aja", "enak", responseFunctionLayanan);
}

// cons response={ status : 200, data: datalayanan }

function responseFunctionLayanan(data){//{ status, data: parsedResult }
    console.log(data);
    let apaja;
    apaja=data.data;
    const container = document.getElementById('layanan-list');
    // Melakukan perulangan untuk setiap item dalam data
    apaja.forEach(item => {
        // Membuat elemen div untuk setiap item
        const layananItem = document.createElement('div');
        layananItem.classList.add('layanan-item');

        // Membuat elemen icon
        const icon = document.createElement('i');
        icon.classList.add('icon');//ini untuk menambahkan class di tag tersebut
        icon.textContent = item.icon;

        // Membuat elemen judul
        const judul = document.createElement('h2');
        judul.textContent = item.judul;

        // Membuat elemen deskripsi
        const deskripsi = document.createElement('p');
        deskripsi.textContent = item.deskripsi;

        // Menambahkan icon, judul, dan deskripsi ke dalam layananItem
        layananItem.appendChild(icon);
        layananItem.appendChild(judul);
        layananItem.appendChild(deskripsi);

        // Menambahkan layananItem ke container
        container.appendChild(layananItem);
    });

}

function ubahHeader(){
    document.getElementById("halo").innerHTML=getHash();
}

// renderHTML('content','content/main.html');


document.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});