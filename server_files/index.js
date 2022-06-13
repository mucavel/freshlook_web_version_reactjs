const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path')

const db = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "freshlookdbreact"
})

app.use(express.static(path.join(__dirname + "/public")))
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`server runnig on port ${PORT}`)
})

//--------------SEND DATA TO DATABASE-------------------//
app.get('/', (req, res) => {
    res.send('runnig')
})

app.post('/insert', (req, res) => {
    const clientName = req.body.clientName;
    const clientTel =  req.body.clientTel;
    const clientAge = req.body.clientAge;
    const clientHairStyle = req.body.clientHairStyle;
    const price = req.body.price;
    const sessionDate = req.body.sessionDate;
    const sessionTime = req.body.sessionTime;
    const clientNotes = req.body.clientNotes;

    const selectQuery = "SELECT `dia`, `hora` FROM `clientes` WHERE `dia`=? and `hora`=?"
    db.query(selectQuery, [sessionDate, sessionTime], (err, result) => {
        if(err){
            res.send({msg: "Ocorreu um erro. Por favor, tente mais tarde."})
        }else if(result.length === 0){
            const insertQuery = "INSERT INTO `clientes`(`nome`, `telefone`, `idade`, `corte`, `preco`, `dia`, `hora`, `observ`) VALUES (?,?,?,?,?,?,?,?)"
            db.query(insertQuery, [clientName, clientTel, clientAge, clientHairStyle, price, sessionDate, sessionTime, clientNotes], (err, result) => {
                if(err){
                    res.send({msg: "Ocorreu um erro. Por favor, tente mais tarde."})
                }else if(result.affectedRows == 1){
                    res.send({msg: "Agendado com Sucesso!"})
                }       
            })
        }else{
            res.send({msg: "Horário ocupado. Por favor, selecione outro."})
        }
    })
})
