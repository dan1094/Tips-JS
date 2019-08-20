function tryParseInt(val) {
    var ret;
    ret = parseInt(val);
    if (isNaN(ret)) {
        ret = 0;
    }
    return ret;
}

function tryParseFloat(val) {
    var ret;
    ret = parseFloat(val);
    if (isNaN(ret)) {
        ret = 0;
    }
    return ret;
}

function looksLikeMSDate(s) {
    return /^\/Date\(/.test(s);
}

var isoDateRegex = /^(\d\d\d\d)-(\d\d)-(\d\d)T(\d\d):(\d\d):(\d\d)(\.\d\d?\d?)?([\+-]\d\d:\d\d|Z)?$/;

function looksLikeIsoDate(s) {
    return isoDateRegex.test(s);
}

function parseIsoDate(s) {
    var m = isoDateRegex.exec(s);

    // Is this UTC, offset, or undefined? Treat undefined as UTC.
    if (m.length == 7 ||                // Just the y-m-dTh:m:s, no ms, no tz offset - assume UTC
        (m.length > 7 && (
            !m[7] ||                    // Array came back length 9 with undefined for 7 and 8
            m[7].charAt(0) != '.' ||    // ms portion, no tz offset, or no ms portion, Z
            !m[8] ||                    // ms portion, no tz offset
            m[8] == 'Z'))) {            // ms portion and Z
        // JavaScript's weirdo date handling expects just the months to be 0-based, as in 0-11, not 1-12 - the rest are as you expect in dates.
        var d = new Date(Date.UTC(m[1], m[2] - 1, m[3], m[4], m[5], m[6]));
    } else {
        // local
        var d = new Date(m[1], m[2] - 1, m[3], m[4], m[5], m[6]);
    }

    return d;
}

function parseIsoDate(s) {
    return new Date(s);
}

function hasTime(d) {
    return !!(d.getUTCHours() || d.getUTCMinutes() || d.getUTCSeconds());
}

function zeroFill(n) {
    if ((n + '').length == 1)
        return '0' + n;

    return n;
}

function formatDate(d) {
    if (hasTime(d)) {
        var s = (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();
        s += ' ' + d.getHours() + ':' + zeroFill(d.getMinutes()) + ':' + zeroFill(d.getSeconds());
    } else {
        var s = (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();
    }

    return s;
}

function parseDate(s) {
    var d;
    if (looksLikeMSDate(s))
        d = parseMSDate(s);
    else if (looksLikeIsoDate(s))
        d = parseIsoDate(s);
    else
        return null;

    return formatDate(d);
}