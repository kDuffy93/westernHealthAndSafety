let mongoose = require('mongoose');

var userSchema = new.mongoose.schema({

firstName: {
    type: String,
    required: 'Employee first name is missing. Please enter one now.'
},
surName: {
  type: String,
  required: 'Employee surname is missing. Please enter one now.'
},
departmentID: {
  departmentID:[
        {type: Schema.Types._id, ref: 'department'}
      ]
}


});

module.exports = mongoose.model('user', userSchema);
