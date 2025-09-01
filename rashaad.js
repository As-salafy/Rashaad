document.getElementById("home").addEventListener("click", paydet);
var home_body = document.getElementById("home");
var pay_body = document.getElementById("paysec");
pay_body.style.display = "none";

function paydet() {
    home_body.style.display = "none";
    pay_body.style.display = "block";
}