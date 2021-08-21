let inquirer = require('inquirer');
let emailValidator = require('email-validator');

exports.managerQuestions = function () {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'What is your name?',
                validate: managerName => {
                    if (managerName) {
                        return true;
                    } else {
                        console.log('Please enter your name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerId',
                message: 'what is your ID',
                validate: managerId => {
                    if ((!managerId) || (isNaN(managerId))) {
                        return "please enter a number";
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'What is your Email?',
                validate: managerEmail => {
                    if(emailValidator.validate(managerEmail)){
                        return true;
                    } else
                        return "please enter a valid email";
                }

            },
            {
                type: 'input',
                name: 'managerOfficeNbr',
                message: 'What is your Office Number?',
                validate: managerOfficeNbr => {
                    if ((!managerOfficeNbr) || (isNaN(managerOfficeNbr))) {
                        return "please enter a number";
                    }
                    return true;
                }

            },
        ])
}

exports.engineerQuestions = async function () {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'What is the engineer name?',
                validate: engineerName => {
                    if (engineerName) {
                        return true;
                    } else {
                        console.log('Please enter engineer name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerId',
                message: 'what is the engineer ID',
                validate: engineerId => {
                    if ((!engineerId) || (isNaN(engineerId))) {
                        return "please enter a number";
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'What is the engineer Email?',
                validate: engineerEmail =>  {
                    if(emailValidator.validate(engineerEmail)){
                        return true;
                    } else
                        return "please enter a valid email";
                }
            },
            {
                type: 'input',
                name: 'gitHubUsername',
                message: 'What is the gitHub Username?',
                validate: gitHubUsername => {
                    if (gitHubUsername) {
                        return true;
                    } else {
                        console.log('Please enter the gitHub Username!');
                        return false;
                    }
                }
            },
        ])
}
exports.internQuestions = async function () {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'What is the Intern name?',
                validate: internName => {
                    if (internName) {
                        return true;
                    } else {
                        console.log('Please enter Intern name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'internId',
                message: 'what is the Intern ID',
                validate: engineerId => {
                    if ((!engineerId) || (isNaN(engineerId))) {
                        return "please enter a number";
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'What is the Intern Email?',
                validate: internEmail =>  {
                    if(emailValidator.validate(internEmail)){
                        return true;
                    } else
                        return "please enter a valid email";
                }
            },
            {
                type: 'input',
                name: 'internSchool',
                message: 'To which school does the Intern belong ?',
                validate: internSchool => {
                    if (internSchool) {
                        return true;
                    } else {
                        console.log('Please enter a school!');
                        return false;
                    }
                }
            },
        ])
}

exports.addTeam = async function () {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'buildTeamChoice',
                message: 'Would you like to add a team member?',
                choices: [
                    {
                        name: 'Add Engineer',
                        value: 0
                    },
                    {
                        name: 'Add Intern',
                        value: 1
                    },
                    {
                        name: 'Finish Building Team',
                        value: 2
                    },
                ],
            }
        ]);
}