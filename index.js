let inquirer = require('inquirer');
const {managerQuestions, engineerQuestions, internQuestions} = require('./utils/GenerateQuestions.service');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let allTeamMembers = []

managerQuestions().then(async (answers) => {
    let manager = new Manager(answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerOfficeNbr)

    allTeamMembers.push(manager)

    let answer = 0
    while(answer !== 2)
    {
        let answerObject = (await addTeam());
        answer = answerObject.buildTeamChoice;

        if (answer == 0) {
           let engineerAnswers = await engineerQuestions();
           let engineer = new Engineer (engineerAnswers.engineerName,
                engineerAnswers.engineerId,
                engineerAnswers.engineerEmail,
                engineerAnswers.gitHubUsername)

            allTeamMembers.push(engineer)
        }
        else if (answer == 1) {
            let internAnswers = await internQuestions();
            let intern = new Intern (internAnswers.internName,
                internAnswers.internId,
                internAnswers.internEmail,
                internAnswers.internSchool)

            allTeamMembers.push(intern)
        }
        else {
            // generate HTML
            console.log(allTeamMembers)
        }
    }
})
// .catch((error) => {
//     if (error.isTtyError) {
//         // Prompt couldn't be rendered in the current environment
//     } else {
//         // Something else went wrong
//     }
// });

//run this after manager object has been created
const addTeam = async function () {
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





