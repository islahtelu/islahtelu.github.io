// contact form
const scriptURL = "https://script.google.com/macros/s/AKfycbzjtBADhCZtH-y3-gXn9uwaJv3i1D0l52DEW1-9MXUIk74Lr-K0iGn3vbjjmuhyELNexg/exec";
const form = document.forms["submit-to-google-sheet"]
const btnKirim = document.querySelector('.btn-kirim')
const btnLoading = document.querySelector('.btn-loading')
const alertContactSuccess = document.querySelector('.alert-contact-success')
const alertContactFailed = document.querySelector('.alert-contact-failed')

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // setelah tombol diklik
    // tampilkan tombol loading, hilangkan tombol kirim
    btnLoading.classList.toggle('d-none')
    btnKirim.classList.toggle('d-none')
    
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
            console.log("Success!", response)
            btnLoading.classList.toggle('d-none')
            btnKirim.classList.toggle('d-none')
            alertContactSuccess.classList.toggle('d-none')
            form.reset()
        })
        .catch((error) => {
            console.error("Error!", error.message)
            btnLoading.classList.toggle('d-none')
            btnKirim.classList.toggle('d-none')
            alertContactFailed.classList.toggle('d-none')
        })
});