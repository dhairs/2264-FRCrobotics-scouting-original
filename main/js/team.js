
var b;
var teamERequestObj = [];
var teamERequest;
var eKeysRequestObj;
var eventScoreArray;
var teamTotal = 0;
var teamAvg = 0;
var teamAllianceArray = [];
var autoAvg = 0;
var autoTotal = 0;
var autoArray = [];
var tOPAvg = 0;
var tOPTotal = 0;
var tOPArray = [];
var eventScoreArray = [];
var p;

function getMyTeamInfoVar(teamID){
setTimeout(function() {
//  teamID = "2264";


  var infoRequest = new XMLHttpRequest();

  infoRequest.open("GET", "https://www.thebluealliance.com/api/v3/team/frc" + teamID, true);
  infoRequest.setRequestHeader("X-TBA-Auth-Key", "lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5");
  infoRequest.send();
  console.log("");

  infoRequest.onreadystatechange = function() {

      if (this.readyState == 4 && this.status == 200){

          infoRequestObj = JSON.parse(this.responseText);
          if(infoRequestObj != undefined){
          var a;
          var titleNameHeading = document.getElementById('nameHeading');
          var teamLocation = document.getElementById('location');
          var teamCountry = document.getElementById('teamCountry');
          var teamNameTitle = document.getElementById('myTeamTitle');
//          var websiteButton = document.getElementById('button');
//          websiteButton.textContent = "Visit team Website";
          teamNameTitle.innerHTML = "Team: " + infoRequestObj.nickname;
          titleNameHeading.innerHTML = infoRequestObj.nickname;
          teamLocation.innerHTML = infoRequestObj.city + ', ' + infoRequestObj.state_prov;
          teamCountry.innerHTML = infoRequestObj.country;
          console.log(infoRequestObj);
          $('.websiteButton').fadeIn(3000);
          $('.nameHeading').fadeIn(1500);
          $('.location').fadeIn(1500);
          $('.teamCountry').fadeIn(1600);
          var teamERequest = new XMLHttpRequest();
          teamERequest.open("GET", "https://www.thebluealliance.com/api/v3/team/frc" + teamID + "/events", true);
          teamERequest.setRequestHeader("X-TBA-Auth-Key", "lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5");
          teamERequest.send();
          teamERequest.onreadystatechange = function() {
              teamERequestObj = JSON.parse(this.responseText);
              for(b = 0; b < teamERequestObj.length; b++){
                // eKeysRequestObj = ;
                console.log(teamERequestObj[b].key);
                getTeamScorez(teamID, teamERequestObj[b].key);

          }
          }
}


      }
    }


}, 100);

}

var infoRequest;
var yearsRequest;
var infoRequestObj;
var cookieNumber;
var date = new Date();
var eParticapatedRequestObj;
var awardRequestObj;
var yearsRequestObj;
var socialMediaRequest;
var socialMediaRequestObj;
var z;
var socialMediaRequestTypeObj;
var facebookIdentifier;
var instagramIdentifier;
var githubIdentifier;
var twitterIdentifier;
var youtubeIdentifier;

var teamTotal;
var teamAvg;
var teamAllianceArray;
var autoAvg;
var autoArray;
var tOPAvg;
var tOPTotal;
var tOPArray;


date.setTime(date.getTime() + (1000 * 60 * 60 * 24 * 30));
//date.setTime(date.getTime() + (2592000000));
function createCookie(value) {
    var cookie = "teamID=" + value + ";expires=" + date.toGMTString() + ";";
    document.cookie = cookie;
    console.log(cookie);
    console.log("Creating new cookie with key: teamID value: " + value);
    window.location.reload();
}

function checkCookie(){
    let key = "teamID=";
            let cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                let cookie = cookies[i];
                console.log(cookie);
                cookieNumber = cookie.toString().slice(7);
                while (cookie.charAt(0) === ' ') {
                    cookie = cookie.substring(1, cookie.length);
                }
                if (cookie.indexOf(key) === 0) {
                    return cookie.substring(key.length, cookie.length);
                }
            }


}

function workCookie(){

   setTimeout(function(){
    if(cookieNumber.length >= 1){
        $('.teamNumForm').hide();
        document.getElementById('numHeading').innerHTML = 'Your Team Number: <a href=my-team.html>' + cookieNumber + "</a> (<a onclick='deleteCookie()' href=''>change/remove team number</a>)";
        $('.showNum').show();
    } else {
        $('.teamNumForm').show();
        $('.showNum').hide();
    }
  }, 1000)
}



function getTeamScorez(tKey, eKey) {

    //Open the Request
    // console.log("running");
    var teamScoreRequest = new XMLHttpRequest();
    teamScoreRequest.open("GET", "https://www.thebluealliance.com/api/v3/team/frc" + tKey + "/event/" + eKey + "/matches" , true);
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

          var tOPAvg = (tOPTotal/tOPArray.length).toFixed(2);

          console.log(avg);
          console.log(autoAvg);
          console.log(tOPAvg);

          // var tr = document.createElement('tr');
          // var teamNames = document.createElement('td');
          // var teamScores = document.createElement('td');
          // var autoScores = document.createElement('td');
          // var tOPScores = document.createElement('td');

          // var bigbig = ('getMyTeamInfoVar(\"' + teamNumArray[p] + '\")');




          // tr.classList.toggle('inline-centering');
          // teamNames.setAttribute("onClick", bigbig);
          // var table = document.getElementById('table-items');

          // table.appendChild(tr);
          // tr.appendChild(teamNames);
          // tr.appendChild(teamScores);
          // tr.appendChild(autoScores);
          // tr.appendChild(tOPScores);
          // console.log("P is" + p);
          // teamNames.innerHTML = teamArray[p] + " - " + teamNumArray[p];
          // teamScores.innerHTML = avg;
          // autoScores.innerHTML = autoAvg;
          // tOPScores.innerHTML = tOPAvg;


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

          p++;
    }

}


// function getMyTeamInfo(){
// setTimeout(function() {
// //  cookieNumber = "2264";
//   var infoRequest = new XMLHttpRequest();
//
//   infoRequest.open("GET", "https://www.thebluealliance.com/api/v3/team/frc" + cookieNumber, true);
//   infoRequest.setRequestHeader("X-TBA-Auth-Key", "lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5");
//   infoRequest.send();
//
//
//   infoRequest.onreadystatechange = function() {
//
//       if (this.readyState == 4 && this.status == 200){
//
//           infoRequestObj = JSON.parse(this.responseText);
//           if(infoRequestObj != undefined){
//           var a;
//           var titleNameHeading = document.getElementById('nameHeading');
//           var teamLocation = document.getElementById('location');
//           var teamCountry = document.getElementById('teamCountry');
//           var teamNameTitle = document.getElementById('myTeamTitle');
// //          var websiteButton = document.getElementById('button');
// //          websiteButton.textContent = "Visit team Website";
//           teamNameTitle.innerHTML = "Team: " + infoRequestObj.nickname;
//           titleNameHeading.innerHTML = infoRequestObj.nickname;
//           teamLocation.innerHTML = infoRequestObj.city + ', ' + infoRequestObj.state_prov;
//           teamCountry.innerHTML = infoRequestObj.country;
//           console.log(infoRequestObj);
//           $('.websiteButton').fadeIn(3000);
//           $('.nameHeading').fadeIn(1500);
//           $('.location').fadeIn(1500);
//           $('.teamCountry').fadeIn(1600);
//           }
//
//
//
//       }
//     }
//
//
//
//
//
//
// }, 100);
//
// }



function yearsFunc(){
setTimeout(function() {
    yearsRequest = new XMLHttpRequest();
    yearsRequest.open("GET", "https://www.thebluealliance.com/api/v3/team/frc" + cookieNumber + "/years_participated", true);
  yearsRequest.setRequestHeader("X-TBA-Auth-Key", "lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5");
  yearsRequest.send();

    yearsRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200){
        yearsRequestObj = JSON.parse(this.responseText);

        var yearsParticipated = document.getElementById('yearsParticipated');
        var firstYear = yearsRequestObj[0];
        var yearLength = yearsRequestObj.length;
        var lastYear = yearsRequestObj[yearLength-1];
        yearsParticipated.innerHTML = "Competing from " + firstYear + ' - ' + lastYear;
        $('.yearsParticipated').fadeIn(2000);
        console.log(yearsRequestObj);

    }
}

}, 100);

}


function retrieveSocialMedia(){
    setTimeout(function (){

    socialMediaRequest = new XMLHttpRequest();
    socialMediaRequest.open("GET", "https://www.thebluealliance.com/api/v3/team/frc" + teamID + "/social_media", true);
    socialMediaRequest.setRequestHeader("X-TBA-Auth-Key", "lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5");
    socialMediaRequest.send();

    socialMediaRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200){
        socialMediaRequestObj = JSON.parse(this.responseText);
            for(z = 0; z < socialMediaRequestObj.length; z++){
                console.log(socialMediaRequestObj[z].foreign_key);
                var type = socialMediaRequestObj[z].type;
                var profile = document.getElementById(type);

                if(type == 'twitter-profile'){
                    $('.twitter').fadeIn(2000);
                    twitterIdentifier = socialMediaRequestObj[z].foreign_key;
                } else if (type == 'facebook-profile'){
                    $('.facebook').fadeIn(2000);
                    facebookIdentifier = socialMediaRequestObj[z].foreign_key;
                } else if(type == 'github-profile'){
                    $('.github').fadeIn(2000);
                    githubIdentifier = socialMediaRequestObj[z].foreign_key;
                }
//                profile.innerHTML = socialMediaRequestObj[z].foreign_key;
            }
    }
    return(socialMediaRequestObj);
}
    }, 1000)
}

function redirToWebsite(){
    console.log('this is the redirect code')
    window.open(infoRequestObj.website, 'blank');
}

function facebookRedirect(){
    window.open('https://facebook.com/' + facebookIdentifier);
}

function githubRedirect(){
    window.open('https://github.com/' + githubIdentifier);
}

function twitterRedirect(){
    window.open('https://twitter.com/' + twitterIdentifier);
}

function checkParams2(){
  var url = new URL(window.location.href);
  var listID = url.searchParams.get('listID');

  if(listID != null){
    $('.loading').fadeIn(600);
    // url.searchParams.get('eventName');
    getMyTeamInfoVar(listID);
}
}



$(document).ready(checkCookie());
$(document).ready(workCookie());
$(document).ready(checkParams2());
$(document).ready(yearsFunc());
$(document).ready(retrieveSocialMedia());
