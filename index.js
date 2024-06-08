import inquirer from "inquirer";
//User info system -> Name-input , Gender-list , Course-checkbox, MobNum-mobNumber , Confirm-confirm
//fs.writeFile(input)-> File
const questions = [
  //Array of Object -> Questions
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "list",
    name: "favColor",
    message: "What is your favorite color?",
    choices: ["Red", "Blue", "Green", "Black"],
  },
];

(async ()=> {
  try {
    const answer = await inquirer.prompt(questions);

  //promise - then handle //Handling user request
  console.log("Hello " + answer.name + "!");
  console.log("Your fav color is " + answer.favColor);
    
  } catch (error) {
    throw new error;
  }
  

})();



