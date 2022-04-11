const fs = require('fs');
const multer = require('multer');
const express = require('express');
const app = express();
const path = require('path');


app.use('/', express.static(path.join(__dirname,'public')));

app.post('/upload', (req, res)=>{

    const storage = multer.diskStorage({
        destination: function(req, res, cb){
            cb(null, __dirname+'/uploads')
        },
        filename: function(req, file, cb){
            cb(null, file.originalname)
        }
    });
    
    const upload = multer({storage: storage}).single('myfiles');

    upload(req, res, (err)=>{
        console.log(req.file);
    });
})


const PORT = 5000;

app.listen(PORT, ()=>{console.log(`Server is listening at port ${PORT}`)})
