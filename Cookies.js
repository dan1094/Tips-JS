function setCookie() {
    var d = new Date();
    d.setTime(d.getTime() + (30 * 60 * 1000));//30 minutos
    var expires = "expires=" + d.toGMTString();
    document.cookie = "IsActivePobox=true; " + expires + " ;path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("IsActivePobox");
    if (user == "true") {
        return true;
        //Use local Storage
    } else {
        exit();
        return false;
    }
}