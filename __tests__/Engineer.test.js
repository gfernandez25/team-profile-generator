const Engineer = require ('../lib/Engineer');

test('creates an Engineer object', () => {
    let engineerName = 'engineerName';
    let engineerID = 22;
    let engineerEmail = 'engineer@test';
    let engineerGitHubName = 'engineerGitHubName';
    let engineerRole = 'Engineer'

    const engineer = new Engineer(engineerName, engineerID, engineerEmail, engineerGitHubName);

    /*testing constructor*/
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.gitHubUsername).toEqual(expect.any(String));

    /*testing methods*/

    expect(engineer.getGithub()).toEqual(engineerGitHubName);
    expect(engineer.getRole()).toEqual(engineerRole);

});