// Declaring server requests
var keyRequest = new XMLHttpRequest();
let enameRequest = new XMLHttpRequest();

//Declaring global varibales
var keyArray = [];
var ekeyArray = [];
var enameArray = [];
var done = false;
var p;
var c = 0;
var b;
var enameRequestObj

//This function gets the keys of the first 500 teams (Will make it get all keys later)
keyRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200){

        var keyRequestObj = JSON.parse(this.responseText);
        var a;

        for (a = 0; a < keyRequestObj.length; a++) {

        keyArray.push(keyRequestObj[a].key);
      }

    }
}

//This function makes 2 arrays, one with event keys and one with event names.

enameRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        var enameRequestObj = JSON.parse(this.responseText);
        var c;

        for(c = 0; c < enameRequestObj.length; c++) {

        enameArray.push(enameRequestObj[c].name);
        ekeyArray.push(enameRequestObj[c].key);
      }
      console.log(enameArray);
      console.log(ekeyArray);
    }
}

//API stuff
enameRequest.open('GET', "https://www.thebluealliance.com/api/v3/events/2020", true);
enameRequest.setRequestHeader("X-TBA-Auth-Key", "lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5");
enameRequest.send();

keyRequest.open("GET", "https://www.thebluealliance.com/api/v3/teams/1" , true);
keyRequest.setRequestHeader("X-TBA-Auth-Key", "lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5");
keyRequest.send();
