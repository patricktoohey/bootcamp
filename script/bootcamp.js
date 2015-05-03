function menu () {
    var displayCurrent = document.getElementById("navigation").style.display;

    if (displayCurrent === "none" || displayCurrent == "") {
        document.getElementById("navigation").style.display = "block";
        document.getElementById("navigation").style.height = "5em";
    }
    else {
        document.getElementById("navigation").style.display = "none";
        document.getElementById("navigation").style.height = "0";
    }
}
// Called when the page is done loading; this is where we do any setup we need,
// such as creating event listeners for the elements in the page.

function setup() {
    document.getElementById("menu-icon").addEventListener("click", menu, true);
}

// Install an event handler on the window to receive the "load" event, which
// indicates that the document has finished loading into the window.

window.addEventListener("load", setup, true);