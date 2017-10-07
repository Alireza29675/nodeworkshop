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

module.exports = pasargad;