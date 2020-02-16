var tKey;
var ekey;
function getTeamScores(tKey, eKey) {
  var teamScoreRequest = new XMLHttpRequest();
  teamScoreRequest.open("GET", "https://www.thebluealliance.com/api/v3/team/" + "frc1482" + "/event/" + "2019abca" + "/matches/simple" , true);
  teamScoreRequest.setRequestHeader("X-TBA-Auth-Key", "lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5");
  teamScoreRequest.send();
  teamScoreRequest.onreadystatechange = function() {
    var teamScoreRequestObj = JSON.parse(this.responseText);
    var j;
    console.log(teamScoreRequestObj.team_keys);

  }

}
