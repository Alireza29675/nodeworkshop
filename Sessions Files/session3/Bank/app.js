const Person = require('./Person')
const Account = require('./Account')

const shohreh = new Person('Shohreh', 'Female', 18);
const amir = new Person('Amir', 'Male', 21);
const yones = new Person('Yones', 'Male', 13);

amir.addAccount(1234, 150);
yones.addAccount(1379, 10);
shohreh.addAccount(7171, 200);
shohreh.addAccount(7271, 0);

amir.accounts[0].diposite(50);
amir.accounts[0].withdraw(100, 1234);
amir.accounts[0].withdraw(30, 1234);

const shomareCardeAmir = amir.accounts[0].code;
console.log(shomareCardeAmir)

shohreh.accounts[0].sendMoneyToCartByCode(shomareCardeAmir, 50, 7171);

console.log(amir.accounts[0].amount)
console.log(shohreh.accounts[0].amount)