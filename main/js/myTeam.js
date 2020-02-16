
function createCookie(value) {
    let cookie = "teamID" + "=" + value + ";";
    document.cookie = cookie;
    console.log(cookie);
    console.log("Creating new cookie with key: teamID value: " + value);
}