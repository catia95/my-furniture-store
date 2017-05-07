const formDataValidator = require('./formDataValidation.js');
require('./loadingIconAction.js');

console.log('In Index.js');
//TODO Change DOM elements id names in html to concise to html way - camel case or -
//TODO Have to ensure onBlur event called before clicking submit button

function validateField(fieldId, fieldValue) {
    const req = {body: {[fieldId]: fieldValue}};
    console.log(req);
    return formDataValidator.validateFormField(req).errors;
}

function flagValidationErrors(error, fieldId, fieldErrorId, fieldLabel) {
    if (error.toLowerCase().includes(fieldId.toLowerCase())){
        const stringToReplace = "\"" + fieldId + "\"";
        error = error.replace(stringToReplace, fieldLabel);
        document.getElementById(fieldErrorId).innerHTML = error;
    } else {
        console.log('Validation successful for fieldId: ' + fieldId);
    }
}

function inlineValidation(event) {
    const fieldId = event.target.id;
    const fieldValue = event.target.value;

    const validationErrors = validateField(fieldId, fieldValue);
    console.log(validationErrors);

    const fieldLabel = event.srcElement.labels[0].innerText.replace(':', ' ');
    flagValidationErrors(validationErrors, fieldId, fieldId+'Error', fieldLabel)
}

//TODO Send through more than one field otherwise always errors!

document.getElementById('firstName').onblur = function(event) {
    console.log(event);
    inlineValidation(event);
};

document.getElementById('lastName').onblur = function(event) {
    console.log(event);
    inlineValidation(event);
};
