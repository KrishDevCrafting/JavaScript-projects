
function generateRandomPassword(length) {
  const charset = "abcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }
  return password;
}

// Example usage:
console.log(generateRandomPassword(10)); // Output: Random 8-character password

console.log(10<13);
