function generateRandomPassword(length) {
  const charset = "abcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }
  return password;
}

document.addEventListener("DOMContentLoaded", function () {
  const generateButton = document.getElementById("generate");
  const passwordDisplay = document.getElementById("password");
  const lengthInput = document.getElementById("length");

  generateButton.addEventListener("click", function () {
    const length = parseInt(lengthInput.value) || 10; // Default to 10 if input is invalid
    if (length < 1) {
      passwordDisplay.textContent = "Password length must be at least 1.";
      return;
    }
    const password = generateRandomPassword(length);
    passwordDisplay.textContent = password;
  });
});
