let isVisible = false;

function see() {
  let input = document.getElementById("password");
  let see = document.getElementById("see");
  if (isVisible) {
    input.type = "password";
    isVisible = false;
    see.style.color = "gray";
  } else {
    input.type = "text";
    isVisible = true;
    see.style.color = "red";
  }
}

function check() {
  let input = document.getElementById("password").value;

  input = input.trim();
  document.getElementById("password").value = input;
  document.getElementById("count").innerText = "Lenght :" + input.length;

  if (input.length >= 5) {
    document.getElementById("check0").style.color = "green";
  } else {
    document.getElementById("check0").style.color = "red";
  }

  if (input.length <= 10) {
    document.getElementById("check1").style.color = "green";
  } else {
    document.getElementById("check1").style.color = "red";
  }

  if (input.match(/[0-9]/i)) {
    document.getElementById("check2").style.color = "green";
  } else {
    document.getElementById("check2").style.color = "red";
  }

  if (input.match(input.match(/[^A-Za-z0-9-'']/i))) {
    document.getElementById("check3").style.color = "green";
  } else {
    document.getElementById("check3").style.color = "red";
  }
  if (input.match(" ")) {
    document.getElementById("check4").style.color = "red";
  } else {
    document.getElementById("check4").style.color = "green";
  }
}
