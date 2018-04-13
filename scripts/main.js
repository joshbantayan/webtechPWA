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
                "rate": 2252
            },
                {
                    "name": "Hotel Veniz",
                    "address": "One Abanao St.",
                    "rate": 2207
                },
                {
                    "name": "Venus Parkview Hotel",
                    "address": "19 Kisad Road",
                    "rate": 3675
                },
                {
                    "name": "Inn Rocio",
                    "address": "68 Kisad Road",
                    "rate": 3172
                },
                {
                    "name": "Microtel",
                    "address": "Upper Session Road",
                    "rate": 2991
                },
                {
                    "name": "Baguio Burnham Suites Hotel",
                    "address": "6 Kisad Road",
                    "rate": 3839
                },
                {
                    "name": "Travelite Express Hotel",
                    "address": "Shuntug Street",
                    "rate": 1559
                },
                {
                    "name": "Golden Pine Hotel",
                    "address": "Corner of Carino and Yandoc Streets",
                    "rate": 2656
                },
                {
                    "name": "Baguio Holiday Villas",
                    "address": "10 Legarda VIllas",
                    "rate": 2276
                },
                {
                    "name": "Azalea Residences Baguio",
                    "address": "7 Leonard Wood Loop, Barangay M. Roxas",
                    "rate": 4244
                },
                {
                    "name": "Hotel Henrico - Legarda",
                    "address": "Legarda Road",
                    "rate":  1479
                },
                {
                    "name": "Newtown Plaza Hotel",
                    "address": "42 CM Recto Street corner Leonard Wood Road",
                    "rate": 3118
                },
                {
                    "name": "Hotel Supreme Convention Plaza",
                    "address": "113 Magsaysay Avenue",
                    "rate": 2026
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
var i;
var choice;

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

function sessionButton() {
    y = document.getElementById("dropdown");
    if (y.style.display === 'none') {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
    x = document.getElementById("session").getAttribute("value");
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
