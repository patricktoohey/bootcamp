function BenefitsGood () {
    document.getElementById("helpful-yes-check-benefits").src = "images/checkbox-checked.png";
    document.getElementById("helpful-no-check-benefits").src = "images/checkbox.png";

    // placeholder for json event back to server
}

function BenefitsBad() {
    document.getElementById("helpful-yes-check-benefits").src = "images/checkbox.png";
    document.getElementById("helpful-no-check-benefits").src = "images/checkbox-checked.png";

    // placeholder for json event back to server
}

// Called when the page is done loading; this is where we do any setup we need,
// such as creating event listeners for the elements in the page.

function setup() {
    document.getElementById("helpful-yes-benefits").addEventListener("click", BenefitsGood, true);
    document.getElementById("helpful-yes-check-benefits").addEventListener("click", BenefitsGood, true);
    document.getElementById("helpful-no-benefits").addEventListener("click", BenefitsBad, true);
    document.getElementById("helpful-no-check-benefits").addEventListener("click", BenefitsBad, true);
}

// Install an event handler on the window to receive the "load" event, which
// indicates that the document has finished loading into the window.

window.addEventListener("load", setup, true);