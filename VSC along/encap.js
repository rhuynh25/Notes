// Using Encapsulation with private properties

class Account{

#balance = 0; // Private Property to store the account balance

// Method to deposit money from our account

  deposit(amount){
    this.#balance += amount; //Think of .#balance is 0 cause it carries that property
    console.log(`Deposited: $${amount}`);
  }


  withdraw(amount){
    if (this.#balance >= amount){
      this.#balance -= amount;
      console.log(`Withdrawn $${amount}`);

    }else {
      console.log("No Funds")
    }
  }

  getbalance(){

  console.log(`Current Balance: $ ${this.#balance}`);
  }
}

const acc1 = new Account();

acc1.deposit(100);
acc1.withdraw(30);
acc1.getbalance();