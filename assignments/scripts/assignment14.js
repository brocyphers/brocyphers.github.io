// Problem 1
// Create JSON for each employee with the following details (first name, department, designation, salary, raise eligible)
// Sam, Tech, Manager, 40000, true
// Mary, Finance, Trainee, 18500, true
// Bill, HR, Executive, 21200, false
const employees = [
    {
        name: "Sam",
        department: "Tech",
        designation: "Manager",
        salary: 40000,
        raiseEligible: true
    },
    {
        name: "Mary",
        department: "Finance",
        designation: "Trainee",
        salary: 18500,
        raiseEligible: true
    },
    {
        name: "Bill",
        department: "HR",
        designation: "Executive",
        salary: 21200,
        raiseEligible: false
    }
];

console.log('Problem 1', employees);

// Problem 2
// Create JSON for the company with the following details (companyName, website, employees)
// Tech Stars, www.techstars.site, array of Employees
const company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees
}

console.log('Problem 2', company);

// Problem 3
// A new employee has joined the company. Update the JSON from problems 1 and 2 to reflect the addition of:
// Anna, Tech, Executive, 25600, false
function addEmployee(employeeName, employeeDepartment, employeeDesignation, employeeSalary, isRaiseEligible) {
    var newEmployee = {
        name: employeeName,
        department: employeeDepartment,
        designation: employeeDesignation,
        salary: employeeSalary,
        raiseEligible: isRaiseEligible
    }

    employees.push(newEmployee);
}

addEmployee("Anna", "Tech", "Executive", 25600, false);

console.log('Problem 3', employees);
console.log('Problem 3', company);

// Problem 4
// Given the JSON for the company, calculate the total salary for all company employees.
var totalSalary = 0;
for (const employee of employees) {
    totalSalary += employee.salary;
}

console.log('Problem 4', totalSalary);

// Problem 5
// It's raise time. If an employee is raise eligible, increase their salary by 10%. 
// Given the JSON of the company and its employees, write a function to update the salary for each employee 
// who is raised eligible, then set their eligibility to false.
for (const employee of employees) {
    if (employee.raiseEligible == true) {
        employee.salary += (employee.salary / 10);
        employee.raiseEligible = false;
    }
}

console.log('Problem 5', employees);

// Problem 6
// Some employees have decided to work from home. The following array indicates who is working from home. Use the 
// array to update the company JSON. For each employee, add another property called 'wfh' and set it to true of false
// Working from home: ['Anna', 'Sam']
const workFromHome = ['Anna', 'Sam'];
for (const employee of employees) {
    employee.wfh = workFromHome.includes(employee.name);
}

console.log('Problem 6', employees);