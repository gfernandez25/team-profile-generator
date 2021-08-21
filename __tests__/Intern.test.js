const Intern = require ('../lib/Intern');

test('creates an Intern object', () => {
    let internName = 'InternName';
    let internID = 88;
    let interEmail = 'Intern@test';
    let internSchoolName = 'schoolName';
    let internRole = 'Intern'

    const intern = new Intern( internName, internID, interEmail, internSchoolName);

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));

    /*testing methods*/
    expect(intern.getSchool()).toEqual(internSchoolName);
    expect(intern.getRole()).toEqual(internRole);
});