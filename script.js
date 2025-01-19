// Dynamically update the PayPal amount field with the donation amount
document.getElementById("amount").addEventListener("input", function () {
  document.getElementById("paypal-amount").value = this.value;
});
