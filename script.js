let form = document.querySelector(".myForm");
let bill = document.querySelector("#bill");
let percent = document.getElementsByName("percent");
let customPercent = document.querySelector("#customPercent");
let people = document.querySelector("#people");
let tipAmount = document.querySelector(".tip-amount-number");
let totalAmount = document.querySelector(".total-person-number");
let resetBtn = document.querySelector("#reset-btn");
let tipResult;
let totalResult;
// uncheck the radio when custom percent is entered
customPercent.addEventListener("click", (e) => {
  e.stopPropagation();
  percent.forEach((p) => {
    // p.checked = false;
    if (p.checked == true) {
      location.reload();
    }
  });
});
// clear the custom person when a radio is checked
percent.forEach((p) => {
  p.addEventListener("click", function () {
    if (customPercent.value !== "") {
      location.reload();
    }
  });
});

// CALCULATION
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let pValue = 0;
  let cPValue = customPercent.value;
  people = parseInt(people.value);
  bill = parseInt(bill.value);
  if (cPValue == "") {
    percent.forEach((p) => {
      if (p.checked == true) {
        pValue += parseInt(p.value);
      }
    });
    console.log();

    if (pValue === 5) {
      tipResult = (bill * 0.05) / people;
    } else if (pValue === 10) {
      tipResult = (bill * 0.1) / people;
    } else if (pValue === 15) {
      tipResult = (bill * 0.15) / people;
    } else if (pValue === 25) {
      tipResult = (bill * 0.25) / people;
    } else if (pValue === 50) {
      tipResult = (bill * 0.5) / people;
    }
  } else {
    cPValue = parseInt(cPValue) / 100;
    tipResult = (bill * cPValue) / people;
  }
  tipAmount.innerHTML = `$${tipResult}`;
  totalResult = bill / people + tipResult;
  totalAmount.innerHTML = `$${totalResult}`;
});

// reset the form
resetBtn.addEventListener("click", () => {
  location.reload();
});
