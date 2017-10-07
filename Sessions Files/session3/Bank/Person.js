const Account = require('./Account')

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

module.exports = Person;