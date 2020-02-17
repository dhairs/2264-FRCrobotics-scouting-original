
function test() {
  cookieNumber = 2264;
  var eParticapatedRequest = new XMLHttpRequest();
  eParticapatedRequest.open("GET", "​https://www.thebluealliance.com/api/v3/team/frc" + cookieNumber + "/events/simple");
  eParticapatedRequest.setRequestHeader("X-TBA-Auth-Key", "lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5");
  eParticapatedRequest.send();

  eParticapatedRequest.onreadystatechange = function() {

      eParticapatedRequestObj = JSON.parse(eParticapatedRequest.responseText);
      var f;

      for(f = 0; f < eParticapatedRequest.length; f++) {

        var awardRequest = new XMLHttpRequest();

        var currEKey = eParticapatedRequestObj[f].key;

        awardRequest.open("GET", "​https://www.thebluealliance.com/api/v3/team​/frc"+ cookieNumber + "​/event​/" + currEKey +  "​/awards");
        awardRequest.setRequestHeader("X-TBA-Auth-Key", "lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5");
        awardRequest.send();

        awardRequest.onreadystatechange = function() {
            awardRequestObj = JSON.parse(this.responseText);
            var d;
            for(d = 0; d<awardRequestObj.length; d++) {
              console.log(awardRequestObj[d].name);
            }

          }
        }

      }
}
