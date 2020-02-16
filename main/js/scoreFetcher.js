
var b;
var blueKeyArray;
var isTeam = "";
var teamTotal = 0;
var teamAvg;
var currentTeamScore;
var numOfMatches;

getTeamScores();
function getTeamScores(tKey, eKey) {
    setTimeout(function(){
  var teamScoreRequest = new XMLHttpRequest();
  teamScoreRequest.open("GET", "https://www.thebluealliance.com/api/v3/team/" + tKey + "/event/" + eKey + "/matches/simple" , true);
  teamScoreRequest.setRequestHeader("X-TBA-Auth-Key", "lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5");
  teamScoreRequest.send();
  teamScoreRequest.onreadystatechange = function() {
    teamTotal = 0;
    var teamScoreRequestObj = JSON.parse(this.responseText);
    var j;
    for (j = 0; j < teamScoreRequestObj.length; j++) {
      blueKeyArray = teamScoreRequestObj[j].alliances.blue.team_keys;
      for(b = 0; b < 2; b++) {
          if(blueKeyArray[b] == tKey) {
              isTeam = "blue";
          } 
        } 
       if(isTeam == "blue") {
            currentTeamScore = teamScoreRequestObj[j].alliances.blue.score;
            console.log(currentTeamScore);
            teamTotal += parseInt(currentTeamScore);
        } else {
            currentTeamScore = teamScoreRequestObj[j].alliances.red.score;
            console.log(currentTeamScore)
            teamTotal += parseInt(currentTeamScore);
        }
            isTeam = "";
        }
      numOfMatches = teamScoreRequestObj.length;
      teamAvg = teamTotal/numOfMatches;
      console.log(teamAvg);

  }
  return teamAvg;
    }, 500)
}