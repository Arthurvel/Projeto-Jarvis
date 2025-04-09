import express from 'express';

//import { createHistory,listHistory, deleteHistory, updateHistory, vizualizeHistory } from './controller';
//import { createUser,listUser, deleteUser, updateUser, vizualizeUser } from './controller';
//import { createReport,listReport, deleteReport, updateReport, vizualizeReport } from './controller';

const nodemailer = require('nodemailer');

const uuid = require('uuid');

const app = express()
const port = 8080;

mongoose.connect('')

const mongoose = require('mongoose');

app.use(express.json());

const usuarios = [
    {
        id:1, email:'ajvribeiro1@gmail.com.com', magicCode:null
    }
]

app.get('/', (req,res) =>{
    app.res.sendFile(__dirname + "/index.html");
});

app.post('/login', async (req, res) =>{
    const{email} = req.body
    const user = usuarios.find((u) => u.email === email);
    if (user){
        return res.send("User not found");
    }

    const magicCode = uuid.v4().substr(0,8)
    usuarios.magicCode = magicCode
    const mailOpition = {
        from:'ajv090701@gmail.com',
        to:email,
        subject:'Maigc Link',
        html:`
        <p>Click below</p>
        <a herf = "www.google.com">
         `
    };
    try {
        await transport.sendMail(mailOpition)
        res.send("magic link sent :)")
    }
    catch{
        res.send("magic link sent :)");
    }
});

app.get('/dashboard', (req, res)=>{
    const {email, code} = req.query
    const usuarios = users.find((u) => u.email === email && u. magicCode === code);
})



app.post("/history", createHistory);
app.get("/history", listHistory);
app.get("/history/:id",vizualizeHistory);
app.put("history",updateHistory);
app.delete("/history",deleteHistory);

app.post("/report", createReport);
app.get("/report", listReport);
app.get("/report/:id",vizualizeReport);
app.put("report",updateReport);
app.delete("/report",deleteReport);

app.post("/user", createUser);
app.get("/user", listUser);
app.get("/user/:id",vizualizeUser);
app.put("user",updateUser);
app.delete("/user",deleteUser);


app.listen(port, ()=> console.log("api ok :)"));