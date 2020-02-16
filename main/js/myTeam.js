
function createCookie(key, value) {
    let cookie = key + "=" + escape(value) + ";";
    document.cookie = cookie;
    console.log(cookie);
    console.log("Creating new cookie with key: " + key + " value: " + value);
}
createCookie("sport", "basketball");
createCookie("icecream", "vanilla");