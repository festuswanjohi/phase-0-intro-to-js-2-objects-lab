const employee = {
  name: "festus",
  streetAddress: "223 Nairobi",
};
function updateEmployeeWithKeyAndValue(obj, key, value) {
  return { ...obj, [key]: value };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}
function deleteFromEmployeeByKey(employee, key) {
  const myObj = { ...employee };
  delete myObj[key];
  return myObj;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
