var keyRequest = new XMLHttpRequest();
var ekeyRequest = new XMLHttpRequest();


keyRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200){

        var keyArray = [];
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

        var ekeyArray = [];
        var ekeyRequestObj = JSON.parse(this.responseText);
        var b;


        for (b = 0; b < ekeyRequestObj.length; b++) {
        console.log(ekeyRequestObj[b].key);
        ekeyArray.push(ekeyRequestObj[b].key);
      }
      console.log(ekeyArray);
    }
}

keyRequest.open("GET", "https://www.thebluealliance.com/api/v3/teams/1", true);
keyRequest.setRequestHeader("X-TBA-Auth-Key", "lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5");
keyRequest.send();
ekeyRequest.open("GET", "https://www.thebluealliance.com/api/v3/teams/1", true);
ekeyRequest.setRequestHeader("X-TBA-Auth-Key", "lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5");
ekeyRequest.send();
