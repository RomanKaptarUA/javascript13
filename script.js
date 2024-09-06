
// 1
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };
// user.mood = 'Happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log(`${key}:${user[key]}`);
// }

// const{name, age, hobby, premium} = user;
// console.log(name, age, hobby, premium);



//2

// const countProps = function (obj) {
//     return Object.keys
//   };
  
//   console.log(countProps({}));
//   console.log(countProps({ name: 'Mango', age: 2}));
  
//   console.log(countProps({mail: 'romankaptar82@gmail.com', isOnline: true, score: 500}));

  
//   const countProps = function (obj) {
//     const keys = Object.keys(obj);
//     return keys.length;
// };

// console.log(countProps({})); // 0
// console.log(countProps({ name: 'Mango', age: 2})); // 2
// console.log(countProps({mail: 'romankaptar82@gmail.com', isOnline: true, score: 500}));


//3











/* 
 * Типів транзацкій всього два. 
 * Можна покласти або зняти гроші з рахунку. 
 */ 
const Transaction = { 
    DEPOSIT: 'deposit', 
    WITHDRAW: 'withdraw', 
  }; 
   
  /* 
   * Кожна транзакція - це об'єкт з властивостями: id, type і amount 
   */ 
   
  const account = { 
    // Поточний баланс рахунку 
    balance: 0, 
   
    // Історія транзакцій 
    transactions: [], 
   
    /* 
     * Метод створює і повертає об'єкт транзакції. 
     * Приймає суму і тип транзакції. 
     */ 
    createTransaction(amount, type) {
        return {
            id: this.transactions.length +1,
            type,
            amount,
        }
    }, 
   
    /* 
     * Метод відповідає за додавання суми до балансу. 
     * Приймає суму танзакції. 
     * Викликає createTransaction для створення об'єкта транзакції 
     * після чого додає його в історію транзакцій 
     */ 
    deposit(amount) {
        const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
        this.transactions.push(transaction);
        this.balance += amount;
    }, 
   
    /* 
     * Метод відповідає за зняття суми з балансу. 
     * Приймає суму танзакції. 
     * Викликає createTransaction для створення об'єкта транзакції 
     * після чого додає його в історію транзакцій. 
     * 
     * Якщо amount більше, ніж поточний баланс, виводь повідомлення 
     * про те, що зняття такої суми не можливо, недостатньо коштів. 
     */ 
    withdraw(amount) {
        if(amount > this.balance) {
            console.log('Зняття такої суми не можливо, недостатньо коштів.');
            return;
        }
        const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
        this.transactions.push(transaction);
        this.balance -= amount;
    }, 
   
    /* 
     * Метод повертає поточний баланс 
     */ 
    getBalance() {
        return this.balance;
    }, 
   
    /* 
     * Метод шукає і повертає об'єкт транзакції по id 
     */ 
    getTransactionDetails(id) {
        return this.transactions.find(transaction => transaction === id);
    },
   
    /* 
     * Метод повертає кількість коштів 
     * певного типу транзакції з усієї історії транзакцій 
     */ 
    getTransactionTotal(type) {
        return this.transactions
        .filter(transaction => transaction.type === type)
        .reduce((total, transaction) => total + transaction.amount, 0);
    }, 
  };
account.deposit(100);
account.withdraw(50);
account.deposit(200);
console.log(account.getBalance()); 
console.log(account.getTransactionDetails(2));
