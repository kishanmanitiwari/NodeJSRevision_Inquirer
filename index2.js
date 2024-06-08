
import inquirer from 'inquirer';

console.log("Welcome to Pizza Ordering App!");

const questions = [
    {
        type: 'list',
        name: 'size',
        message: 'What size of pizza would you like?',
        choices: ['Small', 'Medium', 'Large']
    },
    {
        type: 'checkbox',
        name: 'toppings',
        message: 'Select your toppings (Press space to select, enter to submit):',
        choices: ['Pepperoni', 'Mushrooms', 'Onions', 'Sausage', 'Bacon', 'Extra cheese']
    },
    {
        type: 'confirm',
        name: 'confirm',
        message: 'Would you like to add drinks to your order?',
        default: false
    },
    {
        type: 'checkbox',
        name: 'drinks',
        message: 'Select your drinks:',
        choices: ['Coke', 'Pepsi', 'Sprite', 'Fanta', 'Water'],
        when: (answers) => answers.confirm
    }
];

inquirer.prompt(questions).then((answers) => {
    console.log('\nOrder summary:');
    console.log('Size:', answers.size);
    console.log('Toppings:', answers.toppings.join(', '));
    if (answers.confirm) {
        console.log('Drinks:', answers.drinks.join(', '));
    }
    console.log('\nThank you for your order!');
});
