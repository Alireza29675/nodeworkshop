class Ninja {
    constructor (name = 'Yakuza') {
        console.log('Gudaaa')
        this.isDead = false;
        this.name = name;
        this.health = 100
    }
    jump () {
        console.log(`${this.name} said: Hooop`)
        this.health -= 1;
    }
    fight (secondNinja) {
        if (this.isDead) {
            console.error(`You are dead and cannot fight dude! God bless you!`)
            return;
        }
        if (secondNinja.isDead) {
            console.error(`${secondNinja.name} is dead! you cannot fight with a corpse!`)
            return;
        }
        console.log(`${this.name} attacked to ${secondNinja.name}`)
        this.health -= 30
        secondNinja.health -= 45;
        if (this.health <= 0) {
            console.log(`${this.name} is dead!`)
            this.isDead = true;
        }
        if (secondNinja.health <= 0) {
            console.log(`${secondNinja.name} is dead!`)
            secondNinja.isDead = true;
        }
    }
}

const ninja1 = new Ninja('Hamed');
const ninja2 = new Ninja();
const jumung = new Ninja('Jumung');

ninja1.jump()
ninja1.jump()
ninja2.jump()
ninja2.jump()
ninja1.jump()
ninja2.jump()
ninja2.jump()
ninja2.jump()

ninja2.fight(ninja1)
ninja2.fight(ninja1)
jumung.fight(ninja2)
ninja2.fight(ninja1)

console.log(ninja1.health)