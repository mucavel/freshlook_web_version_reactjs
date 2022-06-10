const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');

const db = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "freshlookdbreact"
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.listen(3001, () => {
    console.log('server runnig!!')
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

    const insertQuery = "INSERT INTO `clientes`(`nome`, `telefone`, `idade`, `corte`, `preco`, `dia`, `hora`, `observ`) VALUES (?,?,?,?,?,?,?,?)"

    db.query(insertQuery, [clientName, clientTel, clientAge, clientHairStyle, price, sessionDate, sessionTime, clientNotes], (err, result) => {
        if(err) console.log(err)
    })
})