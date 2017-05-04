const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const formDataValidation = require('./src/formDataValidation.js');
const orderFormFieldDefinitions = require('./src/orderFormFieldDefinitions.js');

app.set('views', './views');
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));

//can use sanitizebody and then name to prevent JavaScript cross-site scripting attacks
const showOrderDetails = function (req, res) {
    const millisecondWait = 2000;
    setTimeout(function() {
        res.render('orderDetails', orderFormFieldDefinitions.formFields(req));
    }, millisecondWait);
};

app.get('/', function (req, res) {
    res.render('index');
});

app.post('/order', function (req, res, next) {
    formDataValidation.validateForm(req, res, next);
}, function(req, res) {
    showOrderDetails(req, res);
});

app.listen(3000, function() {
    console.log('Listening on port 3000!')
});