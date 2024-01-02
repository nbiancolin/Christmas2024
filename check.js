// check.js

// Function to check if a cookie has a specific number value
function checkCookie(expectedNumber) {
    // Get the cookie value 
    var cookieValue = getCookie('progress');

    // Convert the cookie value to a number
    var cookieNumber = parseFloat(cookieValue);

    // Check if the cookie value is the expected number
    if (!isNaN(cookieNumber) && cookieNumber === expectedNumber) {
        // Replace the content with a message
        document.body.innerHTML = "<p>You have not unlocked this yet! Nice try though :)</p>";
    }
}

// Function to get the value of a cookie by name
function getCookie(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');

    for (var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i].trim();
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }

    return "";
}

// Leave the onload event handler empty
window.onload = function() {};
