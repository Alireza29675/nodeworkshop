const Ninja = require('./Ninja')
const Samurai = require('./Samurai')
const Weapon = require('./Weapon')

const hamed = new Ninja('Hamed')
const yones = new Samurai('Yones')

const katana = new Weapon('katana');

hamed.useWeapon(katana);

hamed.fight(yones);

console.log(hamed)
console.log(yones)
