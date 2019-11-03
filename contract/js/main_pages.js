var fuzzy = document.getElementById("fuzzy");
fuzzy.onmouseover = fuzzychange;

function fuzzychange() {

    if (fuzzy === this){
        fuzzy.className += "filter";
    }
    else {
        fuzzy.className = "filter";
    }
}