var btn = document.getElementById("btn");
var animalContainer = document.getElementById("animal-info");
var pageCounter = 1;

btn.addEventListener("click", function () {
  const url = "https://learnwebcode.github.io/json-example/animals-1.json";
  var ourRequest = new XMLHttpRequest();
  ourRequest.open("GET", url);
  ourRequest.onload = function () {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  };
  ourRequest.send();
});

// this function's job is to add html to our page
function renderHTML(data) {
  var htmlString = "";
  for (i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].name + " is a " + data[i].species + ".</p>";
  }
  animalContainer.insertAdjacentHTML("beforeend", htmlString);
}
