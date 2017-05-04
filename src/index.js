const formDataValidator = require('./formDataValidation.js');
require('./loadingIconAction.js');

document.getElementById('firstName').onBlur = function() {
    //const fieldValue = document.getElementById(firstName).value;
    req = {body: {field: 'HELLO', lastname:'HIII'}};
    const validationResults = formDataValidator.validateFormField(req);
    console.log(validationResults.errors);
    //todo Change id names in html to concise to html way - camel case or -
};