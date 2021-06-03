
// This Kata is intended as a small challenge for my students

// All Star Code Challenge #1

// Write a function, called sumPPG, that takes two NBA player objects/struct/Hash/Dict/Class and sums their PPG
// Examples:

class NBAplayer{
  constructor(name, team, ppg){
  this.name=name;
  this.team=team;
  this.ppg=ppg;
  }
}

function sumPPG(player1, player2) {
  return player1.ppg + player2.ppg
}


var iverson = new NBAplayer("Iverson", "76ers", 11.2);
var jordan = new NBAplayer("Jordan", "bulls", 20.2);
console.log(sumPPG(iverson, jordan));
