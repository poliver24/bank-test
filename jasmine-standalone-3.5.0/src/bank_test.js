var Account = function() {
  var balance = 0.00
  var history = []

  function currentBalance() {
    return balance;
  };

  function deposit(amount, date) {
    balance += amount;
    history.unshift(date + ' || ' +amount + ' || || ' + balance)
  };

  function withdraw(amount, date) {
    balance -= amount;
    history.unshift(date + ' || || ' + amount + ' || ' + balance)
  };

  function printStatement() {
    return "date || credit || debit || balance\n" + history.join('\n');
  };

  return {
    currentBalance: currentBalance,
    deposit: deposit,
    withdraw: withdraw,
    printStatement: printStatement
  }

}