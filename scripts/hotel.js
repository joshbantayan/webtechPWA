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

var x = myData.id[0].hotels[0].name;

window.onload = function () {
    document.getElementById("demo").innerHTML = x;
};