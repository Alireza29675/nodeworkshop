const Weapon = require('./Weapon')

class Samurai {
    constructor (name = 'Yakuza') {
        this.name = name;
        this.isAlive = true;
        this.damage = Math.floor(Math.random() * 5) + 15
        this.weapon = new Weapon('freehands');
        this.health = 100;
    }
    fight (anotherOne) {
        this.health -= (anotherOne.damage + anotherOne.weapon.damage)/2
        anotherOne.health -= this.damage + this.weapon.damage;
        this.damage /= 1.1;
        anotherOne.damage /= 1.1;
        this.weapon.use();
        anotherOne.weapon.use();
        this.checkIfDead();
        anotherOne.checkIfDead();
    }
    checkIfDead () {
        if (this.health <= 0) {
            this.isAlive = false;
            console.log(`${this.name} is dead! Good Samurai -;<@`)
        }
    }
    rest () {
        this.damage *= 1.2;
        this.health *= 1.3;
    }
}

module.exports = Samurai;