const express = require('express')
const app = express()
const multer  = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
     cb(null, 'server/uploads/')
   },
   filename: function (req, file, cb) {
     cb(null, Date.now() + path.extname(file.originalname)) //Appending .jpg
   }
})

const upload = multer({ storage: storage });

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})

app.post('/upload', upload.single('sample'), (req, res, next) => {
  console.log('got file upload', req.file);
  // req.file is the `sample` file
  // req.body will hold the text fields, if there were any
  res.send(req.file);
})
