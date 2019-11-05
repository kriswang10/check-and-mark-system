var a = document.getElementById("tabs").getElementsByTagName("li");
var b = document.getElementById("fontColor").getElementsByTagName("span");
for (var i = 0; i < a.length; i++){
    b[i].onmouseover = showBack;
    b[i].onmouseout = deshowBack;
}
function showBack() {
    for (var i = 0; i < b.length; i++){
        if (b[i] === this){
            var t = i +1;
            a[i].className = "menu-nav-" + t + " active-blue-back";
            b[i].className = "active-font";
        }
        else {
            var t = i +1;
            a[i].className = "menu-nav-" + t;
            b[i].className = "";
        }
    }
}
function deshowBack() {
    for (var i = 0; i < b.length; i++) {
        if (b[i] != this){
            var t = i + 1;
            a[i].className = "menu-nav-" + t;
            b[i].className = "";
        }

    }
}