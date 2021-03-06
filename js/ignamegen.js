const elements = ["Hydrogen","Helium","Lithium","Beryllium","Boron","Carbon","Nitrogen","Oxygen","Fluorine","Neon","Sodium","Magnesium","Aluminium","Silicon","Phosphorus","Sulfur","Chlorine","Argon","Potassium","Calcium","Scandium","Titanium","Vanadium","Chromium","Manganese","Iron","Cobalt","Nickel","Copper","Zinc","Gallium","Germanium","Arsenic","Selenium","Bromine","Krypton","Rubidium","Strontium","Yttrium","Zirconium","Niobium","Molybdenum","Technetium","Ruthenium","Rhodium","Palladium","Silver","Cadmium","Indium","Tin","Antimony","Tellurium","Iodine","Xenon","Caesium","Barium","Lanthanum","Cerium","Praseodymium","Neodymium","Promethium","Samarium","Europium","Gadolinium","Terbium","Dysprosium","Holmium","Erbium","Thulium","Ytterbium","Lutetium","Hafnium","Tantalum","Tungsten","Rhenium","Osmium","Iridium","Platinum","Gold","Mercury","Thallium","Lead","Bismuth","Polonium","Astatine","Radon","Francium","Radium","Actinium","Thorium","Protactinium","Uranium","Neptunium","Plutonium","Americium","Curium","Berkelium","Californium","Einsteinium","Fermium","Mendelevium","Nobelium","Lawrencium","Rutherfordium","Dubnium","Seaborgium","Bohrium","Hassium","Meitnerium","Darmstadtium","Roentgenium","Copernicium","Ununtrium","Flerovium","Ununpentium","Livermorium","Ununseptium","Ununoctium"];
const monsters = ["Animal","Bat ","Bear ","Behir ","Beholder ","Boar ","Bookworm ","Brownie ","Bugbear ","Carrion crawler ","Catoblepas ","Cat","Cave fisher ","Centaur","Centipede ","Chimera ","Cockatrice ","Couatl ","Displacer beast ","Dog","Dragon","Dragon turtle ","Dragonfish ","Elemental ","Elephant ","Elf ","Genie ","Ghost ","Ghoul ","Giant ","Gnoll ","Gnome ","Goblin ","Golem","Golem","Halfling ","Harpy ","Hobgoblin ","Homonculous ","Hornet","Horse ","Hydra ","Hyena ","Imp ","Invisible stalker ","Jackal ","Jackalwere ","Kobold ","Korred ","Lich ","Lizard ","Lizard man ","Lycanthrope ","Manticore ","Medusa ","Men ","Mind flayer ","Minotaur ","Mud-man ","Mummy ","Nixie ","Nymph ","Ogre ","Ooze","Orc ","Owl ","Owlbear ","Pegasus ","Piercer ","Pseudodragon ","Puddings","Rakshasa ","Rat ","Ray ","Remorhaz ","Satyr ","Scorpion ","Selkie ","Shadow ","Skeleton ","Skunk ","Snake ","Spectre ","Spider ","Sprite ","Toad","Treant ","Troll ","Umber hulk ","Unicorn ","Vampire ","Wight ","Will o'wisp ","Wolf ","Wolfwere ","Wraith ","Wyvern ","Yeti ","Yuan-ti ","Zombie"];
const field = document.querySelector('#header');

function init() {
  const element = elements[Math.floor(Math.random() * elements.length)];
  const monster = monsters[Math.floor(Math.random() * monsters.length)];

  field.textContent = `${element} ${monster}`;
}

document.addEventListener("click", init);

init();

