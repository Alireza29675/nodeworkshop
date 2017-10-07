const weaponsDamages = {
    katana: 13,
    nanchico: 8,
    shuiken: 3
}

class Weapon {
    constructor (type) {
        if (weaponsDamages[type] !== undefined) {
            this.damage = weaponsDamages[type]
        } else {
            this.damage = 0;
        }
    }
    use () {
        if (this.damage > 3) this.damage--;
    }
}

module.exports = Weapon;