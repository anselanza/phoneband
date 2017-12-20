const express = require('express')
const app = express()
const multer  = require('multer')
const path = require('path')

const PORT = 3001

app.use(express.static('build'))

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
     cb(null, 'server/uploads/')
   },
   filename: function (req, file, cb) {
     cb(null, Date.now() + path.extname(file.originalname)) //Appending .jpg
   }
})

const upload = multer({ storage: storage });

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(PORT, () => {
  console.log('Example app listening on port', PORT);
})

app.post('/upload', upload.single('sample'), (req, res, next) => {
  console.log('got file upload', req.file);
  // req.file is the `sample` file
  // req.body will hold the text fields, if there were any
  res.send(req.file);
})
