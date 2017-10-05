class Bank {
    constructor () {
        this.accounts = []
    }
    getCardByCode (cartId) {
        for (let account of this.accounts) {
            if (account.code == cartId) return account;
        }
    }
}

const pasargad = new Bank()


class Account {
    constructor (owner, password, amount = 0) {
        pasargad.accounts.push(this)
        const randomNumber = Math.floor(Math.random() * 8999) + 1000
        this.code = 'C' + randomNumber;
        this.password = password;
        this.owner = owner;
        this.amount = amount;
    }
    diposite (amount) {
        this.amount += amount;
    }
    withdraw (amount, password) {
        if (this.checkPassword(password)) {
            if (!this.haveAmount(amount)) {
                console.error(`You don't have that much money in your account ${this.owner.name}!`)
            } else {
                this.amount -= amount;
            }
        } else {
            console.error(`Passowrd is wrong!`)
        }
    }
    checkPassword (password) {
        return this.password === password;
    }
    haveAmount (amount) {
        return this.amount >= amount
    }
    sendMoney (account, amount, password) {
        if (this.checkPassword(password) && this.haveAmount(amount)) {
            this.withdraw(amount, password);
            account.diposite(amount);
        }
    }
    sendMoneyToCartByCode (code, amount, password) {
        this.sendMoney(
            pasargad.getCardByCode(code),
            amount,
            password
        )
    }
}

class Person {
    constructor (name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.accounts = [];
    }
    addAccount (password, amount = 0) {
        if (this.age < 18) {
            console.error(`Sorry, you under 18 ${this.name}!`)
            return;
        }
        this.accounts.push(new Account(this, password, amount))
    }
}

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