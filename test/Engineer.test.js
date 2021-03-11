// Starter file provided by Instructor (03/09/2021) AC

const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
    const testValue = "GitHubUser";
    const employee = new Engineer("Nelson", testValue);
    expect(employee.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const employee = new Engineer("Sam", testValue);
    expect(employee.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
    const testValue = "GitHubUser";
    const employee = new Engineer("Kim", testValue);
    expect(employee.getGithub()).toBe(testValue);
});
