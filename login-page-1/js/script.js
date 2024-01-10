//for eye icon
const inputBox = document.querySelector("#pass");
const eyeIcon = document.querySelector("#eyeicon");
function change() {
  if (inputBox.type === "password") {
    inputBox.type = "text";
    eyeIcon.src = "../src/eye-solid.svg";
  } else {
    inputBox.type = "password";
    eyeIcon.src = "../src/eye-slash-solid.svg";
  }
}
const icon = document.getElementById("eyeicon");
icon.onclick = change;

document.addEventListener("DOMContentLoaded", function () {
  const inputMaxLengthOnLoad = document.getElementById("username").maxLength;
  const textMaxLengthOnLoad = document.getElementById("characters");
  textMaxLengthOnLoad.innerText = inputMaxLengthOnLoad;
});

//onFocus
document.getElementById("username").addEventListener("focus", function () {
  const appear = document.getElementById("maxcharacter");
  appear.style.visibility = "visible";
});

//onBlur
document.getElementById("username").addEventListener("blur", function () {
  const disappear = document.getElementById("maxcharacter");
  disappear.style.visibility = "hidden";
});

//onInput
document.getElementById("username").addEventListener("input", function () {
  const inputCharacter = document.getElementById("username").value.length;
  const maxInputCharacter = document.getElementById("username").maxLength;

  const updateCharacter = maxInputCharacter - inputCharacter;
  document.getElementById("characters").innerText = updateCharacter.toString();

  if (updateCharacter === 0) {
    document.getElementById("characters").innerText = "Characters run out!!!";
  } else if (updateCharacter <= 5) {
    document.getElementById("maxcharacter").style.color = "red";
  } else {
    document.getElementById("maxcharacter").style.color = "white";
  }
});

//onCopy
document.getElementById("username").addEventListener("copy", function () {
  alert("Copied to clipboard");
});

//onPaste
document.getElementById("username").addEventListener("paste", function () {
  alert("You paste something");
});

//onCut
document.getElementById("username").addEventListener("cut", function () {
  alert("Copied to clipboard");
});

//onChange
document.getElementById("captcha-input").addEventListener("change", function () {
  const captcha = document.getElementById("captcha-input").value;

  if (captcha === "qGphJD") {
    document.getElementById("button").removeAttribute("disabled");
    alert("Congratulations! You have successfully");
  } else {
    document.getElementById("button").setAttribute("disabled");
  }
});


