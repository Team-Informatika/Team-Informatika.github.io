import { onClick, renderHTML } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js";
import { getHash, onHashChange } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/url.js";
import { getJSON } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/api.js";

onHashChange(pilihanMenu);

//document.getElementById("content").innerHTML="<h1>ini adalah isi dari konten</h1>";
onClick("halo", ubahHeader);

function pilihanMenu() {
  console.log(getHash());
  const hashpath = getHash();
  if (hashpath === "main") {
    console.log("ini kedetek main");
    renderHTML("content", "content/main.html", renderDataMaindariJson);
  }
  if (hashpath === "about") {
    console.log("ini kedetek about");
    renderHTML("content", "content/about.html", renderDataAboutdariJson);
  }

    if (hashpath === "team") {
        console.log("ini team nya masuk cok");
        renderHTML('content', 'content/team.html', renderDataTeamdariJson);
    }

  if (hashpath === "panduan") {
    console.log("wadidaw terkidaw-kidaw");
    renderHTML("content", "content/panduan.html");
  }
  if (hashpath === "layanan") {
    console.log("layanan disini ya boss");
    renderHTML("content", "content/layanan.html", renderDatadariJson);
  }
}

function renderDatadariJson() {

    getJSON("https://t.if.co.id/json/layanan.json", "aja", "enak", responseFunctionLayanan);
    getJSON("https://t.if.co.id/json/team.json", "aja", "enak", responseFunctionTeam);
    
}

function renderDataMaindariJson() {
  getJSON(
    "https://t.if.co.id/json/main.json",
    "aja",
    "hehe",
    responseFunctionMain
  );
}
function renderDataAboutdariJson() {
  getJSON(
    "https://t.if.co.id/json/about.json",
    "aja",
  "apa", responseFunctionAbout );
}

function renderDataTeamdariJson(){
    getJSON("https://t.if.co.id/json/team.json", "aja", "enak", responseFunctionTeam);
}

// cons response={ status : 200, data: datalayanan }
function responseFunctionMain(file) {
    console.log(file);
    // let coba = file.data;
    // const alamatElement = document.getElementById("alamat");
    // const universitas = document.createElement('h2');
    // universitas.textContent = coba.universitas;
    setInner("alamat", file.data.Universitas);

}

function responseFunctionTeam(responseteam) {
  console.log(responseteam);
  let teamberkelas;
  teamberkelas = responseteam.data;
  const isiteam = document.getElementById("team");
  teamberkelas.forEach((team) => {
    // Membuat elemen div untuk setiap item
    const teamContainer = document.createElement("div");
    teamContainer.classList.add("team-list");

    // Membuat elemen deskripsi
    const pnama = document.createElement("p");

    const link = document.createElement("a");
    link.textContent = team.nama;
    link.href = team.link;
    console.log(pnama);
    console.log(teamContainer);
    pnama.appendChild(link);
    // Menambahkan icon, judul, dan deskripsi ke dalam layananItem
    teamContainer.appendChild(pnama);

    // Menambahkan layananItem ke container
    isiteam.appendChild(teamContainer);


  });
}

function responseFunctionLayanan(data) {
  //{ status, data: parsedResult }
  console.log(data);
  let apaja;
  apaja = data.data;
  const container = document.getElementById("layanan-list");
  // Melakukan perulangan untuk setiap item dalam data
  apaja.forEach((item) => {
    // Membuat elemen div untuk setiap item
    const layananItem = document.createElement("div");
    layananItem.classList.add("layanan-item");

    // Membuat elemen icon
    const icon = document.createElement("i");
    icon.classList.add("icon"); //ini untuk menambahkan class di tag tersebut
    icon.textContent = item.icon;

    // Membuat elemen judul
    const judul = document.createElement("h2");
    judul.textContent = item.judul;

    // Membuat elemen deskripsi
    const deskripsi = document.createElement("p");
    deskripsi.textContent = item.deskripsi;

    // Menambahkan icon, judul, dan deskripsi ke dalam layananItem
    layananItem.appendChild(icon);
    layananItem.appendChild(judul);
    layananItem.appendChild(deskripsi);

    // Menambahkan layananItem ke container
    container.appendChild(layananItem);
  });
}
function responseFunctionAbout(about) {
  console.log(about);
  let tentang = about.data;
  const container = document.getElementById("about");
  tentang.forEach((desk) => {
    const aboutus = document.createElement("div");
    aboutus.classList.add("about-us");

    const aboutjudul = document.createElement("h1");
    aboutjudul.textContent = about.judul;

    const aboutdeskripsi = document.createElement("p");
    aboutdeskripsi.textContent = about.deskripsi;

    aboutus.appendChild(judul);
    aboutus.appendChild(deskripsi);

    container.appendChild(about);
  });
}

function ubahHeader() {
  document.getElementById("halo").innerHTML = getHash();
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
