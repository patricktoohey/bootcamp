/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "width",
                centerStage: "none",
                resizeInstances: false,
                bScaleToFitParent: true,
                content: {
                    dom: [
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['0px', '180px', '550px', '40px', 'auto', 'auto'],
                            fill: ["rgba(229,229,229,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'wheel_12_12',
                            type: 'image',
                            rect: ['136px', '61px', '277px', '277px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"wheel_12_1.svg",'0px','0px'],
                            transform: [[],['-30']]
                        },
                        {
                            id: 'Item1',
                            type: 'ellipse',
                            rect: ['141px', '187px', '27px', '27px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],[],['490%']]
                        },
                        {
                            id: 'Item12',
                            type: 'ellipse',
                            rect: ['320px', '187px', '27px', '27px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-30'],[],[],['490%']]
                        },
                        {
                            id: 'Item11',
                            type: 'ellipse',
                            rect: ['141px', '187px', '27px', '27px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],[],['490%']]
                        },
                        {
                            id: 'Item2',
                            type: 'ellipse',
                            rect: ['141px', '187px', '27px', '27px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],[],['490%']]
                        },
                        {
                            id: 'Item3',
                            type: 'ellipse',
                            rect: ['109px', '187px', '27px', '27px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-90'],[],[],['490%']]
                        },
                        {
                            id: 'Item4',
                            type: 'ellipse',
                            rect: ['78px', '187px', '27px', '27px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],[],['490%']]
                        },
                        {
                            id: 'Item5',
                            type: 'ellipse',
                            rect: ['13px', '187px', '27px', '27px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],[],['490%']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '550px', '400px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 6750,
                    autoPlay: true,
                    labels: {
                        "FullWheel": 5250
                    },
                    data: [
                        [
                            "eid96",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${Item3}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid99",
                            "rotateZ",
                            1170,
                            0,
                            "linear",
                            "${Item3}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid101",
                            "rotateZ",
                            1500,
                            0,
                            "linear",
                            "${Item3}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid105",
                            "rotateZ",
                            2500,
                            0,
                            "linear",
                            "${Item3}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid107",
                            "rotateZ",
                            2750,
                            1000,
                            "linear",
                            "${Item3}",
                            '0deg',
                            '-30deg'
                        ],
                        [
                            "eid144",
                            "rotateZ",
                            4000,
                            1000,
                            "linear",
                            "${Item3}",
                            '-30deg',
                            '-60deg'
                        ],
                        [
                            "eid179",
                            "rotateZ",
                            5000,
                            0,
                            "linear",
                            "${Item3}",
                            '-60deg',
                            '-60deg'
                        ],
                        [
                            "eid192",
                            "rotateZ",
                            5250,
                            1000,
                            "linear",
                            "${Item3}",
                            '-60deg',
                            '-90deg'
                        ],
                        [
                            "eid82",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Item2}",
                            '109px',
                            '109px'
                        ],
                        [
                            "eid88",
                            "left",
                            1170,
                            80,
                            "linear",
                            "${Item2}",
                            '109px',
                            '141px'
                        ],
                        [
                            "eid94",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Item3}",
                            '77px',
                            '77px'
                        ],
                        [
                            "eid100",
                            "left",
                            1170,
                            80,
                            "linear",
                            "${Item3}",
                            '77px',
                            '109px'
                        ],
                        [
                            "eid104",
                            "left",
                            2425,
                            75,
                            "linear",
                            "${Item3}",
                            '109px',
                            '141px'
                        ],
                        [
                            "eid58",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Item1}",
                            '187px',
                            '187px'
                        ],
                        [
                            "eid225",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Item11}",
                            '-30px',
                            '-30px'
                        ],
                        [
                            "eid216",
                            "left",
                            6000,
                            500,
                            "linear",
                            "${Item11}",
                            '-30px',
                            '141px'
                        ],
                        [
                            "eid109",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Item4}",
                            '187px',
                            '187px'
                        ],
                        [
                            "eid83",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Item2}",
                            '187px',
                            '187px'
                        ],
                        [
                            "eid86",
                            "top",
                            1170,
                            0,
                            "linear",
                            "${Item2}",
                            '187px',
                            '187px'
                        ],
                        [
                            "eid95",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Item3}",
                            '187px',
                            '187px'
                        ],
                        [
                            "eid98",
                            "top",
                            1170,
                            0,
                            "linear",
                            "${Item3}",
                            '187px',
                            '187px'
                        ],
                        [
                            "eid158",
                            "rotateZ",
                            0,
                            1250,
                            "linear",
                            "${Item12}",
                            '-30deg',
                            '-60deg'
                        ],
                        [
                            "eid162",
                            "rotateZ",
                            1500,
                            1000,
                            "linear",
                            "${Item12}",
                            '-60deg',
                            '-90deg'
                        ],
                        [
                            "eid166",
                            "rotateZ",
                            2750,
                            1000,
                            "linear",
                            "${Item12}",
                            '-90deg',
                            '-120deg'
                        ],
                        [
                            "eid170",
                            "rotateZ",
                            4000,
                            1000,
                            "linear",
                            "${Item12}",
                            '-120deg',
                            '-150deg'
                        ],
                        [
                            "eid173",
                            "rotateZ",
                            5250,
                            1000,
                            "linear",
                            "${Item12}",
                            '-150deg',
                            '-180deg'
                        ],
                        [
                            "eid74",
                            "rotateZ",
                            0,
                            1250,
                            "linear",
                            "${Item1}",
                            '0deg',
                            '-30deg'
                        ],
                        [
                            "eid77",
                            "rotateZ",
                            1500,
                            1000,
                            "linear",
                            "${Item1}",
                            '-30deg',
                            '-60deg'
                        ],
                        [
                            "eid80",
                            "rotateZ",
                            2750,
                            1000,
                            "linear",
                            "${Item1}",
                            '-60deg',
                            '-90deg'
                        ],
                        [
                            "eid136",
                            "rotateZ",
                            4000,
                            1000,
                            "linear",
                            "${Item1}",
                            '-90deg',
                            '-120deg'
                        ],
                        [
                            "eid178",
                            "rotateZ",
                            5000,
                            0,
                            "linear",
                            "${Item1}",
                            '-120deg',
                            '-120deg'
                        ],
                        [
                            "eid198",
                            "rotateZ",
                            5250,
                            1000,
                            "linear",
                            "${Item1}",
                            '-120deg',
                            '-150deg'
                        ],
                        [
                            "eid149",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Item12}",
                            '187px',
                            '187px'
                        ],
                        [
                            "eid111",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Item4}",
                            '45px',
                            '45px'
                        ],
                        [
                            "eid121",
                            "left",
                            1170,
                            80,
                            "linear",
                            "${Item4}",
                            '45px',
                            '78px'
                        ],
                        [
                            "eid127",
                            "left",
                            2425,
                            75,
                            "linear",
                            "${Item4}",
                            '78px',
                            '110px'
                        ],
                        [
                            "eid131",
                            "left",
                            3670,
                            80,
                            "linear",
                            "${Item4}",
                            '110px',
                            '141px'
                        ],
                        [
                            "eid214",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Item11}",
                            '187px',
                            '187px'
                        ],
                        [
                            "eid114",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${Item5}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid190",
                            "rotateZ",
                            5250,
                            1000,
                            "linear",
                            "${Item5}",
                            '0deg',
                            '-30deg'
                        ],
                        [
                            "eid84",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${Item2}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid87",
                            "rotateZ",
                            1170,
                            0,
                            "linear",
                            "${Item2}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid90",
                            "rotateZ",
                            1500,
                            1000,
                            "linear",
                            "${Item2}",
                            '0deg',
                            '-30deg'
                        ],
                        [
                            "eid93",
                            "rotateZ",
                            2750,
                            1000,
                            "linear",
                            "${Item2}",
                            '-30deg',
                            '-60deg'
                        ],
                        [
                            "eid142",
                            "rotateZ",
                            4000,
                            1000,
                            "linear",
                            "${Item2}",
                            '-60deg',
                            '-90deg'
                        ],
                        [
                            "eid177",
                            "rotateZ",
                            5000,
                            0,
                            "linear",
                            "${Item2}",
                            '-90deg',
                            '-90deg'
                        ],
                        [
                            "eid199",
                            "rotateZ",
                            5250,
                            1000,
                            "linear",
                            "${Item2}",
                            '-90deg',
                            '-120deg'
                        ],
                        [
                            "eid3",
                            "rotateZ",
                            0,
                            1250,
                            "linear",
                            "${wheel_12_12}",
                            '0deg',
                            '-30deg'
                        ],
                        [
                            "eid8",
                            "rotateZ",
                            1500,
                            1000,
                            "linear",
                            "${wheel_12_12}",
                            '-30deg',
                            '-60deg'
                        ],
                        [
                            "eid7",
                            "rotateZ",
                            2500,
                            0,
                            "linear",
                            "${wheel_12_12}",
                            '-60deg',
                            '-60deg'
                        ],
                        [
                            "eid9",
                            "rotateZ",
                            2750,
                            1000,
                            "linear",
                            "${wheel_12_12}",
                            '-60deg',
                            '-90deg'
                        ],
                        [
                            "eid134",
                            "rotateZ",
                            4000,
                            1000,
                            "linear",
                            "${wheel_12_12}",
                            '-90deg',
                            '-120deg'
                        ],
                        [
                            "eid175",
                            "rotateZ",
                            5000,
                            0,
                            "linear",
                            "${wheel_12_12}",
                            '-120deg',
                            '-120deg'
                        ],
                        [
                            "eid197",
                            "rotateZ",
                            5250,
                            1000,
                            "linear",
                            "${wheel_12_12}",
                            '-120deg',
                            '-150deg'
                        ],
                        [
                            "eid57",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Item1}",
                            '141px',
                            '141px'
                        ],
                        [
                            "eid110",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${Item4}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid146",
                            "rotateZ",
                            4000,
                            1000,
                            "linear",
                            "${Item4}",
                            '0deg',
                            '-30deg'
                        ],
                        [
                            "eid181",
                            "rotateZ",
                            5000,
                            0,
                            "linear",
                            "${Item4}",
                            '-30deg',
                            '-30deg'
                        ],
                        [
                            "eid191",
                            "rotateZ",
                            5250,
                            1000,
                            "linear",
                            "${Item4}",
                            '-30deg',
                            '-60deg'
                        ],
                        [
                            "eid217",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${Item11}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid112",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Item5}",
                            '187px',
                            '187px'
                        ],
                        [
                            "eid119",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Item5}",
                            '13px',
                            '13px'
                        ],
                        [
                            "eid122",
                            "left",
                            1170,
                            80,
                            "linear",
                            "${Item5}",
                            '13px',
                            '45px'
                        ],
                        [
                            "eid128",
                            "left",
                            2425,
                            75,
                            "linear",
                            "${Item5}",
                            '45px',
                            '78px'
                        ],
                        [
                            "eid132",
                            "left",
                            3670,
                            80,
                            "linear",
                            "${Item5}",
                            '78px',
                            '110px'
                        ],
                        [
                            "eid148",
                            "left",
                            4925,
                            75,
                            "linear",
                            "${Item5}",
                            '110px',
                            '141px'
                        ],
                        [
                            "eid150",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Item12}",
                            '141px',
                            '141px'
                        ],
                        [
                            "eid205",
                            "left",
                            6250,
                            500,
                            "linear",
                            "${Item12}",
                            '141px',
                            '320px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("indexing_edgeActions.js");
})("EDGE-1256124860");
