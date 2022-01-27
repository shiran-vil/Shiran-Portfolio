
exports.formsub = function submitForm(){
  console.log(form was submitted);
}
function formValidation(event){
  //name validation
  const nameInput = $("#userName");
  if(nameInput.value.length <3  || nameInput.value(?=.*[!@#\$%\^&\*])){
    event.preventDefault();
    alert('Invalid name.');
    return false;
  }
  //email validation
  const emailInput = document.getElementById('userEmail');
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!emailInput.value.match(emailRegex)) {
   event.preventDefault();
  alert('Invalid email address.');
  return false;
  }
}

const form = document.getElementById("contact-form");
const formEvent = form.addEventListener("submit", (event) => {
  event.preventDefault();
  let mail = new FormData(form);
  sendMail(mail);
});

const sendMail = (mail) => {
  fetch("http://localhost:3000/", {
    method: "post",
    body: mail,
  }).then((response) => {
    return response.json();
  });
