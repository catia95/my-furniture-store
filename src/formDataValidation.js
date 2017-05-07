const joi = require('joi');
const orderFormFieldDefinitions = require('./orderFormFieldDefinitions');

exports.validateForm = function (req, res, next) {
    console.log('Validating whole form...');

    joi.validate(orderFormFieldDefinitions.retrieveFieldsToValidate(req), orderFormFieldDefinitions.schema, function(err, value) {
        if(err === null) {
            console.log('Validation of whole form SUCCESSFUL');
            next();
        } else {
            console.log('Validation of whole form UNSUCCESSFUL');
            res.render('index', orderFormFieldDefinitions.formFields(req, err.details[0].message));
        }
    });
};

exports.validateFormField = function (req) {
    console.log('Validating field...');

    return joi.validate(orderFormFieldDefinitions.retrieveFieldsToValidate(req), orderFormFieldDefinitions.schema, function(err, value) {
        let returnValue;
        if(err === null) {
            console.log('Validation of fields SUCCESSFUL');
            returnValue = {};
        } else {
            console.log('Validation of fields UNSUCCESSFUL');
            returnValue = orderFormFieldDefinitions.formFields(req, err.details[0].message);
        }
        return returnValue;
    });
};