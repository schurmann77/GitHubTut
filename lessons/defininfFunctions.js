var friends = [" Sarah" , " Cole" , " Marco", " Amber", " Chris", " JoAnna"] 

var team1 = new Array();
var team2 = new Array();

for(i = 0; i < friends.length; i++) {
    if(i % 2 == 0) {
        team1.unshift(friends[i]);
    } else {
        team2.unshift(friends[i]);
    }
}

function checkTeams() {
    console.log("Team 1 has : " + team1);
    console.log("Team 2 has : " + team2);
}