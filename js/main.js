function order() {
  let quanty = prompt("Have you practiced Fitboxing before?");
  let name = prompt("what is your first name?");
  let email = prompt("What is your email?");

  alert(
    "Thanks " +
      name +
      "! We will be in touch soon with more details. Feel free to contact me if you have any quesitons at marissa.rico28@gmail.com"
  );
}

function changeTheme() {
  let body = document.querySelector("body");

  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
}

let button = document.querySelector("#order-button");
button.addEventListener("click", order);

let themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click", changeTheme);
