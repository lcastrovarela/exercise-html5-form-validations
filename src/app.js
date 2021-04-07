/* eslint-disable */
// import "bootstrap";
// import "./style.css";

const myForm = document.getElementById("formulario");

myForm.addEventListener("submit", e => {
  console.log("Envío ha sido hecho");
  e.preventDefault();
  //variables
  let divalerta = document.getElementById("divalerta");
  let cardnumber = document.getElementById("cardnumber");
  let cvc = document.getElementById("cvc");
  let amount = document.getElementById("amount");
  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let inputCity = document.getElementById("inputCity");
  let inputState = document.getElementById("inputState");
  let inputZip = document.getElementById("inputZip");
  //   let mensaje = document.getElementById("exampleFormControlTextarea1");
  let radio1 = document.getElementById("inlineRadio1");
  let radio2 = document.getElementById("inlineRadio2");
  let radio3 = document.getElementById("inlineRadio3");
  let radio4 = document.getElementById("inlineRadio4");

  divalerta.style.textAlign = "center";

  //validacion cardnumber
  if (cardnumber.value == "") {
    cardnumber.style.backgroundColor = "#f79757";
    divalerta.style.backgroundColor = "#f79757";
    divalerta.innerHTML = "<p>Información faltante</p>";
  }

  //validacion cvc
  if (cvc.value == "") {
    cvc.style.backgroundColor = "#f79757";
    divalerta.style.backgroundColor = "#f79757";
    divalerta.innerHTML = "<p>Información faltante</p>";
  }

  //validacion amount
  if (amount.value == "") {
    amount.style.backgroundColor = "#f79757";
    divalerta.style.backgroundColor = "#f79757";
    divalerta.innerHTML = "<p>Información faltante</p>";
  }

  //validacion firstName
  if (
    firstName.value == null ||
    firstName.value.length == 0 ||
    /^\s+$/.test(firstName.value)
  ) {
    firstName.style.backgroundColor = "#f79757";
    divalerta.style.backgroundColor = "#f79757";
    divalerta.innerHTML = "<p>Información faltante</p>";
  }

  //validacion lastName
  if (
    lastName.value == null ||
    lastName.value.length == 0 ||
    /^\s+$/.test(lastName.value)
  ) {
    lastName.style.backgroundColor = "#f79757";
    divalerta.style.backgroundColor = "#f79757";
    divalerta.innerHTML = "<p>Información faltante</p>";
  }

  //validacion inputCity
  if (
    inputCity.value == null ||
    inputCity.value.length == 0 ||
    /^\s+$/.test(inputCity.value)
  ) {
    inputCity.style.backgroundColor = "#f79757";
    divalerta.style.backgroundColor = "#f79757";
    divalerta.innerHTML = "<p>Información faltante</p>";
  }

  // validacion inputState

  if (inputState.value == "Pick a state") {
    inputState.style.backgroundColor = "#f79757";
    divalerta.style.backgroundColor = "#f79757";
    divalerta.innerHTML = "<p>Información faltante</p>";
  }

  //validacion inputZip
  if (inputZip.value == "") {
    inputZip.style.backgroundColor = "#f79757";
    divalerta.style.backgroundColor = "#f79757";
    divalerta.innerHTML = "<p>Información faltante</p>";
  }

  //validacion Radio Box
  if (
    !radio1.checked &&
    !radio2.checked &&
    !radio3.checked &&
    !radio4.checked
  ) {
    radio1.style.backgroundColor = "#f79757";
    radio2.style.backgroundColor = "#f79757";
    radio3.style.backgroundColor = "#f79757";
    radio4.style.backgroundColor = "#f79757";
    divalerta.style.backgroundColor = "#f79757";
    divalerta.innerHTML = "<p>Información faltante</p>";
  }
});

//   //validacion mensaje
//   if (
//     mensaje.value == null ||
//     mensaje.value.length == 0 ||
//     /^\s+$/.test(mensaje.value)
//   ) {
//     mensaje.style.backgroundColor = "#f79757";
//     divalerta.style.backgroundColor = "#f79757";
//     divalerta.innerHTML = "<p>Información faltante</p>";
//   }
