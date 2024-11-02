class Character {
    #name;
    #health;

    constructor(name, health) {
        this.#name = name;
        this.#health = health
    }

    attack() {
        return 10;
    }

    takeDamage(damage) {
        this.#health -= damage;
    }

    getHealth() {
        return this.#health;
    }
    
    getName() {
        return this.#name;
    }
}

class Warrior extends Character {
    constructor(name, health) {
        super(name, health);
    }

    attack(){
        return super.attack() * 2;
    }
}

class Mage extends Character {
    constructor(name, health) {
        super(name, health);
    }

    attack() {
        return super.attack() + 5;
    }
}

let warrior = new Warrior('Mark', 100);
let mage = new Mage('Carl', 100);

mage.takeDamage(warrior.attack());
warrior.takeDamage(mage.attack());
console.log(warrior.getHealth());
console.log(mage.getHealth());
