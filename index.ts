import inquirer from "inquirer";
let myPin = 4568;
let myAmount = 9000;

let pinAns = await inquirer.prompt([
    {name: "Pincode",
      type: "number",
     message: "Enter Your Pin Code:"
    }
    
])

if (pinAns.Pincode === myPin){
    console.log("Welcome you're succesfully login your account")
    console.log(`Your current balance is: ${myAmount}`)
} else{
    console.log("Enter Correct Pincode")
}

let operationAnswer = await inquirer.prompt([
    { name:"Operation",
      type: "list",
       message: "Select an Operation:",
       choices: ["Withdraw Amount","Check Balance"]
    }
])

if(operationAnswer.Operation === "Withdraw Amount"){
    let withdrawAns = await inquirer.prompt([
        {
           name:"Amount" ,
           type:"number",
           message: "Enter the Amount To withdraw:"
        }
    ])

    if (withdrawAns.Amount > myAmount){
        console.log("You have infussient Balance");
     } else{
               myAmount-= withdrawAns.Amount
               console.log(`${withdrawAns.Amount}: Successfully Withdraw`)
               console.log(`your remaining balance is: ${myAmount}`)
    }
}
else if (operationAnswer.Operation=== "Check Balance"){
    console.log(`your remaining balance is ${myAmount}`)
}

console.log("Thank you so much")