function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDucks: 1
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDucks: 7
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDucks: 15
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDucks: 5
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDucks: 1
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDucks: 2
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDucks: 10
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDucks: 5
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDucks: 0
        },
        "Bredan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDucks: 12
        }
      }
    }
  }
}

console.log(gameObject());

function homeTeamName() {
  return gameObject()["home"]["teamName"];
}
console.log(homeTeamName());
function awayTeamName() {
}
console.log(awayTeamName())
//Player Points
function numPointsScored(playerName) {
  return gameObject().away.players[playerName].points
}
console.log(numPointsScored("Desagna Diop"))

function playerStats(playerName) {
  return gameObject().home.players[playerName] || gameObject().away.players[playerName]
}
console.log(playerStats("Jeff Adrien"))

function shoeSize(playerName) {
  return playerStats(playerName).shoe
}
console.log(shoeSize("Bismak Biyombo"))

function numPointsScored(playerName) {
  const game = gameObject();
  for (let team in game) {
    if (game[team].players[playerName]) {
      return game[team].players[playerName].points;
    }
  }
}
console.log(numPointsScored("Desagna Diop"))

function teamColors(teamName) {
  const game = gameObject();
  for (let team in game) {
    if (game[team].teamName === teamName) {
      return game[team].colors;
    }
  }
}
console.log(teamColors("Brooklyn Nets"))

function teamNames() {
  return [gameObject().home.teamName, gameObject().away.teamName]
}
console.log(teamNames())

function playerNumbers(teamName) {
  const team = gameObject().home.teamName === teamName ? gameObject().home : gameObject().away;
  const numbers = [];
  for (let player in team.players) {
    numbers.push(team.players[player].number);
  }
  return numbers;
}
console.log(playerNumbers("Brooklyn Nets"))

function bigShoeRebounds() {
  let playerBiggestShoe = { shoe: 0 };
  for (let team in gameObject()) {
    for (let player in gameObject()[team].players) {
      if (gameObject()[team].players[player].shoe > playerBiggestShoe) {
        playerBiggestShoe = gameObject()[team].players[player];
      }
    }
  }
  return playerBiggestShoe.rebounds;
}
console.log(bigShoeRebounds())









