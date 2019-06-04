var skater = {
    name: "Hannah",
    age: 27,
    derbyName: "Velocity Raptor",
    jerseyNumber: "15",
    yearsSkating: 1,
    injuries: 1,
    injuredCurrently: true,
    skatingStyles: [
        "Derby",
         "Trail"
        ],
    preferredPosition: "Jammer",
    league: {
        name: "Wasatch Roller Derby",
        teams: [ 
            {
            name: "Black Diamond Divas",
            type: "hometeam",
            wftdaRanking: null,
            colors: ["purple", "black"],
            },
            {
            name: "Midnight Terror",
            type: "travel",
            wftdaRanking: 86,
            colors: ["blue", "white"],
            }
        ]
    },
    leagueMates: [
        {
            name: "Carpe Jugulum",
            jerseyNumber: "261",
            position: "Jammer"
        },
        {
            name: "Ruth Slayer Ginsburg",
            jerseyNumber: "949",
            position: "Blocker"
        },
        {
            name: "Riot! Atchya",
            jerseyNumber: "119",
            position: "Pivot"
        }
    ],
    rollOut: function() {
        console.log("Skating for " + skater.league.name + ",  number " + skater.jerseyNumber + ", " + skater.derbyName)
    }
}

skater.skatingStyles.push("park", "artistic")
console.log(skater.skatingStyles)

skater.leagueMates[0].homeTeam = "Hot Wheelers"
skater.leagueMates[0].height = "7 Feet Tall"

console.log(skater.leagueMates[0])


