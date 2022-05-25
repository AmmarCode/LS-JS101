import readline from "readline-sync";

//  welcome user
console.log("Welcome to the simple calculator");

// create a prompt helper function to console log questions
const prompt = (message) => {
  console.log(`=> ${message}`);
};

// Validate the entered value is a valid number
const invalidNum = (num) => {
  return String(num).trimStart() === "" || Number.isNaN(num);
};

// ask user to enter a number
const getNum1 = () => {
  prompt("Enter a number you want to use in a math operation:");
  let num1 = Number(readline.question());
  while (invalidNum(num1)) {
    prompt("You entered an invalid value, enter a number...");
    num1 = Number(readline.question());
  }
  return num1;
};

//  ask user to enter another number
const getNum2 = () => {
  prompt("Enter the other number:");
  let num2 = Number(readline.question());
  while (invalidNum(num2)) {
    prompt("You entered an invalid value, enter a number...");
    num2 = Number(readline.question());
  }
  return num2;
};

//  ask user to enter the operation
const getMathOperation = () => {
  prompt("Choose your math operation: 1)Add 2)Subtrct 3)Multiply 4)Divide");
  let mathOperation = readline.question();
  while (
    !mathOperation === "" ||
    !["1", "2", "3", "4"].includes(mathOperation)
  ) {
    prompt(
      "Enter the number of your math operation, don't type anything else!"
    );
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
  prompt("Would you like to calculate another operation?\n Press Enter to continue or 'Q' to quit.")
  let repeat = readline.question().toLowerCase();
  if (repeat === 'q') {
    prompt("Thank you for using simple calculator, see you later! ")
  } else {
    calculator()
  }
};

// set timeout before starting the calculator
setTimeout(calculator, 1500);
