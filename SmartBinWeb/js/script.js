
window.onscroll = function() {scrollFunction()};

function scrollFunction() {


    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("concept-head").style.background = "black";
        document.getElementById("concept-head").style.color = "white";

        document.getElementById("product-head").style.background = "#888";
        document.getElementById("product-head").style.color = "white";

        document.getElementById("construction-head").style.background = "#888";
        document.getElementById("construction-head").style.color = "white";

        document.getElementById("design-head").style.background = "#888";
        document.getElementById("design-head").style.color = "white";

        document.getElementById("outcomes-head").style.background = "#888";
        document.getElementById("outcomes-head").style.color = "white";
    }
    if (document.body.scrollTop > 1050 || document.documentElement.scrollTop > 1050) {
        document.getElementById("product-head").style.background = "black";
        document.getElementById("product-head").style.color = "white";
        document.getElementById("product-head").style.textShadow = "none";
    }
    if (document.body.scrollTop > 2740 || document.documentElement.scrollTop > 2740) {
        document.getElementById("construction-head").style.background = "black";
        document.getElementById("construction-head").style.color = "white";
        document.getElementById("construction-head").style.textShadow = "none";
    }
    if (document.body.scrollTop > 4330 || document.documentElement.scrollTop > 4330) {
        document.getElementById("design-head").style.background = "black";
        document.getElementById("design-head").style.color = "white";
        document.getElementById("design-head").style.textShadow = "none";
    }
    if (document.body.scrollTop > 5330 || document.documentElement.scrollTop > 5330) {
        document.getElementById("outcomes-head").style.background = "black";
        document.getElementById("outcomes-head").style.color = "white";
        document.getElementById("outcomes-head").style.textShadow = "none";
    }

  }

