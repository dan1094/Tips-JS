function AjaxBasicRequestGet(strMethod, handleData) {

    var StrUrl = AjaxBaseUrl() + strMethod;
    $.ajax({
        cache: false,
        type: "GET",
        async: true,
        crossDomain: true,
        dataType: "json",
        contentType: "application/json",
        url: StrUrl,
        success: function (data) {
            handleData(data);
        },
        error: function (a, b, c) {
            //if (a.statusText == 'Unauthorized') {
            //    window.location = "../LOGIN/wfrLogin.aspx";
            //}
            //else
            //if (a.statusText = "BadRequest") {
            //    displayErrorMessageConection(a.responseText);
            //}
            //else {
            //try {
            //    displayErrorMessage(a.responseText);
            //} catch (ex) { }
            //}

        }
    });
}


function AjaxBasicRequestDelete(strMethod, handleData) {

    var StrUrl = AjaxBaseUrl() + strMethod;
    $.ajax({
        cache: false,
        type: "DELETE",
        async: true,
        crossDomain: true,
        dataType: "json",
        contentType: "application/json",
        url: StrUrl,
        success: function (data) {
            handleData(data);
        },
        error: function (a, b, c) {
        }
    });
}


function AjaxBasicRequestPOST(jasonData, strMethod, handleData) {

    var StrUrl = AjaxBaseUrl() + strMethod;
    $.ajax({
        cache: false,
        type: "POST",
        async: true,
        crossDomain: true,
        dataType: "json",
        data: JSON.stringify(jasonData),
        contentType: "application/json",
        url: StrUrl,
        success: function (data) {
            handleData(data);
        },
        error: function (a, b, c) {
            //if (a.statusText == 'Unauthorized') {
            //    window.location = "../LOGIN/wfrLogin.aspx";
            //}
            //else
            //if (a.statusText = "BadRequest") {
            //    displayErrorMessageConection(a.responseText);
            //}
            //else {
            //try {
            //    displayErrorMessage(a.responseText);
            //} catch (ex) { }
            //}

        }
    });
}

function AjaxBasicRequestSyncGET(strMethod, handleData) {

    var StrUrl = AjaxBaseUrl() + strMethod;
    $.ajax({
        cache: false,
        type: "GET",
        async: false,
        crossDomain: true,
        dataType: "json",
        contentType: "application/json",
        url: StrUrl,
        success: function (data) {
            handleData(data);
        },
        error: function (a, b, c) {
            //if (a.statusText == 'Unauthorized') {
            //    window.location = "../LOGIN/wfrLogin.aspx";
            //}
            //else
            //if (a.statusText = "BadRequest") {
            //    displayErrorMessageConection(a.responseText);
            //}
            //else {
            //try {
            //    displayErrorMessage(a.responseText);
            //} catch (ex) { }
            //}
        }
    });
}

function AjaxBasicRequestSyncPOST(jasonData, strMethod, handleData) {

    var StrUrl = AjaxBaseUrl() + strMethod;
    $.ajax({
        cache: false,
        type: "POST",
        async: false,
        crossDomain: true,
        dataType: "json",
        data: JSON.stringify(jasonData),
        contentType: "application/json",
        url: StrUrl,
        success: function (data) {
            handleData(data);
        },
        error: function (a, b, c) {
        }
    });
}