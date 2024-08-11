const mongoose = require("mongoose");
//Write missing code 
mongoose
  .connect('mongodb+srv://parvathyysalin:itsme@cluster0.84vpvmh.mongodb.net/employeeDB?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
