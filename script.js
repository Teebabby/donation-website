// Dynamically update the PayPal amount field with the donation amount
document.getElementById("amount").addEventListener("input", function () {
  document.getElementById("paypal-amount").value = this.value;
});
// Wallet addresses for crypto donations
const walletAddresses = {
  btc: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
  eth: "0x4E83362442B8d1bec281594cEa3050c8EB01311C",
};

// Show the modal for crypto donations
function showCryptoModal() {
  document.getElementById("crypto-modal").style.display = "flex";
  updateCryptoInfo();
}

// Hide the modal
function hideCryptoModal() {
  document.getElementById("crypto-modal").style.display = "none";
}

// Update the wallet info based on the selected crypto
function updateCryptoInfo() {
  const crypto = document.getElementById("crypto-select").value;
  const address = walletAddresses[crypto];

  // Display the wallet address
  document.getElementById(
    "wallet-address"
  ).textContent = `Wallet Address: ${address}`;
}
