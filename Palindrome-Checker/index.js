function check() {
  var text = document.getElementById("text-input").value;
  if (text === "") {
    alert("Please enter a word or phrase");
    return;
  }
  let test = text.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  document.getElementById("result").style.display = "block";
  if (test === test.split("").reverse().join("")) {
    document.getElementById(
      "result"
    ).innerHTML = `<b> ${text} </b> is a Palindrome`;
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `<b> ${text} </b> is  not a Palindrome`;
  }
}
