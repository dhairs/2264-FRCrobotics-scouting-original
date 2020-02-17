// Variable Declaration
// var eventKey;
// var name;
// var u = 0;
// var teamArray = [];
// var frcID;
// var url = new URL(window.location.href);
// var tKeyArray = [];
// var sortedTeamArray = [];
// var keyu;
// var keya;
// var score;
// var b;
// var blueKeyArray;
// var isTeam = "";
// var teamTotal = 0;
// var teamAvg;
// var currentTeamScore;
// var numOfMatches;
// var teamScoreRequestObj;
// var i;
// var scoreArray;
// var done = false;
//
// function reset() {
//   u = 0;
//   scoreArray = [];
//   done = false;
// }
//
//
//
//
//
// function getKeys() {
//   if(u < teamArray.length && done == false) {
//     $('.table').hide();
//
//     keyu = tKeyArray[u];
//     name = teamArray[u];
//     console.log(name);
//
//     getTeamScores(keyu, eventk);
//   } else {
//     console.log("uhoh");
//     putItems();
//   }
//
// }
// getKeys()
//
//
//
//
//
//
// function getTeamScores(tKey, eKey) {
//     // setTimeout(function(){
//   teamAvg = 0;
//   var teamScoreRequest = new XMLHttpRequest();
//   teamScoreRequest.open("GET", "https://www.thebluealliance.com/api/v3/team/" + tKey + "/event/" + eKey + "/matches" , true);
//   teamScoreRequest.setRequestHeader("X-TBA-Auth-Key", "lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5");
//   teamScoreRequest.send();
//   teamScoreRequest.onreadystatechange = function() {
//     teamTotal = 0;
//     teamScoreRequestObj = JSON.parse(this.responseText);
//     var j;
//     for (j = 0; j < teamScoreRequestObj.length; j++) {
//       blueKeyArray = teamScoreRequestObj[j].alliances.blue.team_keys;
//       for(b = 0; b < 2; b++) {
//           if(blueKeyArray[b] == tKey) {
//               isTeam = "blue";
//           } else {
//
//           }
//         }
//        if(isTeam == "blue") {
//             // console.log(teamScoreRequestObj[j].score_breakdown.blue);
//             teamTotal += teamScoreRequestObj[j].score_breakdown.blue.totalPoints;
// //            currentTeamScore = teamScoreRequestObj[j].alliances.blue.score;
// //            console.log(currentTeamScore);
// //            teamTotal += parseInt(currentTeamScore);
//         } else {
//             // console.log(teamScoreRequestObj[j].score_breakdown.red);
//             teamTotal += teamScoreRequestObj[j].score_breakdown.red.totalPoints;
// //            currentTeamScore = teamScoreRequestObj[j].alliances.red.score;
// //            console.log(currentTeamScore)
// //            teamTotal += parseInt(currentTeamScore);
//         }
//             isTeam = "";
//         }
//       numOfMatches = teamScoreRequestObj.length;
//       teamAvg = teamTotal/numOfMatches;
//       scoreArray.push(teamAvg);
//       console.log(teamAvg);
//       u++;
//       getKeys();
//
//   }
//   // teamAvg = teamTotal/numOfMatches;
//   // console.log(teamAvg);
// // }, 0)
//
// }
//
// function putItems() {
//
//   if(done == false ) {
//   done = true;
//   var table = document.getElementById('table-items')
//   setTimeout(function(){
//
//   for(i=0; i < scoreArray.length/2; i++) {
//   let tr = document.createElement('tr');
//   let teamNamesTableVals = document.createElement('td');
//   let teamScores = document.createElement('td');
//
//   tr.classList.toggle('inline-centering');
//
//   table.appendChild(tr);
//   tr.appendChild(teamNamesTableVals);
//   tr.appendChild(teamScores);
//
//   name = teamArray[i];
//   score = scoreArray[2*i];
//
//   teamNamesTableVals.innerHTML = name;
//   teamScores.innerHTML = score;
//
//   $('.loading').fadeOut(600);
//   $('.table').fadeIn(1000);
// }
// }, 3000); } else {
//
// }
// }
//
//
//
//
//
//
//
//
//
//
//
// var urlKey;
// var urlName;
// function checkParams(){
//   var url = new URL(window.location.href);
//   var listID = url.searchParams.get('listID');
//
//   if(listID != null){
//     $('.loading').fadeIn(600);
//     // url.searchParams.get('eventName');
//     urlKey = eKeyArray.indexOf(listID);
//     urlName = eNameArray[urlKey];
//     document.getElementById('event-name').innerHTML = urlName;
//
//     makeList(listID);
//   }
// }
//
//
//
// var eventk;
//
//
//
//
// function makeList(x){
//   eventk = x;
//   $('ul').empty()
//   teamArray = [];
//   teamNumArray = [];
//   tKeyArray = [];
//   eventKey = x;
//   var teamRequest = new XMLHttpRequest();
//   teamRequest.open("GET", "https://www.thebluealliance.com/api/v3/event/" + x + "/teams" , true);
//   teamRequest.setRequestHeader("X-TBA-Auth-Key", "lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5");
//   teamRequest.send();
//   teamRequest.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200){
//
//           var teamRequestObj = JSON.parse(this.responseText);
//           var a;
//
//           for (a = 0; a < teamRequestObj.length; a++) {
//             teamArray.push(teamRequestObj[a].nickname);
//             tKeyArray.push(teamRequestObj[a].key);
//             teamNumArray.push(teamRequestObj[a].team_number);
//         }
//         reset();
//         getKeys();
//
//       }
//     }
//
// }
//
// function waitTillRun(){
//   setTimeout(function(){
//     checkParams();
//   }, 1000)
// }
//
// $(document).ready(waitTillRun);
