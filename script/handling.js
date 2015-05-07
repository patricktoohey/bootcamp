// Infeed handlers
function InfeedGood() {
    document.getElementById("helpful-yes-check-infeed").src = "images/checkbox-checked.png";
    document.getElementById("helpful-no-check-infeed").src = "images/checkbox.png";
    document.getElementById("feedback-infeed").innerText = "Thank you, your feedback is appreciated.";

    // placeholder for json event back to server
}

function InfeedBad() {
    document.getElementById("helpful-yes-check-infeed").src = "images/checkbox.png";
    document.getElementById("helpful-no-check-infeed").src = "images/checkbox-checked.png";
    document.getElementById("feedback-infeed").innerText = "Thank you, your feedback is appreciated.";

    // placeholder for json event back to server
}

// In-Wheel Handlers
function InWheelGood() {
    document.getElementById("helpful-yes-check-in-wheel").src = "images/checkbox-checked.png";
    document.getElementById("helpful-no-check-in-wheel").src = "images/checkbox.png";
    document.getElementById("feedback-in-wheel").innerText = "Thank you, your feedback is appreciated.";

    // placeholder for json event back to server
}

function InWheelBad() {
    document.getElementById("helpful-yes-check-in-wheel").src = "images/checkbox.png";
    document.getElementById("helpful-no-check-in-wheel").src = "images/checkbox-checked.png";
    document.getElementById("feedback-in-wheel").innerText = "Thank you, your feedback is appreciated.";

    // placeholder for json event back to server
}

// Outfeed Handlers
function OutfeedGood() {
    document.getElementById("helpful-yes-check-outfeed").src = "images/checkbox-checked.png";
    document.getElementById("helpful-no-check-outfeed").src = "images/checkbox.png";
    document.getElementById("feedback-outfeed").innerText = "Thank you, your feedback is appreciated.";

    // placeholder for json event back to server
}

function OutfeedBad() {
    document.getElementById("helpful-yes-check-outfeed").src = "images/checkbox.png";
    document.getElementById("helpful-no-check-outfeed").src = "images/checkbox-checked.png";
    document.getElementById("feedback-outfeed").innerText = "Thank you, your feedback is appreciated.";

    // placeholder for json event back to server
}

// Called when the page is done loading; this is where we do any setup we need,
// such as creating event listeners for the elements in the page.

function setup() {
    document.getElementById("helpful-yes-infeed").addEventListener("click", InfeedGood, true);
    document.getElementById("helpful-yes-check-infeed").addEventListener("click", InfeedGood, true);
    document.getElementById("helpful-no-infeed").addEventListener("click", InfeedBad, true);
    document.getElementById("helpful-no-check-infeed").addEventListener("click", InfeedBad, true);

    document.getElementById("helpful-yes-in-wheel").addEventListener("click", InWheelGood, true);
    document.getElementById("helpful-yes-check-in-wheel").addEventListener("click", InWheelGood, true);
    document.getElementById("helpful-no-in-wheel").addEventListener("click", InWheelBad, true);
    document.getElementById("helpful-no-check-in-wheel").addEventListener("click", InWheelBad, true);

    document.getElementById("helpful-yes-outfeed").addEventListener("click", OutfeedGood, true);
    document.getElementById("helpful-yes-check-outfeed").addEventListener("click", OutfeedGood, true);
    document.getElementById("helpful-no-outfeed").addEventListener("click", OutfeedBad, true);
    document.getElementById("helpful-no-check-outfeed").addEventListener("click", OutfeedBad, true);
}

// Install an event handler on the window to receive the "load" event, which
// indicates that the document has finished loading into the window.

window.addEventListener("load", setup, true);