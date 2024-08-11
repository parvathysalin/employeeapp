const mongoose=require('mongoose');
const employeedetailsschema = mongoose.Schema({
    EmpName: String,
    designation: String,
    empId: String,
    img_url: String,
  });
  const employeedetails=mongoose.model('employeedetail',employeedetailsschema);
  module.exports=employeedetails;
  