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
                    "img": "../images/Session Road/citylight.jpg",
            },
                {
                    "name": "Hotel Veniz",
                    "address": "One Abanao St.",
                    "rate": 2207,
                    "img": "../images/Session Road/hotel-veniz.jpg",
                },
                {
                    "name": "Venus Parkview Hotel",
                    "address": "19 Kisad Road",
                    "rate": 3675,
                    "img": "../images/Session Road/venus-parkview.png",
                },
                {
                    "name": "Inn Rocio",
                    "address": "68 Kisad Road",
                    "rate": 3172,
                    "img": "../images/Session Road/inn-rocio.jpg",
                },
                {
                    "name": "Microtel",
                    "address": "Upper Session Road",
                    "rate": 2991,
                    "img": "../images/Session Road/microtel.jpg",
                },
                {
                    "name": "Baguio Burnham Suites Hotel",
                    "address": "6 Kisad Road",
                    "rate": 3839,
                    "img": "../images/Session Road/bbs.jpg",
                },
                {
                    "name": "Travelite Express Hotel",
                    "address": "Shuntug Street",
                    "rate": 1559,
                    "img": "../images/Session Road/travelite.jpg",
                },
                {
                    "name": "Golden Pine Hotel",
                    "address": "Corner of Carino and Yandoc Streets",
                    "rate": 2656,
                    "img": "../images/Session Road/golden-pine.jpg",
                },
                {
                    "name": "Baguio Holiday Villas",
                    "address": "10 Legarda VIllas",
                    "rate": 2276,
                    "img": "../images/Session Road/baguio-holiday.jpg",
                },
                {
                    "name": "Azalea Residences Baguio",
                    "address": "7 Leonard Wood Loop, Barangay M. Roxas",
                    "rate": 4244,
                    "img": "../images/Session Road/azalea.jpg",
                },
                {
                    "name": "Hotel Henrico - Legarda",
                    "address": "Legarda Road",
                    "rate": 1479,
                    "img": "../images/Session Road/hotel-henrico.jpg",
                },
                {
                    "name": "Newtown Plaza Hotel",
                    "address": "42 CM Recto Street corner Leonard Wood Road",
                    "rate": 3118,
                    "img": "../images/Session Road/newtown.jpg",
                },
                {
                    "name": "Hotel Supreme Convention Plaza",
                    "address": "113 Magsaysay Avenue",
                    "rate": 2026,
                    "img": "../images/Session Road/hotel-supreme.jpg",
                }
            ]
        },
        {
            "location": "burnham park",
            "hotels": [
                {
                    "name": "Baguio Burnham Suites Hotel",
                    "address": "6 Kisad Road",
                    "rate": 3839,
                    "img": "../images/Session Road/bbs.jpg",
                },
                {
                    "name": "City Travel",
                    "address": "15 Kisad Road, Baguio City proper, Baguio",
                    "rate": 1923,
                    "img": "../images/Burnham/city-travel.jpg",
                },
                {
                    "name": "Inn Rocio",
                    "address": "68 Kisad Road",
                    "rate": 3172,
                    "img": "../images/Session Road/inn-rocio.jpg",
                },
                {
                    "name": "Prince Plaza Hotel",
                    "address": "17 legarda road, baguio city proper, baguio",
                    "rate": 2093,
                    "img": "../images/Burnham/prince.jpg",
                },
                {
                    "name": "Hotel Veniz",
                    "address": "One Abanao St.",
                    "rate": 2207,
                    "img": "../images/Session Road/hotel-veniz.jpg",
                },
                {
                    "name": "Eurotel Baguio",
                    "address": "123 abanao extension barangay rizal park, baguio city proper, baguio",
                    "rate": 1743,
                    "img": "../images/Burnham/euro.jpg",
                },
                {
                    "name": "Heritage Mansion",
                    "address": "Kisad Road through Abanao Extension, corner G. del Pilar Street, 2600 Baguio",
                    "rate": 4500,
                    "img": "../images/Burnham/heritage.jpg",
                },
                {
                    "name": "Griffin Lodge",
                    "address": "#6 Gen. Lim St. Near Kisad Road Burnham Park Baguio City, 2600 Baguio",
                    "rate": 2200,
                    "img": "../images/Burnham/griffin.jpg",
                },
                {
                    "name": "A Baguio",
                    "address": "Abanao Street corner Shagem Street, 2600 Baguio",
                    "rate": 2900,
                    "img": "../images/Burnham/a.jpg",
                },
                {
                    "name": "Paragon and Suites",
                    "address": "14-16 Otek Street, Rizal Monument, Benguet, 2600 Baguio",
                    "rate": 4760,
                    "img": "../images/Burnham/paragon.jpg",
                },
                ]
        },
        {
            "location": "camp john hay",
            "hotels": [
                {
                    "name": "The Manor",
                    "address": "Ordonio Drive, Camp John Hay, Baguio",
                    "rate": 10341,
                    "img": "../images/cjh/manor.jpg",
                    },
                {
                    "name": "The Forest Lodge",
                    "address": "Camp John Hay, loakan road, Baguio",
                    "rate": 5045,
                    "img": "../images/cjh/forest.jpg",
                    },
                {
                    "name": "Le Monet Hotel",
                    "address": "Ordonio Drive, Loakan Road, Camp John Hay, 2600 Baguio",
                    "rate": 6850,
                    "img": "../images/cjh/monet.jpg",
                    },
                {
                    "name": "AIM Conference Center Baguio",
                    "address": "Igorot Lodge, Club John Hay, Baguio",
                    "rate": 2517,
                    "img": "../images/cjh/aim.jpg",
                    },
              ]
        },
        {
            "location": "wright park",
            "hotels": [
                {
                    "name": "Safari Lodge",
                    "address": "191 Leonard Wood Road, Philippines",
                    "rate": 2394,
                    "img": "../images/wright/safari.jpg",
                    },
                {
                    "name": "Hotel Elizabeth Baguio",
                    "address": "1 J. Felipe Street Corner Gibraltar Road",
                    "rate": 3500,
                    "img": "../images/wright/eli.jpg",
                    },
                {
                    "name": " Kamiseta Hotel",
                    "address": "#20 Villamor Street, Barangay Lualhati, 2600 Baguio",
                    "rate": 3600,
                    "img": "../images/wright/kamiseta.jpg",
                    },
                {
                    "name": " Log Cabin at Wright Park",
                    "address": "43 North Outlook Drive, 2600 Baguio, Philippines",
                    "rate": 2662,
                    "img": "../images/wright/log.jpg",
                    },
                {
                    "name": " Grand Sierra Pines Baguio",
                    "address": "246 Romulo Drive Lualhati Brgy., 2600 Baguio",
                    "rate": 7236,
                    "img": "../images/wright/grand.jpg",
                    },
            ]
        },
        {
            "location" : "mines view",
            "hotels" : [
                  {
                    "name": " Ridgewood Hotel",
                    "address": "17 Julian Felipe St., Barangay Lualhati, Baguio",
                    "rate": 2845,
                    "img": "../images/mines/ridgewood.jpg",
                    },
                {
                    "name": " Mines View Park Hotel",
                    "address": "no. 1 corner apostol st. North Out look Drive, mines view, Baguio, 2600 Benguet",
                    "rate": 4025,
                    "img": "../images/mines/park.jpg",
                    },
                {
                    "name": " Villa Silvina Baguio Hotel & Restaurant",
                    "address": "15 Outlook Drive, (Behind The Mansion), Baguio, 2600 Benguet",
                    "rate": 1882,
                    "img": "../images/mines/villa.jpg",
                    },
                {
                    "name": "Albergo Residences Hotel",
                    "address": "Villamor Drive, Baguio, 2600",
                    "rate": 3363,
                    "img": "../images/mines/albergo.jpg",
                    },
                {
                    "name": " Grand Sierra Pines Baguio",
                    "address": "246 Romulo Drive Lualhati Brgy., 2600 Baguio",
                    "rate": 7236,
                    "img": "../images/wright/grand.jpg",
                    },
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
            '<h3>Php ' + myData.id[0].hotels[i].rate + '</h3>' +
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
    for (i = 0; i < myData.id[1].hotels.length; i++) {
        document.getElementById("second-page").innerHTML +=
            '<div class="hotel-content">' +
            '<img src="' + myData.id[1].hotels[i].img + '" class="image">' +
            '<h2>' + myData.id[1].hotels[i].name + '</h2>' +
            '<h3>' + myData.id[1].hotels[i].address + '</h3>' +
            '<h3>Php ' + myData.id[1].hotels[i].rate + '</h3>' +
            '<button class="comp-but"> Compute </button>' +
            '</div>';

    }
}

function campButton() {
    y = document.getElementById("dropdown");
    if (y.style.display === 'none') {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
    x = document.getElementById("camp").getAttribute("value");
    choice = Number(x);
    for (i = 0; i < myData.id[2].hotels.length; i++) {
        document.getElementById("second-page").innerHTML +=
            '<div class="hotel-content">' +
            '<img src="' + myData.id[2].hotels[i].img + '" class="image">' +
            '<h2>' + myData.id[2].hotels[i].name + '</h2>' +
            '<h3>' + myData.id[2].hotels[i].address + '</h3>' +
            '<h3>Php ' + myData.id[2].hotels[i].rate + '</h3>' +
            '<button class="comp-but"> Compute </button>' +
            '</div>';

    }
}

function wrightButton() {
    y = document.getElementById("dropdown");
    if (y.style.display === 'none') {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
    x = document.getElementById("wright").getAttribute("value");
    choice = Number(x);
    for (i = 0; i < myData.id[3].hotels.length; i++) {
        document.getElementById("second-page").innerHTML +=
            '<div class="hotel-content">' +
            '<img src="' + myData.id[3].hotels[i].img + '" class="image">' +
            '<h2>' + myData.id[3].hotels[i].name + '</h2>' +
            '<h3>' + myData.id[3].hotels[i].address + '</h3>' +
            '<h3>Php ' + myData.id[3].hotels[i].rate + '</h3>' +
            '<button class="comp-but"> Compute </button>' +
            '</div>';

    }
}

function minesButton() {
    y = document.getElementById("dropdown");
    if (y.style.display === 'none') {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
    x = document.getElementById("mines").getAttribute("value");
    choice = Number(x);
    for (i = 0; i < myData.id[4].hotels.length; i++) {
        document.getElementById("second-page").innerHTML +=
            '<div class="hotel-content">' +
            '<img src="' + myData.id[4].hotels[i].img + '" class="image">' +
            '<h2>' + myData.id[4].hotels[i].name + '</h2>' +
            '<h3>' + myData.id[4].hotels[i].address + '</h3>' +
            '<h3>Php ' + myData.id[4].hotels[i].rate + '</h3>' +
            '<button class="comp-but"> Compute </button>' +
            '</div>';

    }
}

/** home button */
function scrollUp() {
    if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        document.getElementById("topbutton").style.display = "block";
    } else {
        document.getElementById("topbutton").style.display = "none";
    }
}


