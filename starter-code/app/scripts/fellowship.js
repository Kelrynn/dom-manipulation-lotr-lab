console.log("Linked.");
var debug = false;
var doomCounter = 1;

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

// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  var shire = document.querySelector("article");
  var ul = document.createElement("ul");
  shire.appendChild(ul);
  for (var i = 0; i < hobbits.length; i++){
    var li = document.createElement("li");
    li.className = "hobbit";
    li.id = hobbits[i].split(" ")[0];
    li.innerHTML = hobbits[i];
    ul.appendChild(li);
  }
  // give each hobbit a class of hobbit
}

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var ring = document.createElement("div");
  ring.id = "the-ring";
  // give the div a class of 'magic-imbued-jewelry'
  ring.className = "magic-imbued-jewelry";
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  ring.addEventListener("click",theOneRing);
  ring.style.zIndex = "3";
  // add the ring as a child of Frodo
  var frodo = document.getElementById("Frodo");
  frodo.appendChild(ring);
}

// Part 4


function makeBuddies() {
  // create an aside tag
  var aside = document.createElement("aside");
  // attach an unordered list of the 'buddies' in the aside
  var ul = document.createElement("ul");

  for (var i = 0; i < buddies.length; i++) {
    var li = document.createElement("li");
    li.className = "buddies";
    li.id = buddies[i].split(" ")[0];
    li.innerHTML = buddies[i];
    ul.appendChild(li);
  }
  // insert your aside as a child element of rivendell
  aside.appendChild(ul);
  document.getElementById('Rivendell').appendChild(aside);
}

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  document.getElementById('Strider').innerHTML = "Aragorn";
}

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var smallPeople = document.querySelectorAll(".hobbit");
  var elf = document.getElementsByTagName("ul")[1];
  for (var i = 0; i < smallPeople.length; i++) {
    elf.appendChild(smallPeople[i]);
  }
}

// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  var div = document.createElement("div");
  div.id = 'the-fellowship';
  document.getElementById('Rivendell').appendChild(div);
  var ul = document.createElement("ul");
  div.appendChild(ul);
  // add each hobbit and buddy one at a time to 'the-fellowship'
  for (var i = 0; i < 8; i++) {
    var member = document.getElementsByTagName("li")[0];
    ul.appendChild(member);
    alert(member.textContent + " has joined the party.")
  }
  // after each character is added make an alert that they have joined your party
}

// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  var gandy = document.getElementById('Gandalf');
  gandy.innerHTML = "Gandalf the White";
  gandy.style.background = 'white';
  gandy.style.border = "2px solid grey";
}

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert("The Horn of Gondor has been blown, Boromir has been killed by the Uruk-hai!");
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  var borry = document.getElementById('Boromir');
  borry.style.textDecoration = "line-through";
  // Remove Boromir from the Fellowship
  document.getElementsByTagName('ul')[2].removeChild(borry);

}

// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  console.log("casual zelda reference");
  var ul = document.createElement('ul');
  var mordor = document.getElementById('Mordor');
  mordor.appendChild(ul);
  ul.appendChild(document.getElementById('Frodo'));
  ul.appendChild(document.getElementById('Samwise'));

  // add a div with an id of 'mount-doom' to Mordor
  var div = document.createElement('div');
  div.id = "mount-doom";
  mordor.appendChild(div);
}

// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  var smeagol = document.createElement('div');
  smeagol.id = "gollum";
  var mordor = document.getElementById('Mordor');
  mordor.appendChild(smeagol);
  // Remove the ring from Frodo and give it to Gollum
  var ring = document.getElementById('the-ring');
  smeagol.appendChild(ring);
  // Move Gollum into Mount Doom
  document.getElementById("mount-doom").appendChild(smeagol);
}

// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  document.getElementById('mount-doom').removeChild(document.getElementById('gollum'));
  // remove all the baddies from the document
  document.getElementById('Mordor').style.background = "none";
  // Move all the hobbits back to the shire
  var hobitses = document.querySelectorAll(".hobbit");
  var ul = document.querySelector('ul');
  for (var i = 0; i < 4; i++) {
    ul.appendChild(hobitses[i]);
  }
}

function theOneRing(){
  nazgulScreech();
  if (doomCounter == 3){
    body.innerHTML = "The Ring has been returned to SAURON and the world is over.";
    body.style.textAlign = "center";
    body.style.color = "red";
    body.style.background = "black";
    body.style.boxSizing = "border-box";
    body.style.padding = "100px";
    body.style.fontSize = "125px";
  }
  var parent = this.parentElement;
  parent.style.opacity = "0";
  setTimeout(function(){parent.style.opacity = "1";},3000);
  doomCounter++;
}

var chapter = 0;

function story(){
  // if (chapter > 0){
  //   this.innerHTML = "Chapter: " + chapter +"\nNext Chapter";
  // } else (chapter === 12){
  //   this.innerHTML = "Adventure Reset!";
  // }

  switch (chapter){
    default:
      this.innerHTML = "Chapter: " + chapter +"\nNext Chapter";
      break;
    case 11: 
      this.innerHTML = "Reset Adventure?"
      break;
    case 12:
      this.innerHTML = "Are you sure?"
      break;
      case 0:
        this.innerHTML = "Let's Go!"
        break;

  }


  var funcs = [
    makeMiddleEarth,
    makeHobbits,
    keepItSecretKeepItSafe,
    makeBuddies,
    beautifulStranger,
    leaveTheShire,
    forgeTheFellowShip,
    theBalrog,
    hornOfGondor,
    itsDangerousToGoAlone,
    weWantsIt,
    thereAndBackAgain];
  chapter <= 11 ? funcs[chapter++]() : resetAdventure();

}

function createButton(){
  var button = document.createElement("button");
  button.innerHTML = "Begin Adventure!";
  body.appendChild(button);
  button.style.position ="absolute";
  button.style.bottom = "0";
  button.style.zIndex = "1";
  button.addEventListener("click",story);
}

function resetAdventure(){
  chapter = 0;
  body.removeChild(document.getElementById("middle-earth"));
}
createButton();




