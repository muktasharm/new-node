//import dependancies and file
// index.js
const express = require('express');
const app = express();
const port = 3000;

// Define route
app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

// Define route 
app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});
   // define route 
  app.get('/greet', (req, res) => {
  const name = req.query.name || "Guest";

  res.json({
    message: `Hello ${name}, welcome to Express API`
  });
});

// Define route
app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

// Define route
app.get('/get', (req, res) => {
  res.json({ message: 'Hello World gwt' });
});

// define route 
app.get('/user', (req, res) => {
  res.status(200).json({
    id: 1,
    name: "Mukta Sharma",
    role: "DevOps Engineer",
    experience: "2+ years"
  });
});


// Define route
app.get('/aa', (req, res) => {
  res.json({ message: 'Hello World hjkhj' });
});


// Define route
app.get('/qr/a', (req, res) => {
  res.json({ message: 'Hello World' });
});

// Define route
app.get('/best', (req, res) => {
  res.json({ message: 'Hello World' });
});

// Define route
app.get('/test', (req, res) => {
  res.json({ message: 'Hello World' });
});
 
 
 
 
 
//connect to server
app.listen(port,(err)=>{
    if(err){
        console.log(err)
    }
    console.log("The server is connected successfully at port number" + " "+`${port}`);
});
 
