let price = 3.26;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

document.getElementById("price").innerHTML = "Totale:$" + price;
document.getElementById("drawer").innerHTML = `
    <p><b>Change in drawer:</b></p>
    <p>Pennies: $${cid[0][1]}</p>
    <p>Nickels: $${cid[1][1]}</p>
    <p>Dimes: $${cid[2][1]}</p>
    <p>Quarters: $${cid[3][1]}</p>
    <p>Ones: $${cid[4][1]}</p>
    <p>Fives: $${cid[5][1]}</p>
    <p>Tens: $${cid[6][1]}</p>
    <p>Twenties: $${cid[7][1]}</p>
    <p>Hundreds: $${cid[8][1]}</p>`;

function currencyValue(currency) {
  switch (currency) {
    case "PENNY":
      return 0.01;
    case "NICKEL":
      return 0.05;
    case "DIME":
      return 0.1;
    case "QUARTER":
      return 0.25;
    case "ONE":
      return 1;
    case "FIVE":
      return 5;
    case "TEN":
      return 10;
    case "TWENTY":
      return 20;
    case "ONE HUNDRED":
      return 100;
  }
}

function cashdrawer(cid) {
  let total = 0;
  for (let i = 0; i < cid.length; i++) {
    total += cid[i][1];
  }
  return total;
}

function purchase() {
  let cash = document.getElementById("cash").value;
  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  } else if (cash == price) {
    document.getElementById("change-due").style.display = "block";
    document.getElementById("change-due").innerHTML =
      "No change due - customer paid with exact cash";
    return;
  } else {
    let change = cash - price;
    let status = "";
    let changeArr = [];
    let cid2 = cid.map((item) => [...item]);
    if (change > cashdrawer(cid)) {
      status = "INSUFFICIENT_FUNDS";
    } else if (change == cashdrawer(cid)) {
      status = "CLOSED";
      cid.forEach((item) => {
        if (item[1] > 0) changeArr.push(item);
      });
    } else {
      let total = 0;
      let i = 8;
      while (i >= 0) {
        let value = 0;
        while (cid2[i][1] > 0 && change >= currencyValue(cid[i][0])) {
          change -= currencyValue(cid[i][0]);
          change = Math.round(change * 100) / 100;
          cid2[i][1] -= currencyValue(cid[i][0]);
          value += currencyValue(cid[i][0]);
          value = Math.round(value * 100) / 100;
        }
        if (value > 0) {
          changeArr.push([cid[i][0], value]);
          total += value;
          total = Math.round(total * 100) / 100;
        }
        i--;
      }

      if (change > total) {
        status = "INSUFFICIENT_FUNDS";
        changeArr = [];
      } else {
        status = "OPEN";
        cid = cid2.map((item) => [item[0], Math.round(item[1] * 100) / 100]);
      }
    }
    document.getElementById("change-due").style.display = "block";
    document.getElementById("change-due").innerHTML = `
        <p>Status: ${status}</p>
        ${changeArr.map((item) => `<p>${item[0]}: $${item[1]}</p>`).join("")}`;
    document.getElementById("drawer").innerHTML = `
    <p><b>Change in drawer:</b></p>
    <p>Pennies: $${cid[0][1]}</p>
    <p>Nickels: $${cid[1][1]}</p>
    <p>Dimes: $${cid[2][1]}</p>
    <p>Quarters: $${cid[3][1]}</p>
    <p>Ones: $${cid[4][1]}</p>
    <p>Fives: $${cid[5][1]}</p>
    <p>Tens: $${cid[6][1]}</p>
    <p>Twenties: $${cid[7][1]}</p>
    <p>Hundreds: $${cid[8][1]}</p>`;
  }
}
