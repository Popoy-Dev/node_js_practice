const { error } = require('console')
const Employee = require('../models/Employee')

// show the list of Employees

const index = (req, res, next) => {

    Employee.find()
        .then(response => {
            res.json({
                response
            })
        }).catch(error => {
            res.json({
                message: 'An error occured!'
            })
        })
}

// show specific employee

const show = (req, res, next) => {
    const employeeId = req.body.employeeId
    Employee.findById(employeeId)
        .then(response => {
            res.json({
                response
            })
        }).catch(error => {
            res.json({
                message: 'An error occured!'
            })
        })
}

// add data

const store = (req, res, next) => {

    let employee = new Employee({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age,
    })
    employee.save()
    .then(response => {
        res.json({
           message: 'Employee Added Succesfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An Error Occured'
        })
    })
}

// update

const update = (res, req, next) => {
    let employeeId = req.body.employeeId

    let updateData = {
        name: req.body.name,
        designation: req.body.name,
        email: req.body.name,
        phone: req.body.name,
        age: req.body.name,
    }
    Employee.findByIdAndUpdate(employeeId, {$set: updateData})
    .then((response) => {
        res.json({
            message: 'Employee Edit Succesfully',
            response
        })
    })
    .catch((error) => {
        res.json({
            message: error
        })
    })
}

// delete an employee

const destroy = (req, res, next) => {

    let employeeId = req.body.employeeId

    Employee.findByIdAndRemove(employeeId)
    .then(response => {
        req.json({
            message: 'Successfully Deleted'
        })
    })
    .catch(error => {
        req.json({
            message: error
        })
    })
}

module.exports = {
    index, show, store, update, destroy
}