// Write your solution in this file!
let x = 'hi';
let y ='sam';
let s='hasna';
let m ='haddoud';
const employee = { name:'manel',streetAddress: "11 Broadway" };
function updateEmployeeWithKeyAndValue(employee, key, value){

//return     employee[key]=value;

  const newObj = { ...employee };
   newObj[key] = value;
   return newObj;


}

console.log(updateEmployeeWithKeyAndValue(employee, x, y));
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){

    employee[key] = value
    return employee;
}
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, s, m));

function deleteFromEmployeeByKey(employee, key){

    const newObj = { ...employee };
    delete newObj[key];

    return newObj

}
function  destructivelyDeleteFromEmployeeByKey(employee, key)
{

delete employee[key];
  return employee;
}