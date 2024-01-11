const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
// const path = require('path');
require('dotenv').config();
const connectDb = require('./database/db')
const qANDaModel = require('./models/qANDaModel')

const app = express();


const port = process.env.PORT || 4000;


app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));




app.get('/', (req, res) => {
  try {
    res.status(200).render("index");
  } catch (err) {
    console.log(err.message);
  }
});

app.get('/create', async (req, res) => {
  try {
      res.status(200).render("create");
  }
  catch (err) {
      console.log(err.message);
  }
});

app.post('/create', async (req, res) => {
  try {
      const data = req.body;
      const newQue = new qANDaModel({
          qAnda: data
      });
      const qAndaSaved = await newQue.save();
      console.log(qAndaSaved);
      res.status(201).redirect("/");
  }
  catch (err) {
      console.log(err)
  }
});

(async function() {
  try {
   await connectDb()
    
    setTimeout(() => {
      app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
      });
    }, 1000);
  } catch (err) {
    console.log(err.message);
  }
})();

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });