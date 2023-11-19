var form = document.querySelector("#get-discount");
var submitButton = document.querySelector("#discount-results");


submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  alert(submitButton.id)
  var sportType = document.getElementById("sports").value;
  var skillLevel = document.getElementById("level").value;
  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;
  alert(sportType, skillLevel, height, weight)

  var data = {
    sportType: sportType,
    skillLevel: skillLevel,
    height: height,
    weight: weight
  };

  localStorage.setItem("formData", JSON.stringify(data));
});