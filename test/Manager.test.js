const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
    const testValue = 100;
    const employee = new Manager("Luke", testValue);
    expect(employee.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const employee = new Manager("Tim", testValue);
    expect(employee.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
    const testValue = 100;
    const employee = new Manager("Tom", testValue);
    expect(employee.getOfficeNumber()).toBe(testValue);
});
