// Container Feedback
function ContainerGood() {
    document.getElementById("helpful-yes-check-container").src = "images/checkbox-checked.png";
    document.getElementById("helpful-no-check-container").src = "images/checkbox.png";
    document.getElementById("feedback-container").innerText = "Thank you, your feedback is appreciated.";

    // placeholder for json event back to server
}

function ContainerBad() {
    document.getElementById("helpful-yes-check-container").src = "images/checkbox.png";
    document.getElementById("helpful-no-check-container").src = "images/checkbox-checked.png";
    document.getElementById("feedback-container").innerText = "Thank you, your feedback is appreciated.";

    // placeholder for json event back to server
}

// Called when the page is done loading; this is where we do any setup we need,
// such as creating event listeners for the elements in the page.

function SetupPackages() {
    document.getElementById("helpful-yes-container").addEventListener("click", ContainerGood, true);
    document.getElementById("helpful-yes-check-container").addEventListener("click", ContainerGood, true);
    document.getElementById("helpful-no-container").addEventListener("click", ContainerBad, true);
    document.getElementById("helpful-no-check-container").addEventListener("click", ContainerBad, true);

}

// Install an event handler on the window to receive the "load" event, which
// indicates that the document has finished loading into the window.

window.addEventListener("load", SetupPackages, true);