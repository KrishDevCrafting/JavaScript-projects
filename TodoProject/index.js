const listValue = document.getElementById("list-value");
const inputBox = document.getElementById("inputValue");
function callme() {
  if (inputBox.value.trim() === "") {
    alert("Plz Enter The Text!");
    console.log("first-condition!");
  } else {
    let li = document.createElement("p");
    li.innerHTML = inputBox.value;
    listValue.appendChild(li);
  }
}
