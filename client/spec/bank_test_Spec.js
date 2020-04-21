describe("Account", function() {
  var account;

  beforeEach(function() {
    account = new Account;
  });

  it("should be able to deposit money", function() {
    account.deposit(1000.00);
    expect(account.balance).toEqual(1000.00);
  })

  it("should be able to withdraw money", function () {
    account.withdraw(500.00);
    expect(account.balance).toEqual(-500.00);
  });

  describe("Feature Test", function() {

    
    it("should be able to print statement", function () {
      spyOn(console, 'log');

      account.deposit(1000.00, '10/01/2012');
      account.deposit(2000.00, '13/01/2012');
      
      account.withdraw(500.00, '14/01/2012');

      account.printStatement();
      
      expect(console.log).toHaveBeenCalledWith("date || credit || debit || balance\n14/01/2012 || || 500 || 2500\n13/01/2012 || 2000 || || 3000\n10/01/2012 || 1000 || || 1000");
    });
  });
    
});
