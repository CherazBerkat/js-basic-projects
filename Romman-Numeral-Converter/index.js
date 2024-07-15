function converter() {
  var num = document.getElementById("number").value;
  document.getElementById("output").style.display = "block";
  let result;
  if (num === "" || isNaN(num)) {
    result = "Please enter a valid number.";
  } else {
    if (num < 1) {
      result = "Please enter a number greater than or equal to 1.";
    } else {
      if (num >= 4000) {
        result = "Please enter a number less than or equal to 3999.";
      } else {
        convert();
        return;
      }
    }
  }
  document.getElementById(
    "output"
  ).innerHTML = `<div style="text-align:center; padding:10px; border: solid 2px red; background-color: #ffadad; color:red ">  ${result} </div>`;
}

function convert() {
  var num = document.getElementById("number").value;
  var roman = "";
  var romanNumList = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  var decimalList = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var index = 0;
  while (num > 0) {
    if (num - decimalList[index] >= 0) {
      roman += romanNumList[index];
      num -= decimalList[index];
    } else {
      index++;
    }
  }
  document.getElementById("output").style.display = "block";
  document.getElementById(
    "output"
  ).innerHTML = `<div style="text-align:center; height:50px; border: solid 2px #f0f0f0; background-color: #3b3b4f; color:#f0f0f0; padding-top:10px; "> ${roman} </div>`;
}
