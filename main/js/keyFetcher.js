var keyRequest = new XMLHttpRequest();
var ekeyRequest = new XMLHttpRequest();

var keyArray = [];
var ekeyArray = [];
var page;
page = 1;


keyRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200){


        var keyRequestObj = JSON.parse(this.responseText);
        var a;


        for (a = 0; a < keyRequestObj.length; a++) {
        console.log(keyRequestObj[a].key);
        keyArray.push(keyRequestObj[a].key);
      }
      console.log(keyArray);
    }
}

ekeyRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200){


        var ekeyRequestObj = JSON.parse(this.responseText);
        var b;

        for(b = 0; b < ekeyRequestObj.length; b++) {
        // console.log(ekeyRequestObj[b]);
        ekeyArray.push(ekeyRequestObj[b]);
      }
      // console.log(ekeyArray);
    }
}

keyRequest.open("GET", "https://www.thebluealliance.com/api/v3/teams/" + page , true);
keyRequest.setRequestHeader("X-TBA-Auth-Key", "lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5");
keyRequest.send();




ekeyRequest.open("GET", "https://www.thebluealliance.com/api/v3/events/2019/keys", true);
ekeyRequest.setRequestHeader("X-TBA-Auth-Key", "lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5");
ekeyRequest.send();
