var tKey;
var ekey;
// getTeamScores();
var blueKeyArray;
function getTeamScores() {
  var teamScoreRequest = new XMLHttpRequest();
  teamScoreRequest.open("GET", "https://www.thebluealliance.com/api/v3/team/" + "frc1482" + "/event/" + "2019abca" + "/matches/simple" , true);
  teamScoreRequest.setRequestHeader("X-TBA-Auth-Key", "lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5");
  teamScoreRequest.send();
  teamScoreRequest.onreadystatechange = function() {
    var teamScoreRequestObj = JSON.parse(this.responseText);
    var j;
    for (j = 0; j < teamScoreRequestObj.length; j++) {
      for(b = 0,) {}
    blueKeyArray = teamScoreRequestObj[a].alliances.blue.team_keys;
  }
  }

  }

}
