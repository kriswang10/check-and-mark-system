var tabs =document.getElementById("tabs").getElementsByTagName("li");
console.log(tabs);
for (var i = 0; i < tabs.length; i++){
    tabs[i].onclick = backcolorchange;
}

function backcolorchange() {
    tabs[i].className = "active-blue-back";
}