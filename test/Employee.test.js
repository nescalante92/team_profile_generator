// Starter file provided by Instructor (03/09/2021) AC

const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("person");
});

test("Can set name via constructor arguments", () => {
    const name = "Nelson";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test("Can set id via constructor argument", () => {
    const testValue = 1000;
    const employee = new Employee("Bob", testValue);
    expect(employee.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
    const testValue = "email@gmail.com";
    const employee = new Employee("Peter", testValue);
    expect(employee.email).toBe(testValue);
});

test("Can get name via getName()", () => {
    const testValue = "Jen";
    const employee = new Employee(testValue);
    expect(employee.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
    const testValue = 500;
    const employee = new Employee("Kim", testValue);
    expect(employee.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
    const testValue = "email@yahoo.com";
    const employee = new Employee("Sam", testValue);
    expect(employee.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const employee = new Employee("Karen", testValue);
    expect(employee.getRole()).toBe(testValue);
});
