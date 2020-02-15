// Declaring requests
var eteamRequest = new XMLHttpRequest();
let eNameRequest = new XMLHttpRequest();

// Global Variables
var eKeyArray = [];
var eNameArray = [];
var na = [];
var p;
var c;
var eNameRequestObj
var currentEventKey;
var currentEventNum;
var b;


// To work on IOS
$("#prospects_form").submit(function(e) {
    e.preventDefault();
});


// Gets Event Names, adds them to the HTML form

eNameRequest.onreadystatechange = function() {
    // Gets the form from HTML
    var form = document.getElementById('event-chosen');

        if (this.readyState == 4 && this.status == 200) {
              // Parses the JSON file
              var eNameRequestObj = JSON.parse(this.responseText);

              // Adds all the eventKeys to the eKeyArray and all the eventNames to eNameArray
              for(c = 0; c < eNameRequestObj.length; c++) {
              eNameArray.push(eNameRequestObj[c].name);
              eKeyArray.push(eNameRequestObj[c].key);
          }

          // Takes all the elements from the array and adds them to the form (drop-down)
          for(c = 0; c < eNameRequestObj.length; c++) {
              var option = document.createElement('option');
              option.textContent = eNameArray[c];
              option.value = eNameArray[c];
              form.appendChild(option);
          }

      }
}

// Gets the event the user chose and forwards it to another function
function sendEvent(){
   
    // Gets the form from HTML, saves input
    var e = document.getElementById("event-chosen");
    var strUser = e.options[e.selectedIndex].text;

    // Finds the associated Event Key with the Event Num
    var currentEventNum = eNameArray.indexOf(strUser);
    var currentEventKey = eKeyArray[currentEventNum];

    // Makes the request for teams at the event, forwarding the the eKey
    makeRequest(currentEventKey);

}


// // // // // // //
//   CODE DUMPS   //
// // // // // // //

function nameList(){
    // console.log(nameArray);
    // nameArray.forEach(function (name) {
    // form = document.getElementById('event-chosen');
    //
    //   let option = document.createElement('option');
    //   form.appendChild(option);
    //
    //   option.innerHTML += name;
    //   console.log(nameArray);
}


function makeRequest(x){

  var url = new URL(window.location.href);
  let params = new URLSearchParams(url.search.slice(1));
  params.set('listID', x);
  makeList(x);
  // var teamRequest = new XMLHttpRequest();
  // teamRequest.open("GET", "https://www.thebluealliance.com/api/v3/event/" + x , true);
  // teamRequest.setRequestHeader("X-TBA-Auth-Key", "lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5");
  // teamRequest.send();
  // teamRequest.onreadystatechange = function() {
  //     if (this.readyState == 4 && this.status == 200){
  //
  //
  //         var teamRequestObj = JSON.parse(this.responseText);
  //         var a;
  //
  //         for (a = 0; a < teamRequestObj.length; a++) {
  //             teamArray.push(teamRequestObj[a].first_event_id)
  //       }
  //
  //     console.log(teamArray);
  //     }
  }





// XML-HTTP-REQUESTS

eNameRequest.open('GET', "https://www.thebluealliance.com/api/v3/events/2020", true);
eNameRequest.setRequestHeader("X-TBA-Auth-Key", "lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5");
eNameRequest.send();

eteamRequest.open("GET", "https://www.thebluealliance.com/api/v3/events/2020/keys", true);
eteamRequest.setRequestHeader("X-TBA-Auth-Key", "lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5");
eteamRequest.send();
