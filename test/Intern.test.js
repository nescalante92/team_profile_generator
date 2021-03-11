// Starter file provided by Instructor (03/09/2021) AC

const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
    const testValue = "UNCC";
    const employee = new Intern("Parker", testValue);
    expect(employee.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const employee = new Intern("James", testValue);
    expect(employee.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
    const testValue = "CPCC";
    const employee = new Intern("Cam", testValue);
    expect(employee.getSchool()).toBe(testValue);
});
