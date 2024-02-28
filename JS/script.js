//Top menu bar moves on scroll
var prevScrollpos = window.scrollY;
window.onscroll = function() {
    var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
    document.getElementById("top-menu-id").style.top = "0";
    } else {
    document.getElementById("top-menu-id").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}
