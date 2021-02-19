const elements = ["Hydrogen","Helium","Lithium","Beryllium"];
const monsters = ["Animal","Bat ","Bear ","Behir "];
const field = document.querySelector('#header');

function init() {
  const element = elements[Math.floor(Math.random() * elements.length)];
  const monster = monsters[Math.floor(Math.random() * monsters.length)];

  field.textContent = `${element} ${monster}`;
}

init();
