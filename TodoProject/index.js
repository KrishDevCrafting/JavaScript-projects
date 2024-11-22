const listValue = document.getElementById("list-value");
// listValue is the variable or list-value is the id of the list tag!
const inputBox = document.getElementById("inputValue");
// inputbox is the variable in which the inputValue is the id of inputvalue!
function callme() {
  if (inputBox.value.trim() === "") {
    // inputBox is the variable and value is used take the input value and
    // The trim() function in JavaScript is used to remove whitespace (spaces, tabs, and newlines) from both the beginning and the end of a string. It is often used to clean up user input or to remove unnecessary whitespace before validating or processing the input.
    alert("Plz Enter The Text!");
    console.log("first-condition!");
  } else {
    let li = document.createElement("h1");
    // li is the variable and createElemnt the is property for h1
    li.innerHTML = inputBox.value;

    listValue.appendChild(li);
  }
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.style.marginLeft = "10px";
  deleteButton.addEventListener("click", () => {
    listValue.appendChild(deleteButton);
    
  });
}
