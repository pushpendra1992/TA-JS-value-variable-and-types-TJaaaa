/*
🎖 Write a program to calculate the total price of your phone purchase. With these conditions
 * [ ] You will keep purchasing phones (hint: loop!) until you run out of bank balance.
 * [ ] You'll also buy accessories for each phone as long as your purchase amount is below your spending threshold.
 * [ ] After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted like ($334.76).
 * [ ] Finally, check the amount against your bank account balance to see if you can afford it or not.
*/

const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;
let bank_amount = bank_balance;

for (let i = 1; bank_balance > PHONE_PRICE; i++) {
    bank_balance -= PHONE_PRICE;
    amount += PHONE_PRICE;
    if (SPENDING_THRESHOLD >= amount) {
        amount += ACCESSORY_PRICE;
    }
}
amount += amount * 0.08;
amount = amount.toFixed(2)
console.log(amount);
(bank_balance > amount) ? alert("you can afford it"): alert("you can not afford it")
// ⛑ Answer of the above will `$334.76`.