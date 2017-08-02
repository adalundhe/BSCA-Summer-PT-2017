class Bank{
  constructor(totalFunds,numAccounts,accounts){
    this.totalFunds = totalFunds
    this.numAccounts = numAccounts
    this.accounts = accounts
  }

  getFunds(){
    return this.totalFunds
  }
  setFunds(funds){
    this.totalFunds = funds
  }
}

// The ES5 constructor function is functionally equivalent to
// the ES6 class. However the ES6 syntax is much cleaner and
// its purpose is more transparent.
function BankES5(totalFunds, numAccounts, accounts){
  this.totalFunds = totalFunds
  this.numAccounts = numAccounts
  this.accounts = accounts

  function getFunds(){
    return this.totalFunds
  }
}
