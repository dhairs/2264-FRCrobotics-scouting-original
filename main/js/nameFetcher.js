
var nameRequest = new XMLHttpRequest();

var serverStatus;

nameRequest.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200){

        var nameArray = [];
        var nameRequestObj = JSON.parse(this.responseText);
        var i;

          for (i = 0; i < nameRequestObj.length; i++) {

          nameArray.push(nameRequestObj[i].nickname);


        }

    }

    ul = document.createElement('ul');

    document.getElementById('myItemList').appendChild(ul);

    nameArray.forEach(function (name) {
        let li = document.createElement('li');
        ul.classList.add('listStuff');
        li.classList.toggle('inline-centering');
        ul.appendChild(li);

        li.innerHTML += name;
    });
}

nameRequest.open("GET", "https://www.thebluealliance.com/api/v3/teams/1", true);
nameRequest.setRequestHeader("X-TBA-Auth-Key", "lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5");
nameRequest.send();
