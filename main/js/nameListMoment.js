var teamArray; //Array with all the teams in the event
var teamNumArray; //Array with all the team numbers (DEPRACATED)
var tKeyArray; //Array with all the team keys

var currentTeam; //The current team being sent to get a score
var currentEvent; //The current event being processed

var index; //The current index in the array that is being handled

var teamTotal; //The total score of a team at an event, gets reset at the same time as teamAvg
var teamAvg; //The Avg of a team, gets reset every time a new team is sent to getTeamScores

var teamScoreRequestObj; //The parsed JSON file of getTeamScores
var keyk; //A Variable that cycles from 0-2 to cycle througha and check which team contains the key of the target team

var teamAllianceArray= []; //A variable that saves what alliance a team is on
var blueKeyArray = []; //Array with all the blue team keys

//Reset stuff
function reset() {
    index = 0;
}

//Get the new Team Key to work with
function getKeys() {
    currentTeam = tKeyArray[index];
    $('.table').hide();
    getTeamScores(currentTeam, currentEvent);
}
//Get the team scores
function getTeamScores (tKey, eKey) {
    //Open the Request
    var teamScoreRequest = new XMLHttpRequest();
    teamScoreRequest.open("GET", "https://www.thebluealliance.com/api/v3/team/" + tKey + "/event/" + eKey + "/matches" , true);
    teamScoreRequest.setRequestHeader("X-TBA-Auth-Key", "lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5");
    teamScoreRequest.send();
    //Reset the Team Totals and Averages
    teamTotal = 0;
    teamAvg = 0;

    teamScoreRequest.onreadystatechange = function() {
        teamScoreRequestObj = JSON.parse(this.responseText);
        teamAlliance = "";
        for(matchNum = 0; matchNum < teamScoreRequestObj.length; matchNum++) {
            blueKeyArray = teamScoreRequestObj[matchNum].alliances.blue.team_keys;
            for(keyk = 0; keyk < 2; keyk++) {
                if(tKey == blueKeyArray[keyk]) {
                    teamAllianceArray.push("blue");

                }
            }
            //FIX LINE UNDERNEATH!!!!
            if(teamAlliance == "blue") {

            } else {
                teamAllianceArray.push("red");
            }
          }
    }
}



var urlKey;
var urlName;
function checkParams(){
  var url = new URL(window.location.href);
  var listID = url.searchParams.get('listID');

  if(listID != null){
    $('.loading').fadeIn(600);
    // url.searchParams.get('eventName');
    urlKey = eKeyArray.indexOf(listID);
    urlName = eNameArray[urlKey];
    document.getElementById('event-name').innerHTML = urlName;

    makeList(listID);
  }
}



var eventk;
var eventkey;

function makeList(x){
  currentEvent = x;
  $('ul').empty()
  teamArray = [];
  teamNumArray = [];
  tKeyArray = [];
  eventKey = x;
  var teamRequest = new XMLHttpRequest();
  teamRequest.open("GET", "https://www.thebluealliance.com/api/v3/event/" + x + "/teams" , true);
  teamRequest.setRequestHeader("X-TBA-Auth-Key", "lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5");
  teamRequest.send();
  teamRequest.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200){

          var teamRequestObj = JSON.parse(this.responseText);
          var a;

          for (a = 0; a < teamRequestObj.length; a++) {
            teamArray.push(teamRequestObj[a].nickname);
            tKeyArray.push(teamRequestObj[a].key);
            teamNumArray.push(teamRequestObj[a].team_number);
        }
        reset();
        getKeys();

      }
    }

}

function waitTillRun(){
  setTimeout(function(){
    checkParams();
  }, 1000)
}

$(document).ready(waitTillRun);
