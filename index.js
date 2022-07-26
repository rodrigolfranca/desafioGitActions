const express = require('express');
const app = express();

const { readData, writeData } = require('./controller/JSONController');

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {

    try {
        const users = readData();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(501).json({'message':'Error trying to read data bank.'});
    }

});

app.post('/add', (req, res) => {

    
    const { user } = req.body;
    try {
        const users = readData()
        users.push(user)
        writeData(users);
        res.status(200).json({'message':'Data Updated.'});
    } catch(error) {
        console.log(error);
        res.status(501).json({'message':'Error trying to update the data.'})
    }

});

app.listen(process.env.PORT, () => console.log("Servidor Aberto em "+process.env.PORT));