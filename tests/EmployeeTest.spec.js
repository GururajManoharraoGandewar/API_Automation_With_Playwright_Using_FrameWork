import { test } from '../fixture/GlobalFixture.js';
import { JsonReader } from '../helper/JsonReader.js';

let id;

test("Get All Employees", async({employeeServices})=>{

    const response = await employeeServices.getAllEmployees();

    const responsePayload = await response.json();
    console.log(responsePayload);

    console.log(await response.status());

    console.log(await response.statusText());

    console.log(await response.headers());
   
   
});

test("Create Employee",async({employeeServices})=>{

    const response = await employeeServices.createEmployee( await JsonReader.readJsonReader('CreateData'));

    const responsePayload = await response.json();
    console.log(responsePayload);

    console.log(await response.status());

    console.log(await response.headers());

    id = await responsePayload.id;

   
});

test("Update Employee",async({employeeServices})=>{
    const response = await employeeServices.updateEmployee(id,JsonReader.readJsonReader('UpdateEmployeeTestData'));

    const responsePayload = await response.json();
    console.log(responsePayload);

    console.log(await response.status());

    console.log(await response.headers());



});

test("Get Employeeinformation",async({employeeServices})=>{
    const response = await employeeServices.getEmployee(id);

    const responsePayload = await response.json();
    console.log(responsePayload);

    console.log(await response.status());

    console.log(await response.headers());

 
})

test("delete employee information",async({employeeServices})=>{
    

    const response = await employeeServices.deleteEmployee(id);

    console.log(await response.status());

    console.log(await response.headers());

 
    
});

