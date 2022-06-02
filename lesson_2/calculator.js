import readline from "readline-sync";
import { createRequire } from "module"; // Bring in the ability to create the 'require' method

const require = createRequire(import.meta.url); // construct the require method
const MESSAGES = require("./calculatorMessages.json");

// get messages in specified language
const messages = (message, lang='en') => {
  return MESSAGES[lang][message]
}

//  welcome user
console.log(messages('welcome', 'ar'));

// helper function to console log questions
const prompt = (message) => {
  console.log(`=> ${message}`);
};

// Validate the entered value is a valid number
const invalidNum = (num) => {
  return String(num).trimStart() === "" || Number.isNaN(num);
};

// ask user to enter a number
const getNum1 = () => {
  prompt(messages('getFirstNumber', 'ar'));
  let num1 = Number(readline.question());
  while (invalidNum(num1)) {
    prompt(messages("errorNumber", 'ar'));
    num1 = Number(readline.question());
  }
  return num1;
};

//  ask user to enter another number
const getNum2 = () => {
  prompt(messages("getSecondNumber", 'ar'));
  let num2 = Number(readline.question());
  while (invalidNum(num2)) {
    prompt(messages("errorNumber", 'ar'));
    num2 = Number(readline.question());
  }
  return num2;
};

//  ask user to enter the operation
const getMathOperation = () => {
  prompt(messages("getMathOperation", 'ar'));
  let mathOperation = readline.question();
  while (
    !mathOperation === "" ||
    !["1", "2", "3", "4"].includes(mathOperation)
  ) {
    prompt(messages("errorMathOperation", 'ar'));
    prompt("1)Add 2)Subtrct 3)Multiply 4)Divide");
    mathOperation = readline.question();
  }
  return mathOperation;
};

//  calculate the operation and return the result
const calculator = () => {
  const num1 = getNum1();
  const num2 = getNum2();
  const mathOperation = getMathOperation();

  switch (mathOperation) {
    case "1":
      console.log(`${num1} + ${num2} = ${num1 + num2}`);
      break;
    case "2":
      console.log(`${num1} - ${num2} = ${num1 - num2}`);
      break;
    case "3":
      console.log(`${num1} x ${num2} = ${num1 * num2}`);
      break;
    case "4":
      console.log(`${num1} / ${num2} = ${(num1 / num2).toFixed(2)}`);
      break;
  }
  // Ask user to keep using the calculator or to quit
  prompt(messages("continueCalculator", 'ar'));
  let repeat = readline.question().toLowerCase();
  if (repeat === "q") {
    prompt(messages('bye', 'ar'));
  } else {
    calculator();
  }
};

// set timeout before starting the calculator
setTimeout(calculator, 1500);
