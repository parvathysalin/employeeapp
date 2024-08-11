const express = require("express");
const cors = require("cors");
require('./connection');
const employeemodel=require('./model/employeedetails')
const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());

//Write missing code here
app.get("/get", async (req, res) => {
  try {
    let data = await employeemodel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

app.post("/add", async (req, res) => {
  try {
    const item = req.body;
    const datasave = new employeemodel(item);
    const saveddata = await datasave.save();
    res.status(200).send({ message: 'Employee Added' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send({ message: 'Error occurred while saving data' });
  }
});
app.delete('/delete/:id',async(req,res)=>{
  try{
      await employeemodel.findByIdAndDelete(req.params.id);
      res.send('deleted successfully')}
      catch(error){
          console.log(error)
      }
      
  })


// Write GET API Code


app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
