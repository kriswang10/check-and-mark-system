var a = document.getElementById("bx").getElementsByTagName("p");
var b = document.getElementById("gx").getElementsByTagName("div");
for (var i = 0; i < a.length; i++){
    a[i].onmouseover = shadowBack;
    a[i].onmouseout = shadowBackout;
}
for (var i = 0; i < c.length; i++){
    c[i].onmouseover = showLine;
}
function shadowBack() {

    for (var i = 0; i < b.length; i++){
        if (a[i] === this) {
            var t = i + 1;
            b[i].className = "text-" + t + " filter";
        }
    }

}
function shadowBackout() {
    for (var i = 0; i < b.length; i++){
        var t = i + 1;
        b[i].className = "text-" + t;
    }
}
