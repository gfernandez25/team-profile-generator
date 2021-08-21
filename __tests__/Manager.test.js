const Manager = require ('../lib/Manager');

test('creates an manager object', () => {
    let managerName = 'managerName';
    let managerID = 99;
    let managerEmail = 'manager@test';
    let managerOffice = 1;
    let managerRole = 'Manager'

    const manager = new Manager(managerName, managerID, managerEmail, managerOffice);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));

    /*testing methods*/
    expect(manager.getOfficeNumber()).toEqual(managerOffice);
    expect(manager.getRole()).toEqual(managerRole);


});