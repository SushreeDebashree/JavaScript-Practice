const accountId=123456
let accountEmail="contact2sushree@gmail.com"
var accountPassword="12345"
accountCity="Bangalore"
let accountState;

// accountId = 2//not allowed
accountEmail="mail2sdebashree@gmail.com"
accountPassword="121212"
accountCity="Bhubaneswar"
console.log(accountId);
/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
