function singleDelete() {
  myResult.value = myResult.value.slice(0, -1);
}
function deleteMe() {
  document.getElementById("myResult").value = "";
}
function calculator(newValue) {
  document.getElementById("myResult").value += newValue;
}
function answer() {
  const b = eval(document.getElementById("myResult").value);
  document.getElementById("myResult").value = b;
}
