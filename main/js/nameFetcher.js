
var nameRequest = new XMLHttpRequest();

var serverStatus;


nameRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200){
        var nameArray = [];
        var nameRequestObj = JSON.parse(this.responseText);
        var i;
        for (i = 0; i < nameRequestObj.length; i++) {
        console.log(nameRequestObj[i].nickname);
        nameArray.push(nameRequestObj[i].nickname);
        console.log(nameArray);
      }


      // Make a container element for the list
    listContainer = document.createElement('div'),
    // Make the list
    listElement = document.createElement('ul'),
    // Set up a loop that goes through the items in listItems one at a time
    numberOfListItems = nameArray.length,
    listItem,
    e;

    // Add it to the page
    document.getElementsByTagName('body')[0].appendChild(listContainer);
    listContainer.appendChild(listElement);

    for (e = 0; e < numberOfListItems; ++e) {
        // create an item for each one
        listItem = document.createElement('li');

        // Add the item text
        listItem.innerHTML = nameArray[e];

        // Add listItem to the listElement
        listElement.appendChild();

    }
}
}

nameRequest.open("GET", "https://www.thebluealliance.com/api/v3/teams/1", true);
nameRequest.setRequestHeader("X-TBA-Auth-Key", "lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5");
nameRequest.send();
