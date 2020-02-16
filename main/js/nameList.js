// Variable Declaration
var eventKey;
var name;
var u = 0;
var teamArray = [];
var frcID;
var url = new URL(window.location.href);
var tKeyArray = [];
var sortedTeamArray = [];
// Takes TeamArray items and puts them onto the site
function teamList() {
    u = 0;

    ul = document.createElement('ul');
    
    // For Each item in the Team Array, make an table row
    teamArray.forEach(function () {
        $('.table').hide();
        $('.loading').fadeOut(600);
        $('.table').fadeIn(1000);
        // Add the tr to the table
        var table = document.getElementById('table-items')

        // Get the specific team name from the array
        name = teamArray[u];
        key = tKeyArray[u];

        // Make an li
        let tr = document.createElement('tr');
        let teamNamesTableVals = document.createElement('td');
        let teamScores = document.createElement('td');

        tr.classList.toggle('inline-centering');

        table.appendChild(tr);
        tr.appendChild(teamNamesTableVals);
        tr.appendChild(teamScores);
        teamNamesTableVals.innerHTML = name;
        teamScores.innerHTML = getTeamScores(key, "2020abca");
        u++;
  });
  teamArray = [];
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

function makeList(x){
  $('ul').empty()
  teamArray = [];
  teamNumArray = [];
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
        teamList();

      }
    }

}


// // var u;
// function nameList(){
//   if(nameArray >= 4239){
//     console.log(nameArray);
    // nameArray.forEach(function (name) {
    //   ul = document.createElement('ul');
    //   document.getElementById('myItemList').appendChild(ul);
    //   for(u = 0; u < nameArray.length; u++){
    //     let li = document.createElement('li');
    //     ul.classList.add('listStuff');
    //     li.classList.toggle('inline-centering');
    //     ul.appendChild(li);
    //
    //     li.innerHTML += name;
    //     console.log(nameArray);
    //   }
    // });
//
//   }
//
// //   // console.log(nameArray + "THIS IS EPIC");
// //
// //   // Make a container element for the list
// //    listContainer = document.createElement('div'),
// //    // Make the list
// //    listElement = document.createElement('ul'),
// //    // Set up a loop that goes through the items in listItems one at a time
// //    numberOfListItems = nameArray.length,
// //    listItem,
// //    i;
// //
// //    // Add it to the page
// //    document.getElementsByTagName('body')[0].appendChild(listContainer);
// //    listContainer.appendChild(listElement);
// //
// //    for (i = 0; i < numberOfListItems; ++i) {
// //        // create an item for each one
// //        listItem = document.createElement('li');
// //
// //        // Add the item text
// //        listItem.innerHTML = listData[i];
// //
// //        // Add listItem to the listElement
// //        listElement.appendChild(listItem);
// //    }
// // }
// // }

function waitTillRun(){
  setTimeout(function(){
    checkParams();
  }, 1000)
}

$(document).ready(waitTillRun);