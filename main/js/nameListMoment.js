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
var autoScore;
var TOPScore;
var teamAllianceArray= []; //A variable that saves what alliance a team is on
var blueKeyArray = []; //Array with all the blue team keys
var eventScoreArray = []; //Array with all scores of each team from ana event
var avgScoreArray = []; //Array of averagre scores
var autoArray = [];
var tOPArray;
var avgautoArray = [];
var avgtOPArray = [];
//Reset stuff
var i;
var u;

var avg; //Average value for a given team
var autoTotal;
var tOPTotal
var autoAvg;
var tOPAvg
var table = document.getElementById('table-items');
var p;

function reset() {
    index = 0;
    eventScoreArray = [];
    avgScoreArray = [];
    avgautoArray = [];
    autoArray = [];
    avgtOPArray = [];
    tOPArray = [];
    p = 0;
}

//Get the new Team Key to work with
function getKeys() {
  // $('.table').hide();
  // for(index = 0; index < teamArray.length; index++) {
  if(index < teamArray.length) {
      currentTeam = tKeyArray[index];
      // console.log(index);
      // console.log(currentTeam);
      // console.log(currentEvent);
      getTeamScores(currentTeam, currentEvent);
      index++;
    } else {
      // console.log("done");
      // console.log(avgScoreArray);
      putItems();
    }
// }
}
//Get the team scores
function getTeamScores (tKey, eKey) {

    //Open the Request
    // console.log("running");
    var teamScoreRequest = new XMLHttpRequest();
    teamScoreRequest.open("GET", "https://www.thebluealliance.com/api/v3/team/" + tKey + "/event/" + eKey + "/matches" , true);
    teamScoreRequest.setRequestHeader("X-TBA-Auth-Key", "lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5");
    teamScoreRequest.send();
    //Reset the Team Totals and Averages
    teamTotal = 0;
    teamAvg = 0;
    teamAllianceArray = [];
    autoAvg = 0;
    autoTotal = 0;
    autoArray = [];
    tOPAvg = 0;
    tOPTotal = 0;
    tOPArray = [];

    teamScoreRequest.onload = function() {
        teamScoreRequestObj = JSON.parse(this.responseText);
        // console.log(teamScoreRequestObj);
        teamAlliance = "";
        for(matchNum = 0; matchNum < teamScoreRequestObj.length; matchNum++) {
            blueKeyArray = teamScoreRequestObj[matchNum].alliances.blue.team_keys;
            for(keyk = 0; keyk < 2; keyk++) {
                if(tKey == blueKeyArray[keyk]) {
                    teamAllianceArray.push("blue");
                    eventScoreArray.push(teamScoreRequestObj[matchNum].alliances.blue.score);
                    autoArray.push(teamScoreRequestObj[matchNum].score_breakdown.blue.autoPoints);
                    tOPArray.push(teamScoreRequestObj[matchNum].score_breakdown.blue.teleopPoints);
                }
            }
            //FIX LINE UNDERNEATH!!!!
            if(teamAlliance == "blue") {

            } else {
                teamAllianceArray.push("red");
                eventScoreArray.push(teamScoreRequestObj[matchNum].alliances.red.score);
                autoArray.push(teamScoreRequestObj[matchNum].score_breakdown.red.autoPoints);
                tOPArray.push(teamScoreRequestObj[matchNum].score_breakdown.red.teleopPoints);
            }

          }

          for(var i = 0; i < eventScoreArray.length; i++ ){
              teamTotal += parseInt(eventScoreArray[i], 10 ); //don't forget to add the base
          }
          var avg = (teamTotal/eventScoreArray.length).toFixed(2);

          for(var u = 0; u < autoArray.length; u++ ){
              autoTotal += parseInt(autoArray[u], 10 ); //don't forget to add the base
          }

          var autoAvg = (autoTotal/autoArray.length).toFixed(2);

          for(var u = 0; u < tOPArray.length; u++ ){
              tOPTotal += parseInt(tOPArray[u], 10 ); //don't forget to add the base
          }

          var tOPAvg = tOPTotal/tOPArray.length;

          var tr = document.createElement('tr');
          var teamNames = document.createElement('td');
          var teamScores = document.createElement('td');
          var autoScores = document.createElement('td');
          var tOPScores = document.createElement('td');

          tr.classList.toggle('inline-centering');
          var table = document.getElementById('table-items');

          table.appendChild(tr);
          tr.appendChild(teamNames);
          tr.appendChild(teamScores);
          tr.appendChild(autoScores);
          tr.appendChild(tOPScores);
          // console.log("P is" + p);
          teamNames.innerHTML = teamArray[p];
          teamScores.innerHTML = avg;
          autoScores.innerHTML = autoAvg;
          tOPScores.innerHTML = tOPAvg;

          // console.log(autoArray);
          // console.log(eventScoreArray);
          // console.log(avg);
          // console.log(autoAvg);
          //
          // avgScoreArray.push(avg);
          // avgautoArray.push(autoAvg);

          eventScoreArray = [];
          teamAllianceArray = [];
          autoArray = [];
          getKeys();
          p++;
    }

}

var table;
var name;
var score;

function putItems() {
  // console.log("Aye aye capn");
    // table = document.getElementById('table-items');
    // for(p=0; p < avgScoreArray.length; p++) {
      // console.log("spicy")
        // var tr = document.createElement('tr');
        // var teamNames = document.createElement('td');
        // var teamScores = document.createElement('td');
        // var autoScores = document.createElement('td');

        // tr.classList.toggle('inline-centering');
        //
        // table.appendChild(tr);
        // tr.appendChild(teamNames);
        // tr.appendChild(teamScores);
        // tr.appendChild(autoScores);

        // name = teamArray[p];
        // score = avgScoreArray[p];
        // autoScore = avgautoArray[p];


        // teamNames.innerHTML = name;
        // teamScores.innerHTML = score;
        // autoScores.innerHTML = autoScore;
        $('.loading').fadeOut(600);
        $('.sortable').fadeIn(1000);
  // }



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
