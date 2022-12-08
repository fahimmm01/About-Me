const showWhenBillentered = document.querySelector("#showWhenBillentered");
const cash = document.querySelector(".cash");

const bill_amt = document.querySelector("#billAmt");
const cash_given = document.querySelector("#cashGiven");

const calButton = document.querySelector("#btn-calculate");
const amntReturned = document.querySelector("#amnt-returned");
const output = document.querySelector("#output");
const errorMessage = document.querySelector("#error-msg");
const noOfNote = document.querySelectorAll(".returned-note");



const availableNotes = [2000, 500, 100, 20, 10, 5, 2, 1];

showWhenBillentered.addEventListener("click", function checkIfBillEntered(event) {
    event.preventDefault();
    if (parseInt(bill_amt.value)) {
        showWhenBillentered.style.display = "none";
        cash.style.display = "block";

    }
})
calButton.addEventListener("click", function validateBillandCash(event) {
    event.preventDefault();
    // console.log(bill_amt.value);
    // console.log(cash_given.value);
    if (parseInt(bill_amt.value) >= 0) {

        if (parseInt(cash_given.value) >= parseInt(bill_amt.value)) {
            hidemsg();
            const amountToBeReturned = cash_given.value - bill_amt.value;
            if (amountToBeReturned < 0) {
                errorBlock("Do you wanna wash plates? 😂😂");
            }
            else {

                calculateChange(amountToBeReturned);
            }
        } else {
            errorBlock("Do you wanna wash Plates? 😂😂 ");
        }

    } else {
        errorBlock("Bill amount can not be negative");
    }
})

function hidemsg() {
    errorMessage.style.display = "none";
}

function errorBlock(error) {
    errorMessage.style.display = "block";
    errorMessage.innerHTML = error;
    amntReturned.innerText = "";
    output.style.display = "none";
}

function calculateChange(amountToBeReturned) {
    // console.log(amountToBeReturned);
    amntReturned.innerText = "Amount to be returned is " + amountToBeReturned;
    output.style.display = "block";
    var i;
    for (i = 0; i < availableNotes.length; i++) {
        var noOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);

        noOfNote[i].innerText = noOfNotes;

        amountToBeReturned %= availableNotes[i];
    };

}