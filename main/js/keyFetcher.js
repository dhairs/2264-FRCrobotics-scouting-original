var eteamRequest = new XMLHttpRequest();
let eNameRequest = new XMLHttpRequest();


var eKeyArray = [];
var eNameArray = [];
var done = false;
var p;
var c = 0;
var eNameRequestObj
var currentEventKey;
var currentEventNum;

$("#prospects_form").submit(function(e) {
    e.preventDefault();
});

// eNameRequest.onreadystatechange = function() {
//
//
//
// }





var b;


eNameRequest.onreadystatechange = function() {
  var form = document.getElementById('event-chosen');
    if (this.readyState == 4 && this.status == 200) {

        var eNameRequestObj = JSON.parse(this.responseText);
        var c;

        for(c = 0; c < eNameRequestObj.length; c++) {

        eNameArray.push(eNameRequestObj[c].name);
        eKeyArray.push(eNameRequestObj[c].key);

        var option = document.createElement('option');
        option.textContent = eNameRequestObj[c].name;
        option.value = eNameRequestObj[c].name;
        form.appendChild(option);


      }
      console.log(eNameArray);
    }
}

function sendEvent(){
  var e = document.getElementById("event-chosen");
  var strUser = e.options[e.selectedIndex].text;
  console.log(strUser);
  var currentEventNum = eNameArray.indexOf(strUser);
  var currentEventKey = eKeyArray[currentEventNum];
  console.log(currentEventKey);
  makeRequest(currentEventKey);
}

function nameList(){

    console.log(nameArray);
    nameArray.forEach(function (name) {
      // form = document.getElementById('event-chosen');
      //
      //   let option = document.createElement('option');
      //   form.appendChild(option);
      //
      //   option.innerHTML += name;
      //   console.log(nameArray);


  })
}

function makeRequest(x){
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





eNameRequest.open('GET', "https://www.thebluealliance.com/api/v3/events/2020", true);
eNameRequest.setRequestHeader("X-TBA-Auth-Key", "lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5");
eNameRequest.send();




eteamRequest.open("GET", "https://www.thebluealliance.com/api/v3/events/2020/keys", true);
eteamRequest.setRequestHeader("X-TBA-Auth-Key", "lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5");
eteamRequest.send();
