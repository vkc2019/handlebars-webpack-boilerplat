const Handlebars = require('handlebars/runtime');
Handlebars.registerHelper('calculateAge', function (birthYear) {
    var age = new Date().getFullYear() - birthYear;
    if (age > 0) return `${age} years old`
    return 'Less than a year'
});
module.exports = Handlebars;
