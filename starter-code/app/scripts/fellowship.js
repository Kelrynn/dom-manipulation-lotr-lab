console.log("Linked.");
var debug = true;

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',//aka Aragorn
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
   var midEarth = document.createElement("section");
   midEarth.id = "middle-earth";
  // inside, add each land as an article tag
  for (var i = 0; i < lands.length; i++){
    var art = document.createElement("article");
    art.id = lands[i];
    midEarth.appendChild(art);
    var h1 = document.createElement("h1");
    h1.innerHTML = lands[i];
    art.appendChild(h1);
  }
   body.appendChild(midEarth);
}
makeMiddleEarth();

// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  var shire = document.querySelector("article");
  var ol = document.createElement("ol");
  shire.appendChild(ol);
  for (var i = 0; i < hobbits.length; i++){
    var li = document.createElement("li");
    li.className = "hobbit";
    li.id = hobbits[i].split(" ")[0];
    li.innerHTML = hobbits[i];
    ol.appendChild(li);
  }
  // give each hobbit a class of hobbit
}
makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var ring = document.createElement("div");
  ring.id = "the-ring";
  // give the div a class of 'magic-imbued-jewelry'
  ring.className = "magic-imbued-jewelry";
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  ring.addEventListener("click",nazgulScreech);
  // add the ring as a child of Frodo
  var frodo = document.getElementById("Frodo");
  frodo.appendChild(ring);
}
keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  // create an aside tag
  var aside = document.createElement("aside");
  // attach an unordered list of the 'buddies' in the aside
  var ol = document.createElement("ol");

  for (var i = 0; i < buddies.length; i++) {
    var li = document.createElement("li");
    li.className = "buddies";
    li.id = buddies[i].split(" ")[0];
    li.innerHTML = buddies[i];
    ol.appendChild(li);
  }
  // insert your aside as a child element of rivendell
  aside.appendChild(ol);
  document.getElementById('Rivendell').appendChild(aside);
}
makeBuddies();

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  document.getElementById('Strider').innerHTML = "Aragorn";
}
beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var smallPeople = document.querySelectorAll(".hobbit");
  var elf = document.getElementsByTagName("ol")[1];
  for (var i = 0; i < smallPeople.length; i++) {
    elf.appendChild(smallPeople[i]);
  }
}
leaveTheShire();

// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}
forgeTheFellowShip();

// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}
theBalrog();

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
