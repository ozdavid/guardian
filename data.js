/*var gdud_js =
{
    "id": "battalion9",
    "destination": "operational",
    "frequency": "53.00Mhz",
    "ock": "Agas",
    "ChildsId": [
        "company1-9",
        "company2-9",
        "magad-9",
        "samagad-9",
        "kaman-9"
    ]
}

var autonomies = [
{
    "id": "company1-9",
    "ChildsId": [
        "platoon1-1-9",
        "platoon2-1-9",
        "captain-1-9"
    ],
    "equipment": [
        ["122","visible"],
        ["122","visible"],
        ["122","visible"],
        ["710m","visible"]
    ]
},
{
    "id": "company2-9",
    "ChildsId": [
        "platoon1-2-9",
        "platoon2-2-9",
        "captain-2-9"
    ],
    "equipment": [
        ["122","visible"],
        ["122","visible"],
        ["122","visible"],
        ["710m","visible"]
    ]
},
{
    "id": "platoon1-1-9",
    "ChildsId": [
    ],
    "equipment": [
        ["122","visible"],
        ["122","visible"],
        ["72","visible"],
        ["72","visible"]
    ]
}
,
{
    "id": "platoon1-2-9",
    "ChildsId": [
    ],
    "equipment": [
        ["122","visible"]  ,
        ["122","visible"],
        ["72","visible"],
        ["72","visible"]
    ]
},
{
    "id": "platoon1-2-9",
    "ChildsId": [
    ],
    "equipment": [
        ["122","visible"],
        ["122","visible"],
        ["72","visible"],
        ["72","visible"]
    ]
}
,
{
    "id": "platoon2-2-9",
    "ChildsId": [
    ],
    "equipment": [
        ["122","visible"],
        ["122","visible"],
        ["72","visible"],
        ["72","visible"]
    ]
},
{
    "id": "kaman-9",
    "ChildsId": [
    ],
    "equipment": [
        ["93","visible"],
        ["93","visible"],
        ["122","visible"],
        ["940","visible"]
    ]
}
{
    "id": "magad-9",
    "ChildsId": [
    ],
    "equipment": [
        ["122","visible"],
        ["93","visible"],
        ["122","visible"],
        ["72","visible"]
    ]
},
{
    "id": "samgad-9",
    "ChildsId": [
    ],
    "equipment": [
        ["122","visible"],
        ["93","visible"]
    ]
}
]
*/
var walk_talk = {
    "122": "/images/hi",
    "940": "/images/hi",
    "710": "/images/hi",
    "710מ": "/images/hi",
    "120": "/images/hi",
    "714מ": "/images/hi"
}
var company_js =
{
    /*"destination": "operational",
    "frequency": "53.00Mhz",
    "ock": "Agas",
    "p": [
        "platoon-hammer",
        "platoon-nagmash",
        "platoon-keshset",
        "mp",
        "smp"
    ],*/
    "captain" : {
        "name": "נגמש מפ",
        "equipment" : ["122","940","122", "714מ","710","710מ"]
    },
    "vice_captain" : {
        "name": "סמפ",
        "equipment" : ["710","710מ"]
    }
}
var autonomies = [
    {
        "id": "platoon-hammer",
        "equipment": [
            ["122","visible"] ,
            ["120","visible"]
        ],
        "mm": {
            "name": "ממ קשת",
            "equipment": [
                "122","122","710מ","710","714מ"
            ]
        },
        "smm": {
            "name": "סממ קשת",
            "equipment": [
                "122","710מ","710"
            ]
        }
    },
    {
        "id": "platoon-nagmash",
        "mm": {
            "name": "ממ קשת",
            "equipment": [
                "122","122","710מ","714מ"
            ]
        },
        "smm": {
            "name": "סממ קשת",
            "equipment": [
                "122","710מ"
            ]
        }
    },
    {
        "id": "platoon-keshset",
        "equipment": [
            "122","122","120"
        ],
        "mm": {
            "name": "ממ קשת",
            "equipment": [
                "122","122","940","710"
            ]
        },
        "smm": {
            "name": "סממ קשת",
            "equipment": [
                "122","122","940","710"
            ]
        }
    }
]