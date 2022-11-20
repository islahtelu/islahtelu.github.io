// contact form
const scriptURL = "https://script.google.com/macros/s/AKfycbzjtBADhCZtH-y3-gXn9uwaJv3i1D0l52DEW1-9MXUIk74Lr-K0iGn3vbjjmuhyELNexg/exec";
const form = document.forms["submit-to-google-sheet"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const alertContactSuccess = document.querySelector(".alert-contact-success");
const alertContactFailed = document.querySelector(".alert-contact-failed");

// sleep time expects milliseconds
function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function saklar() {
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // setelah tombol diklik
  // tampilkan tombol loading, hilangkan tombol kirim
  saklar();

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      saklar();
      alertContactSuccess.classList.toggle("d-none");
      // Usage!
      sleep(4000).then(() => {
        alertContactSuccess.classList.toggle("d-none");
      });
      form.reset();
    })
    .catch((error) => {
      console.error("Error!", error.message);
      saklar();
      alertContactFailed.classList.toggle("d-none");

      sleep(4000).then(() => {
        alertContactFailed.classList.toggle("d-none");
      });
    });
});
