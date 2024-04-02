#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1214;
console.log("Jahan Khuwab Wahan Hbl");
let userPin = await inquirer.prompt([
    {
        name: "pin",
        message: "please enter your pin",
        type: "number",
    },
]);
if (userPin.pin === myPin) {
    let operation = await inquirer.prompt([
        {
            name: "operation",
            message: "please select transaction type",
            type: "list",
            choices: ["Fastcash", "Cashwithdraw", "Balanceinquiry"],
        },
    ]);
    if (operation.operation === "Fastcash") {
        let Fastcash = await inquirer.prompt([
            {
                name: "amount",
                message: "please select amount",
                type: "list",
                choices: ["1000", "2000", "5000", "10000"],
            },
        ]);
        console.log("plesae collect your cash");
        myBalance -= Fastcash.amount;
        console.log("Your remaing balance is" + myBalance);
    }
    else if (operation.operation === "Cashwithdraw") {
        let CashWithdraw = await inquirer.prompt([
            {
                name: "amount",
                message: "please enter amount",
                type: "number",
            },
        ]);
        if (CashWithdraw.amount <= "10000" && CashWithdraw.amount >= "1") {
            if (CashWithdraw.amount % 500 === 0) {
                console.log("please collect your cash");
                myBalance -= CashWithdraw.amount;
                console.log(`your remaining balance is : ${myBalance}`);
            }
            else {
                console.log("please enter amount in divident of 500");
            }
        }
        else if (CashWithdraw.amount > "10000") {
            console.log("your account balance is insufficient for this transaction amount");
        }
        else if (CashWithdraw.amount < "1") {
            console.log("please enter valid amount");
        }
    }
    else if (operation.operation === "Balanceinquiry") {
        console.log(`Your account balance is: ${myBalance}`);
    }
}
else {
    console.log("please enter correct pin code");
}
