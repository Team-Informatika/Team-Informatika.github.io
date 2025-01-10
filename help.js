import {
  getHash,
  onHashChange,
} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/url.js";




onHashChange(panduan);



function panduan() {
  console.log(getHash());
  const hashpath = getHash();
  if (hashpath === "panduan") {
    console.log("panduan");
    renderHTML("content", "content/main.html");
  }
}

function pandaun() {
  document.getElementById("panduan").innerHTML = getHash();
}

renderHTML("panduan", "content/panduan.html");