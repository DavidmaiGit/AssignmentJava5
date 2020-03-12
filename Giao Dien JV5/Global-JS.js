function closeTagMess(val) {
    val.parentElement.style.opacity = "0";
}
function closeTagMess2(val) {
    val.parentElement.style.opacity = "0";
    setTimeout(function () {
        val.parentElement.remove();
    }, 500);
}

function loadTagMess() {
    if (document.querySelector("#message") === null) {
        var div = document.createElement("div");
        div.setAttribute("id", "message");
        var body = document.querySelector("body");
        body.appendChild(div);
    }
}

loadTagMess();

var tagMess = document.getElementById("message");

function pingMess(message, miniSecond) {
    var divDataMessPing = document.createElement("div");
    divDataMessPing.setAttribute("class", "data-messPing");
    var label = document.createElement("label");
    label.appendChild(document.createTextNode(message));
    var i = document.createElement("i");
    i.setAttribute("class", "fal fa-times close");
    if (miniSecond === "unset" || miniSecond === "none" || miniSecond === "null" || miniSecond === null) {
        i.setAttribute("onclick", "closeTagMess2(this)");
    } else if (miniSecond === undefined) {
        i.setAttribute("onclick", "closeTagMess(this)");
    } else {
        i.setAttribute("onclick", "closeTagMess(this)");
    }
    divDataMessPing.appendChild(label);
    divDataMessPing.appendChild(i);
    tagMess.appendChild(divDataMessPing);
    if (miniSecond === "unset" || miniSecond === "none" || miniSecond === "null" || miniSecond === null) {

    } else if (miniSecond === undefined) {
        setTimeout(function () {
            divDataMessPing.style.opacity = "0";
            setTimeout(function () {
                divDataMessPing.remove();
            }, 500);
        }, 10000);
    } else {
        setTimeout(function () {
            divDataMessPing.style.opacity = "0";
            setTimeout(function () {
                divDataMessPing.remove();
            }, 500);
        }, miniSecond);
    }
}