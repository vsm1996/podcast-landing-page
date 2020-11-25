const form = document.getElementById("form");
const email = document.getElementById("email");
const alert = document.getElementById("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInput();
});

function validateInput() {
  const emailVal = email.value.trim();
  if (emailVal === "") {
    displayError("fail", "Oops! Please add your email");
    return;
  } else if (!isValid(emailVal)) {
    displayError("fail", "Oops! Please check your email");
    return;
  } else {
    displayError("success", "Email received!");
  }
}

function displayError(type, message) {
  alert.style.display = "block";
  alert.style.margin = ".75rem";
  let alertColor;
  if (type === "fail") {
    alertColor = "red";
  } else {
    alertColor = "green";
  }
  alert.style.color = alertColor;
  alert.innerText = message;
}

function isValid(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
