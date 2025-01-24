function responseFunctionTeam(responseteam) {
    console.log(responseteam);
    let teamMembers = responseteam.data;
    const container = document.getElementById("team");
    teamMembers.forEach(team => {
        // Create a div element for each item
        const teamContainer = document.createElement('div');
        teamContainer.classList.add('team');

        // Create description element
        const isinya = document.createElement('p');
        isinya.textContent = team.isinya;

        // Append description to teamContainer
        teamContainer.appendChild(isinya);

        // Append teamContainer to the main container
        container.appendChild(teamContainer);
    });
}
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
    getJSON("https://t.if.co.id/json/team.json", "aja", "enak", responseFunctionTeam);
}

// cons response={ status : 200, data: datalayanan }
function responseFunctionTeam(responseteam){
    console.log(responseteam);
    let teamberkelas;
    teamberkelas=responseteam.data;
    const teamisi = document.getElementById("team");
    teamberkelas.forEach(team => {
        // Membuat elemen div untuk setiap item
        const teamContainer = document.createElement('div');
        teamContainer.classList.add('team');

        // Membuat elemen deskripsi
        const isinya = document.createElement('p');
        isinya.textContent = team.isinya;

        // Menambahkan icon, judul, dan deskripsi ke dalam layananItem
        teamContainer.appendChild(isinya);

        // Menambahkan layananItem ke container
        teamisi.appendChild(team);
    });
}
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