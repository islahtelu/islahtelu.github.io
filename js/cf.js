// contact form
const scriptURL = "https://script.google.com/macros/s/AKfycbzjtBADhCZtH-y3-gXn9uwaJv3i1D0l52DEW1-9MXUIk74Lr-K0iGn3vbjjmuhyELNexg/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
e.preventDefault();
fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});