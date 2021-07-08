class Ninja{
    constructor(ninjaName, speed=3, strength=3){
        this.name = ninjaName;
        this.speed = speed;
        this.strength = strength;
        this.health = 0;
    }
    sayName() {
        console.log(`My name is ${this.name}`);
    }
    showStats() {
        console.log(`Speed: ${this.speed}, Strength: ${this.strength}, Health: ${this.health}`);
    }
    drinkSake() {
        this.health += 10;
        console.log(`${ this.name } drank Sake and gained + ${this.health} health.`);
    }
}

let ninja1 = new Ninja('Nagisa', this.speed, this.strength);
    ninja1.sayName();
    ninja1.showStats();
    ninja1.drinkSake();
