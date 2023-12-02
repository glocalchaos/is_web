import {getTable} from "./table-generator.js";

document.addEventListener("DOMContentLoaded", function() {
  var form = document.querySelector("#get-discount");
  var submitButton = document.querySelector("#discount-results");
  // console.log(JSON.parse(localStorage.getItem("formData")))

  form["sports"].value = JSON.parse(localStorage.getItem("formData"))["sportType"]
  form["level"].value = JSON.parse(localStorage.getItem("formData"))["skillLevel"]

  form["height"].value = JSON.parse(localStorage.getItem("formData"))["height"]
  form["weight"].value = JSON.parse(localStorage.getItem("formData"))["weight"]
  form["discountNumber"].value = JSON.parse(localStorage.getItem("formData"))["discountNumber"]
  generateOldTable()
  
  submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    var sportType = document.querySelector('input[name="sports"]:checked').value;
    var skillLevel = document.querySelector('input[name="level"]:checked').value;
    var height = document.querySelector('input[name="height"]').value;
    var weight = document.querySelector('input[name="weight"]').value;
    var discountNumber = document.querySelector('input[name="discountNumber"]').value;

    var data = {
      sportType: sportType,
      skillLevel: skillLevel,
      height: height,
      weight: weight,
      discountNumber: discountNumber
    };
  
    if (!isVerified(data)) {
      swal("Что-то пошло не так", "Вы ввели некорректные данные(", "error")
      return;
    }

    localStorage.setItem("formData", JSON.stringify(data));

    generateTable(data);
  });

})

function isVerified(data) {
  if ((data.discountNumber > 6) || (data.discountNumber < 1)) {
    return false;
  }
  return true;
}


function generateTable(data) {
  var main = document.querySelector("main");

  if (main.querySelector("#generated-results-container") == null) {
    var tableContainer = document.createElement("div");
    tableContainer.classList.add("separate-block", "separate-block_form");
    tableContainer.setAttribute("id", "generated-results-container")
    main.appendChild(tableContainer)
  }

  var resultsContainer = main.querySelector("#generated-results-container");
  
  var generatedData = getTable(data.sportType, data.skillLevel, data.height, data.weight, data.discountNumber);
  //console.log(generatedData);
  localStorage.setItem("tableData", JSON.stringify(generatedData));
  document.querySelector("#discount-table")?.remove()

  var table = document.createElement("div");
  table.setAttribute("id", "discount-table");

  var rowHeader = document.createElement("div");
  rowHeader.classList.add("row", "header");
  var cell = document.createElement("div");
  cell.classList.add("cell");
  cell.appendChild(document.createTextNode("Категория"))
  rowHeader.appendChild(cell);

  var cell = document.createElement("div");
  cell.classList.add("cell");
  cell.appendChild(document.createTextNode("% скидки"))
  rowHeader.appendChild(cell);

  var cell = document.createElement("div");
  cell.classList.add("cell");
  cell.appendChild(document.createTextNode("На заметку"))
  rowHeader.appendChild(cell);

  table.appendChild(rowHeader);
  table.classList.add("discounts-table");
  for (var category in generatedData) {
    console.log(category[0] + " category");
    var row = document.createElement("div");
    row.classList.add("row")
    
    for (var col in generatedData[category]) {
      console.log(col);
      var cell = document.createElement("div");
      cell.classList.add("cell");
      cell.appendChild(document.createTextNode(generatedData[category][col]))
      row.appendChild(cell)
    }

    table.appendChild(row)
  }


  resultsContainer.appendChild(table)
}


function generateOldTable() {
  var generatedData = JSON.parse(localStorage.getItem("tableData"))
  if (generatedData != null) {
    var main = document.querySelector("main");

  if (main.querySelector("#generated-results-container") == null) {
    var tableContainer = document.createElement("div");
    tableContainer.classList.add("separate-block", "separate-block_form");
    tableContainer.setAttribute("id", "generated-results-container")
    main.appendChild(tableContainer)
  }

  var resultsContainer = main.querySelector("#generated-results-container");
  document.querySelector("#discount-table")?.remove()

  var table = document.createElement("div");
  table.setAttribute("id", "discount-table");

  var rowHeader = document.createElement("div");
  rowHeader.classList.add("row", "header");
  var cell = document.createElement("div");
  cell.classList.add("cell");
  cell.appendChild(document.createTextNode("Категория"))
  rowHeader.appendChild(cell);

  var cell = document.createElement("div");
  cell.classList.add("cell");
  cell.appendChild(document.createTextNode("% скидки"))
  rowHeader.appendChild(cell);

  var cell = document.createElement("div");
  cell.classList.add("cell");
  cell.appendChild(document.createTextNode("На заметку"))
  rowHeader.appendChild(cell);

  table.appendChild(rowHeader);
  table.classList.add("discounts-table");
  for (var category in generatedData) {
    console.log(category[0] + " category");
    var row = document.createElement("div");
    row.classList.add("row")
    
    for (var col in generatedData[category]) {
      console.log(col);
      var cell = document.createElement("div");
      cell.classList.add("cell");
      cell.appendChild(document.createTextNode(generatedData[category][col]))
      row.appendChild(cell)
    }

    table.appendChild(row)
  }


  resultsContainer.appendChild(table)
  }
}