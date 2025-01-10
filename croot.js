import {onClick,renderHTML} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js";
import {getHash,onHashChange} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/url.js";


onHashChange(pilihanMenu);

//document.getElementById("content").innerHTML="<h1>ini adalah isi dari konten</h1>";
onClick("halo",ubahHeader);

//about ke navbar
function pilih(){
    const hashpath=getHash()
}



function pilihanMenu(){
    console.log(getHash());
    const hashpath=getHash();
    if (hashpath==="main"){
        console.log("ini kedetek main")
        renderHTML('content','content/main.html');
    }
    if (hashpath==="about"){
        renderHTML('content','content/about.html');
    }
}

function ubahHeader(){
    document.getElementById("halo").innerHTML=getHash();
}

renderHTML('content','content/main.html');


document.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});