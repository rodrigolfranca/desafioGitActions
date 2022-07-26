const fs = require("fs");

function readData() {

    const raw = fs.readFileSync("./users.json")
    const data = JSON.parse(raw);
    return data;

}

function writeData(data) {

    const raw = JSON.stringify(data);
    fs.writeFileSync('./users.json', raw);
    return false;    
    
}

module.exports = {readData, writeData}