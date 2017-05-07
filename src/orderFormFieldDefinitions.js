const joi = require('joi');

exports.formFields = function (req, errors) {
    return {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        mobileNumber: req.body.mobileNumber,
        houseNumber: req.body.houseNumber,
        street: req.body.street,
        city: req.body.city,
        postcode: req.body.postcode,
        numberOfSofas: req.body.numberOfSofas,
        numberOfVintageChairs: req.body.numberOfVintageChairs,
        numberOfDinnerTables: req.body.numberOfDinnerTables,
        numberOfSideTables: req.body.numberOfSideTables,
        errors: errors
    }
};

//todo maybe add the fieldschema in here?

exports.schema = joi.object().keys({
    firstName: joi.string().alphanum().required(), //todo has to only be alpha!
    lastName: joi.string().alphanum().required(),
    email: joi.string().email().required(),
    houseNumber: joi.number().integer().required(),
    street: joi.string().alphanum().required(),
    postcode: joi.string().alphanum().required()
});

exports.retrieveFieldsToValidate = function (req) {
    return {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        houseNumber: req.body.houseNumber,
        street: req.body.street,
        postcode: req.body.postcode
    }
};