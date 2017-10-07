const pasargad = require('./Bank')

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

module.exports = Account;