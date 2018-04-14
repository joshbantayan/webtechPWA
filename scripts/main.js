function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

var myData = {
    "id": [
        { 
            "location": "Near Session Road",
            "hotels": [
            {
                "name": "Citylight Hotel",
                "address": "245 Upper General Luna Road",
                "rate": 2252,
                "img" : "../images/Session Road/citylight.jpg",
            },
                {
                    "name": "Hotel Veniz",
                    "address": "One Abanao St.",
                    "rate": 2207,
                    "img" : "../images/Session Road/hotel-veniz.jpg",
                },
                {
                    "name": "Venus Parkview Hotel",
                    "address": "19 Kisad Road",
                    "rate": 3675,
                    "img" : "../images/Session Road/venus-parkview.png",
                },
                {
                    "name": "Inn Rocio",
                    "address": "68 Kisad Road",
                    "rate": 3172,
                    "img" : "../images/Session Road/inn-rocio.jpg",
                },
                {
                    "name": "Microtel",
                    "address": "Upper Session Road",
                    "rate": 2991,
                    "img" : "../images/Session Road/microtel.jpg",
                },
                {
                    "name": "Baguio Burnham Suites Hotel",
                    "address": "6 Kisad Road",
                    "rate": 3839,
                    "img" : "../images/Session Road/bbs.jpg",
                },
                {
                    "name": "Travelite Express Hotel",
                    "address": "Shuntug Street",
                    "rate": 1559,
                    "img" : "../images/Session Road/travelite.jpg",
                },
                {
                    "name": "Golden Pine Hotel",
                    "address": "Corner of Carino and Yandoc Streets",
                    "rate": 2656,
                    "img" : "../images/Session Road/golden-pine",
                },
                {
                    "name": "Baguio Holiday Villas",
                    "address": "10 Legarda VIllas",
                    "rate": 2276,
                    "img" : "../images/Session Road/baguio-holiday.jpg",
                },
                {
                    "name": "Azalea Residences Baguio",
                    "address": "7 Leonard Wood Loop, Barangay M. Roxas",
                    "rate": 4244,
                    "img" : "../images/Session Road/azalea.jpg",
                },
                {
                    "name": "Hotel Henrico - Legarda",
                    "address": "Legarda Road",
                    "rate":  1479,
                    "img" : "../images/Session Road/hotel-henrico.jpg",
                },
                {
                    "name": "Newtown Plaza Hotel",
                    "address": "42 CM Recto Street corner Leonard Wood Road",
                    "rate": 3118,
                    "img" : "../images/Session Road/newtown.jpg",
                },
                {
                    "name": "Hotel Supreme Convention Plaza",
                    "address": "113 Magsaysay Avenue",
                    "rate": 2026,
                    "img" : "../images/Session Road/hotel-supreme.jpg",
                }
            ]
        },
        {
            "location": "Aurora Hill",
            "hotels": [
                {
                    "name": "The Courtyards",
                    "address": "Extension Road Evangelista Street Road 1, Leonilla Hill",
                    "rate": 4343
                },
                {

                }
         ]
      }
    ]
};

var x;
var y;
var z;
var i;
var choice;

function sessionButton() {
    y = document.getElementById("dropdown");
    z = document.getElementById("header");
    if (y.style.display === 'none' || z.style.display === 'none') {
        z.style.display = "block";
        y.style.display = "block";
    } else {
        z.style.display = "none";
        y.style.display = "none";
    }
    x = document.getElementById("session").getAttribute("value");
    choice = Number(x);
    for (i = 0; i < myData.id[0].hotels.length; i++) {
        document.getElementById("second-page").innerHTML +=
            '<div class="hotel-content">' +
            '<img src="' + myData.id[0].hotels[i].img + '" class="image">' +
            '<h2>' + myData.id[0].hotels[i].name + '</h2>' +
            '<h3>' + myData.id[0].hotels[i].address + '</h3>' +
            '<h3>Php' + myData.id[0].hotels[i].rate + '</h3>' +
            '<button class="comp-but"> Compute </button>' +
            '</div>';

    }
}

function auroraButton() {
    y = document.getElementById("dropdown");
    if (y.style.display === 'none') {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
    x = document.getElementById("aurora").getAttribute("value");
    choice = Number(x);
    for (i = 0; i < myData.id[0].hotels.length; i++) {
        document.getElementById("second-page").innerHTML +=
            '<div class="hotel-content">' +
            '<h2>' + myData.id[1].hotels[i].name + '</h2>' +
            '<h3>' + myData.id[1].hotels[i].address + '</h3>' +
            '<h3>Php' + myData.id[1].hotels[i].rate + '</h3>' +
            '<button class="comp-but"> Compute </button>' +
            '</div>';

    }
}

function trancButton() {
    y = document.getElementById("dropdown");
    if (y.style.display === 'none') {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
    x = document.getElementById("tranc").getAttribute("value");
    choice = Number(x);
    for (i = 0; i < myData.id[0].hotels.length; i++) {
        document.getElementById("second-page").innerHTML +=
            '<div class="hotel-content">' +
            '<h2>' + myData.id[0].hotels[i].name + '</h2>' +
            '<h3>' + myData.id[0].hotels[i].address + '</h3>' +
            '<h3>Php' + myData.id[0].hotels[i].rate + '</h3>' +
            '<button class="comp-but"> Compute </button>' +
            '</div>';

    }
}

function burnhamButton() {
    y = document.getElementById("dropdown");
    if (y.style.display === 'none') {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
    x = document.getElementById("burnham").getAttribute("value");
    choice = Number(x);
    for (i = 0; i < myData.id[0].hotels.length; i++) {
        document.getElementById("second-page").innerHTML +=
            '<div class="hotel-content">' +
            '<h2>' + myData.id[0].hotels[i].name + '</h2>' +
            '<h3>' + myData.id[0].hotels[i].address + '</h3>' +
            '<h3>Php' + myData.id[0].hotels[i].rate + '</h3>' +
            '<button class="comp-but"> Compute </button>' +
            '</div>';

    }
}
