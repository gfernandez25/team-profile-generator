const Employee = require ('../lib/Employee');

test('creates an Employee object', () => {
    let employeeName = 'employeeName';
    let employeeID = 66;
    let employeeEmail = 'employee@test';
    let employeeRole = 'Employee'

    const employee = new Employee(employeeName, employeeID, employeeEmail);

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

    /*testing methods*/
    expect(employee.getName()).toEqual(employeeName);
    expect(employee.getId()).toEqual(employeeID);
    expect(employee.getEmail()).toEqual(employeeEmail);
    expect(employee.getRole()).toEqual(employeeRole);

});