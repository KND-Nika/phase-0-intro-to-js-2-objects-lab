// Write your solution in this file!
const employee = {name: '', streetAddress:''}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    // create a copy of the employee object
    const copyObject = {...employee};
    // Update the value for the key
    copyObject[key] = value;
    // return the new object
    return copyObject;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    // create a copy of the employee object
    const copyObject = {...employee};
    // delete the key argument from the copy of the object
    delete copyObject[key];
    return copyObject;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // delete the key from the object
    delete employee[key];
    // return employee
    return employee;
}
