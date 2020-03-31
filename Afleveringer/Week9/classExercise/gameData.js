const gameArea = {
    "type": "Polygon",
    "coordinates":
        [
            [
                [
                    12.545442581176758,
                    55.77763501074921
                ],
                [
                    12.548360824584961,
                    55.774642049830206
                ],
                [
                    12.578401565551758,
                    55.77628337944104
                ],
                [
                    12.575139999389648,
                    55.793947433402685
                ],
                [
                    12.569990158081055,
                    55.796649423788345
                ],
                [
                    12.545442581176758,
                    55.77763501074921
                ]
            ]
        ]
}
const players = [
    {
        "type": "Feature",
        "properties": {
            "name": "Team1-inside"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                12.563724517822266,
                55.78680555637222
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Team2-inside"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                12.568788528442383,
                55.7792279446101
            ]
        }
    },
    {
        "type": "Feature",
        "properties": { "name": "Team3-outside" },
        "geometry": {
            "type": "Point",
            "coordinates": [
                12.588272094726562,
                55.78304106721907
            ]
        }
    },
    {
        "type": "Feature",
        "properties": { "name": "Team4-outside" },
        "geometry": {
            "type": "Point",
            "coordinates": [
                12.563896179199219,
                55.77343514572369
            ]
        }
    }
]

module.exports = { gameArea, players }