var Planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

document.getElementById("vanilla_output").innerHTML = "This content generated with vanilla JavaScript";

$('#jquery_output').append("This content generated with jQuery");

function modulus (arg1, arg2) {
  return arg1 % arg2;
}

function doMath (num1, num2, func) {
  return func(num1, num2);
}

function add (num1, num2) {
  return num1 + num2;
}

function subtract (num1, num2) {
  return num1 - num2;
}

doMath(10, 5, add);
doMath(10, 5, subtract);

function sortedPlanets(Planets) {
  return Planets.sort();
}
function reversedPlanets(Planets) {
  return Planets.reverse();
}

function longPlanets(Planets) {
  for  (var i = 0; i < Planets.length; i++) {
    if (Planets[i] > 7) {
      var longPlanets = Planets[i].push();
    }
    return longPlanets
  }
}

$.get('./data/animals.json', function getAnimals(data) {
  JSON.stringify(data);
  var animals = [];
  for (var i = 0; i < data.animals.length; i++) {
    animals.push(data.animals[i].type);
  }
  console.log("animals", animals);
})
