'use strict';

class Account {
  constructor() {
    this.balance = 0.00;
    this.history = [];
  }

  get currentBalance() {
    return this.balance;
  }

  deposit(amount, date) {
    this.balance += amount;
    this.history.unshift(date + ' || ' + amount + ' || || ' + this.balance)
  }

  withdraw(amount, date) {
    this.balance -= amount;
    this.history.unshift(date + ' || || ' + amount + ' || ' + this.balance)
  }

  printStatement() {
    console.log("date || credit || debit || balance\n" + this.history.join("\n"));
  }

}
