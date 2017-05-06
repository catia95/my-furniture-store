const formDataValidator = require('./formDataValidation.js');
require('./loadingIconAction.js');

console.log('In Index.js');
//TODO Change DOM elements id names in html to concise to html way - camel case or -

document.getElementById('firstName').addEventListener('blur', function() {
    //const fieldValue = document.getElementById(firstName).value;
    console.log('onBlur firstName');
    req = {body: {field: 'HELLO', lastname:'HIII'}};
    const validationResults = formDataValidator.validateFormField(req);
});