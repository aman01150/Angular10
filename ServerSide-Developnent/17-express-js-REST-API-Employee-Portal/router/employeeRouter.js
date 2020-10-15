const express = require('express');
const router = express.Router();
const uuid = require('uuid');

let employeeList = [{"id":"87088e5e-b7b7-4e1f-be13-7f57b68f397e","first_name":"Samaria","last_name":"Kiff","email":"skiff0@smugmug.com","gender":"Female","ip_address":"143.121.242.134","city":"Vnorovy"},
    {"id":"3416026e-7cbe-412a-b530-981aab2f68f2","first_name":"Rosemary","last_name":"Velden","email":"rvelden1@cisco.com","gender":"Female","ip_address":"15.246.249.135","city":"Guazhou"},
    {"id":"f0d1f7a0-899e-4698-9fb2-1e3d1d512621","first_name":"Eugen","last_name":"Beldham","email":"ebeldham2@tamu.edu","gender":"Male","ip_address":"89.92.239.98","city":"Gambang"},
    {"id":"04572dad-8636-4a8f-86fd-37416569cced","first_name":"Merla","last_name":"Vayne","email":"mvayne3@utexas.edu","gender":"Female","ip_address":"173.12.106.115","city":"Bandeirantes"},
    {"id":"3a18556c-6589-43c1-b790-1b99849445f4","first_name":"Terri","last_name":"McDuall","email":"tmcduall4@jiathis.com","gender":"Female","ip_address":"245.52.188.230","city":"Jeffersonville"},
    {"id":"3f1421d4-8ee2-4ef6-ad6c-a2392d4aaa8c","first_name":"Sabina","last_name":"Tyce","email":"styce5@scribd.com","gender":"Female","ip_address":"253.4.188.123","city":"Libertad"},
    {"id":"0e858714-02ea-40f5-943c-5771d2678e51","first_name":"Francisco","last_name":"Hambrick","email":"fhambrick6@php.net","gender":"Male","ip_address":"2.154.139.10","city":"Jingmen"},
    {"id":"2621dbe6-88d7-4a7a-9182-d641e138db33","first_name":"Gardie","last_name":"Rathmell","email":"grathmell7@microsoft.com","gender":"Male","ip_address":"47.92.208.3","city":"Tangshan"},
    {"id":"d4ebad0e-cfcd-4920-8d3e-f81a31090a77","first_name":"Rasla","last_name":"Jeffryes","email":"rjeffryes8@webs.com","gender":"Female","ip_address":"145.49.40.169","city":"Nggelok"},
    {"id":"45f45d89-8db1-4a84-aa72-de00185bfa4f","first_name":"Aluin","last_name":"Bogays","email":"abogays9@senate.gov","gender":"Male","ip_address":"13.105.193.207","city":"Lebu"},
    {"id":"d3c1b5bb-df73-494e-9d90-2c62836b2056","first_name":"Desiree","last_name":"Biaggiotti","email":"dbiaggiottia@prweb.com","gender":"Female","ip_address":"231.158.147.36","city":"Jiangkou"},
    {"id":"055c713b-1987-4c21-a009-1215186cea08","first_name":"Lin","last_name":"McTrustie","email":"lmctrustieb@ebay.com","gender":"Male","ip_address":"6.104.136.148","city":"Ul"},
    {"id":"1db306da-c25a-4aee-9ba2-404a647875b6","first_name":"Eugenio","last_name":"Farries","email":"efarriesc@howstuffworks.com","gender":"Male","ip_address":"197.201.244.179","city":"Huanglin"},
    {"id":"cec8d839-ced5-475c-b07a-e71d1c0871cc","first_name":"Burk","last_name":"Copello","email":"bcopellod@umich.edu","gender":"Male","ip_address":"91.155.12.165","city":"Guadalupe"},
    {"id":"d3ee04c4-78b1-479b-a00c-044042cb675e","first_name":"Zed","last_name":"Kedge","email":"zkedgee@mysql.com","gender":"Male","ip_address":"142.113.61.92","city":"Paris 15"}];

// GET all Employees
router.get('/', (request , response) => {
    response.status(200).json(employeeList);
});

// GET a Single employees
router.get('/:id', (request , response) => {
    let employeeId = request.params.id;
    let selectedEmployee = employeeList.find(employee => employee.id === employeeId );
    if(selectedEmployee){
        response.status(200).json(selectedEmployee)
    }
    else{
        response.status(404).json({msg : 'employee not found Dude'});
    }
});

// CREATE an Single employee
router.post('/', (request , response) => {
    let newEmployee = {
      id : uuid.v4(),
      first_name : request.body.first_name,
      last_name : request.body.last_name,
      email : request.body.email,
      ip_address : request.body.ip_address,
      gender : request.body.gender,
      city : request.body.city
    };
    employeeList.push(newEmployee);
    response.status(200).json({
        result : 'Employee Created',
        data : newEmployee
    });
});

// UPDATE an Single employee
router.put('/:id', (request , response) => {
    let employeeID = request.params.id;
    let updatedEmployee = {
        id : employeeID,
        first_name : request.body.first_name,
        last_name : request.body.last_name,
        email : request.body.email,
        ip_address : request.body.ip_address,
        gender : request.body.gender,
        city : request.body.city
    };
    let index = employeeList.map(employee => employee.id).indexOf(employeeID);
    employeeList.splice(index, 1, updatedEmployee);
    response.json({
        result : 'Employee is Updated',
        employees : updatedEmployee
    });
});

// DELETE an employee
router.delete('/:id', (request , response) => {
    let employeeID = request.params.id;
    let index = employeeList.map(employee => employee.id).indexOf(employeeID);
    employeeList.splice(index, 1);
    response.json({
        result : 'Employee is Deleted',
        employeeId : employeeID
    });
});

module.exports = router;
