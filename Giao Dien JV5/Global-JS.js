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

////////////////////////////////////////////////////////////////
function getCookie(cookieName) {
    let ca = decodeURIComponent(document.cookie).split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cookieName) === 0) {
            return c.substring(cookieName.length + 1, c.length);
        }
    }
    return undefined;
}
function setUsername(username) {
    if (username === undefined || username === null || username === "null" || username === "none" || username === "unset" ) {
        document.querySelector("body > header.w3-row > div.w3-right.right.w3-col > div.titleUserName > label").innerHTML = getCookie("username");
    } else {
        document.cookie = "username=" + username;
        document.querySelector("body > header.w3-row > div.w3-right.right.w3-col > div.titleUserName > label").innerHTML = username;
    }
}
setUsername();

document.querySelector("body > header > div.w3-right.right.w3-col > div.hMenu > a.bm1").addEventListener("click", function () {
    let btn = document.querySelector("body > header > div.w3-right.right.w3-col > div.hMenu > a.bm1");
    let menu = document.querySelector("body > header > div.w3-right.right.w3-col > div.hMenu > div.menu");
    if (btn.classList.contains("accept")) {
        btn.classList.remove("accept");
        menu.style.display = "none";
    } else {
        btn.classList.add("accept");
        menu.style.display = "block";

    }
});

document.querySelector("body > header > div.w3-right.right.w3-col > div.hMenu > a.bm2").addEventListener("mouseover", function () {
    document.querySelector("body > header > div.w3-right.right.w3-col > div.hMenu > a.bm2 > label").style.display = "flex";
});
document.querySelector("body > header > div.w3-right.right.w3-col > div.hMenu > a.bm2 > label").addEventListener("mouseout", function () {
    document.querySelector("body > header > div.w3-right.right.w3-col > div.hMenu > a.bm2 > label").style.display = "none";
});

function changeLang(lang) {
    document.cookie = "org.springframework.web.servlet.i18n.CookieLocaleResolver.LOCALE=" + lang;
    location.reload();
}

function checkLogin() {
    if (getCookie("checklogin") === "false") {
        document.querySelector("body > header > div.w3-right.right.w3-col > div.titleLogin").style.display = "block";
        document.querySelector("body > header > div.w3-right.right.w3-col > div.titleUserName").style.display = "none";
        document.querySelector("body > header > div.w3-right.right.w3-col > div.hMenu > a.bm1").style.display = "none";
    } else {
        document.querySelector("body > header > div.w3-right.right.w3-col > div.titleLogin").style.display = "none";
        document.querySelector("body > header > div.w3-right.right.w3-col > div.titleUserName").style.display = "block";
        document.querySelector("body > header > div.w3-right.right.w3-col > div.hMenu > a.bm1").style.display = "flex";
    }
}

checkLogin();