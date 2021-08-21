let fs = require('fs');
const {managerQuestions, engineerQuestions, internQuestions, addTeam} = require('./utils/GenerateQuestions.service');
const {generateTeamMemberHtml} = require('./utils/htmlGenerator');
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
    while (answer !== 2) {
        let answerObject = (await addTeam());
        answer = answerObject.buildTeamChoice;

        if (answer == 0) {
            let engineerAnswers = await engineerQuestions();
            let engineer = new Engineer(engineerAnswers.engineerName,
                engineerAnswers.engineerId,
                engineerAnswers.engineerEmail,
                engineerAnswers.gitHubUsername)

            allTeamMembers.push(engineer)

        } else if (answer == 1) {
            let internAnswers = await internQuestions();
            let intern = new Intern(internAnswers.internName,
                internAnswers.internId,
                internAnswers.internEmail,
                internAnswers.internSchool)

            allTeamMembers.push(intern)
        } else {
            let templateHtml = ""
            let allMembersHTML = ""
            let reportHTML = ""

            console.log(allTeamMembers)

            templateHtml = fs.readFileSync(__dirname + '/src/template.html', 'utf8');
            allTeamMembers.forEach((member) => {
                allMembersHTML += generateTeamMemberHtml(member)
            })
            reportHTML = templateHtml.replace('{{team}}',allMembersHTML);

            fs.writeFileSync('./dist/index.html', reportHTML)

            console.log('index.html file generated');
        }
    }
}).catch((error) => {
    console.log(error)
});




