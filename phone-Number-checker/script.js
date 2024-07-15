function check() {
  let input = document.getElementById("user-input").value;
  if (input === "") {
    alert("Please provide a phone number");
  } else {
    let regex = /^1?\s?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    if (input.match(regex)) {
      document.getElementById("results-div").innerHTML =
        "Valid US number: " + input;
    } else {
      document.getElementById("results-div").innerHTML =
        "Invalid US number: " + input;
    }
  }
}

function clearResults() {
  document.getElementById("results-div").innerHTML = "";
}
