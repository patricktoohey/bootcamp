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
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'wheel_12_12',
                            type: 'image',
                            rect: ['136px', '61px', '277px', '277px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"wheel_12_1.svg",'0px','0px'],
                            transform: [[],['-30']]
                        },
                        {
                            id: 'Ellipse2',
                            type: 'ellipse',
                            rect: ['141px', '187px', '27px', '27px', 'auto', 'auto'],
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
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid58",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Ellipse2}",
                            '187px',
                            '187px'
                        ],
                        [
                            "eid74",
                            "rotateZ",
                            0,
                            1250,
                            "linear",
                            "${Ellipse2}",
                            '0deg',
                            '-30deg'
                        ],
                        [
                            "eid77",
                            "rotateZ",
                            1500,
                            1000,
                            "linear",
                            "${Ellipse2}",
                            '-30deg',
                            '-60deg'
                        ],
                        [
                            "eid80",
                            "rotateZ",
                            2750,
                            1000,
                            "linear",
                            "${Ellipse2}",
                            '-60deg',
                            '-90deg'
                        ],
                        [
                            "eid81",
                            "rotateZ",
                            4000,
                            0,
                            "linear",
                            "${Ellipse2}",
                            '-90deg',
                            '-90deg'
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
                            "eid10",
                            "rotateZ",
                            4000,
                            0,
                            "linear",
                            "${wheel_12_12}",
                            '-90deg',
                            '-90deg'
                        ],
                        [
                            "eid57",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Ellipse2}",
                            '141px',
                            '141px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("indexing_edgeActions.js");
})("EDGE-1256124860");
