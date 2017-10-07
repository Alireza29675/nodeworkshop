var Weapon = require('./Weapon')

class Ninja {
    constructor (name = 'Hatsumi') {
        this.name = name;
        this.isAlive = true;
        this.damage = Math.floor(Math.random() * 20) + 5
        this.weapon = new Weapon('freehands');
        this.health = 100;
    }
    fight (anotherOne) {
        if (!this.isAlive) return console.log(`A dead man cannot fight`)
        if (!anotherOne.isAlive) return console.log(`You cannot fight with a corpse`)
        this.health -= (anotherOne.damage + anotherOne.weapon.damage)/2
        anotherOne.health -= this.damage + this.weapon.damage;
        this.damage /= 1.1;
        anotherOne.damage /= 1.1;
        this.weapon.use();
        anotherOne.weapon.use();
        this.checkIfDead();
        anotherOne.checkIfDead();
    }
    useWeapon (weapon) {
        this.weapon = weapon;
    }
    checkIfDead () {
        if (this.health <= 0) {
            this.isAlive = false;
            console.log(`${this.name} is dead! Good Ninja -;<@`)
        }
    }
    rest () {
        this.damage *= 1.2;
        this.health *= 1.3;
    }
}

module.exports = Ninja;