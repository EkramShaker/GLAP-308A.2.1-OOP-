//Part One
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            proberty: ["hat", "sunglasses"]
        }
    },
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }
}
adventurer.inventory.forEach((each)=>
console.log(each));
console.log(`${adventurer.name}\n ${adventurer.health}`);
console.log(adventurer.roll());

//Part two
// Defining the Character class with the given requirements

class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }

  // Method to simulate a roll
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }
}
// Create Robin as an instance of Character
const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];

// Create Leo as a companion using the Character class
robin.companion = new Character("Leo");
robin.companion.type = "Cat";

// Create Frank as a companion of Leo
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

// Testing the roll method
robin.roll(); // Robin rolls with no modifier
robin.companion.roll(); // Leo rolls
robin.companion.companion.roll(); // Frank rolls

// Outputting details
console.log(robin);
console.log(robin.companion);
console.log(robin.companion.companion);

// Adventurer class extending Character
class Adventurer extends Character {
  constructor(name, role) {
    super(name);
    this.role = role;
    this.inventory.push("bedroll", "50 gold coins");
  }

  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
}

// Companion class extending Character
class Companion extends Character {
  constructor(name, type) {
    super(name);
    this.type = type;
  }

  follow() {
    console.log(`${this.name} the ${this.type} is following.`);
  }

  assistAttack() {
    console.log(`${this.name} the ${this.type} assists in the attack.`);
    super.roll();
  }
}

// Create Robin as an Adventurer
const robin = new Adventurer("Robin", "Warrior");
robin.inventory.push("sword", "potion", "artifact");

// Create Leo as a Companion
robin.companion = new Companion("Leo", "Cat");

// Create Frank as a Companion of Leo
robin.companion.companion = new Companion("Frank", "Flea");
robin.companion.companion.inventory.push("small hat", "sunglasses");

// Testing the new methods
robin.scout(); // Robin scouts ahead
robin.roll(); // Robin rolls
robin.companion.follow(); // Leo follows
robin.companion.assistAttack(); // Leo assists in the attack
robin.companion.companion.follow(); // Frank follows
robin.companion.companion.roll(); // Frank rolls

//Part Three

class Adventurer extends Character {
  constructor(name, role) {
    super(name);
    this.role = role;  // Specialized role for the adventurer
    this.level = 1;  // Starting level
    this.experience = 0;  // Starting experience points
    this.gold = 50;  // Starting with 50 gold coins
    this.inventory.push("bedroll", "50 gold coins"); // Initial inventory items
  }

  // Method to scout ahead
  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }

  // Method to attack an enemy
  attack() {
    console.log(`${this.name} attacks with their skill as a ${this.role}.`);
  }

  // Method to gain experience and potentially level up
  gainXP(points) {
    this.experience += points;
    console.log(`${this.name} gained ${points} experience points.`);
    
    // Check for level up
    if (this.experience >= this.level * 100) {
      this.levelUp();
    }
  }

  // Method to level up the character
  levelUp() {
    this.level += 1;
    this.experience = 0; // Reset experience after leveling up
    console.log(`${this.name} has leveled up to level ${this.level}!`);
  }

  // Method to buy an item
  buyItem(item, cost) {
    if (this.gold >= cost) {
      this.gold -= cost;
      this.inventory.push(item);
      console.log(`${this.name} bought ${item} for ${cost} gold coins.`);
    } else {
      console.log(`${this.name} doesn't have enough gold to buy ${item}.`);
    }
  }
}

class Companion extends Character {
  constructor(name, type) {
    super(name);
    this.type = type;  // The type of companion (e.g., Cat, Dog)
  }

  // Method for the companion to follow the adventurer
  follow() {
    console.log(`${this.name} the ${this.type} is following their adventurer.`);
  }

  // Method for the companion to assist in an attack
  assistAttack() {
    console.log(`${this.name} the ${this.type} assists in the attack!`);
    super.roll(); // Companion also rolls to assist
  }
}
// Creating Robin as an Adventurer
const robin = new Adventurer("Robin", "Warrior");
robin.inventory.push("sword", "potion", "artifact");

// Creating Leo as a Companion
robin.companion = new Companion("Leo", "Cat");

robin.companion.companion = new Companion("Frank", "Flea");
robin.companion.companion.inventory.push("small hat", "sunglasses");


robin.scout(); 
robin.attack(); 
robin.gainXP(120); 
robin.buyItem("shield", 30);

robin.companion.follow(); 
robin.companion.assistAttack();

robin.companion.companion.follow(); 
robin.companion.companion.assistAttack(); 
