describe("Account", function() {
  var account;

  beforeEach(function() {
    account = new Account;
  });

  it("should be able to deposit money", function() {
    account.deposit(1000.00);
    expect(account.currentBalance()).toEqual(1000.00);
  })

  it("should be able to withdraw money", function () {
    account.deposit(1000.00);
    account.withdraw(500.00);
    expect(account.currentBalance()).toEqual(500.00);
  });

  it("should be able to print statement", function () {
   account.deposit(1000.00, '10/01/2012');
   account.deposit(2000.00, '13/01/2012');

   account.withdraw(500.00, '14/01/2012');

   expect(account.printStatement()).toEqual("date || credit || debit || balance\n14/01/2012 || || 500 || 2500\n13/01/2012 || 2000 || || 3000\n10/01/2012 || 1000 || || 1000");
  });

});
