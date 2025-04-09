
const transport = nodemailer.createTransport({
    service: 'gmail', 
    auth:{
        type:'OAuth2',
        user:'ajv090701@gmail.com',
        accessToken:'ya29.ya29.a0AZYkNZilzdrAA-yRNc5ECfFwTudj8402FX51nzGJkc8oW6qa0FP4qblN1XMtWterlWYcEXwh5fQ9SeWzvv-pbfIMxWkn0EuY48aPYI3dXO_tO3gtrv_Im2yVOtXw4GZu2hbJZqRr81J_rIB991T_7Es78IZ445hmtC2NqR4HaCgYKAfASAQ4SFQHGX2MiZPyfILHhnQvWamoq7Boo5w0175'
    }
})

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
});

