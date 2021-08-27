
// --- Cart alert ---

function emptyCart() {
    alert("Your cart is empty");
}

// ---- replace image ----

function out(element) {
    element.src= "./images/assets/succulents-2.jpg"
}
function back(element) {
    element.src = "./images/assets/succulents-1.jpg"
}

//  --- Remove cookie dialogue ---

var cookiesOut = document.querySelector('footer')

function remove() {
    cookiesOut.remove();
}