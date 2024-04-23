#! /usr/bin/env node
import inquirer from "inquirer";
// printing a welcome message
console.log("\n\twellcome to \`Npxwithkiran\` - CLI Simple calculator");
//asking questions from users through inquirer
let answers = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "secondNumber" },
    {
        message: "Select one Operation to perform Operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Division", "Multiplication"],
    },
]);
// conditional statments if else
if (answers.operator === "Addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "Subtractions") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.operator === "Division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
console.log("Invalid Input");
