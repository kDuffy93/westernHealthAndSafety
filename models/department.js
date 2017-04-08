let mongoose = require('mongoose');

var departmentSchema = new.mongoose.schema({

departmentName: {
    type: String,
    required: 'Employee first name is missing. Please enter one now.'
},

});

module.exports = mongoose.model('department', departmentSchema);
