var express = require("express");
var app = express();
app.use(express.static("public"));
app.use(express.json());

let data = {};
// let data = [];  // or an empty array depending on the instructions for your specific exam

const fs = require("fs");
const serverSideStorage = "../data/db.json";

fs.readFile(serverSideStorage, function (err, buf) {
    if (err) {
        console.log("error: ", err);
    } else {
        data = JSON.parse(buf.toString());
    }
    console.log("Data read from file.");
});

function saveToServer(data) {
    fs.writeFile(serverSideStorage, JSON.stringify(data), function (err, buf) {
        if (err) {
            console.log("error: ", err);
        } else {
            console.log("Data saved successfully!");
        }
    })
}

async function readMonths(){
    try{
        const data = fs.readFileSync(serverSideStorage, 'utf-8');
        return JSON.parse(data);
    } catch(error){
        console.error('Error reading months:', error);
        return [];
    }
}


// TODO: Create your backend API here:
app.get('/getmonths', async (req, res) =>{
    const months = await readMonths();
    res.json(months);
});


app.post('/setmonths', async (req, res) => {
    const { months } = req.body;
    const month = await readMonths();
    const newMonth = { months };
    month.parse;
    saveToServer(months); //Post by using this syntax for json: {"months": ["jan", "feb"]}
    res.status(201).json(newMonth);
});

app.put('/move/:fromindex/:toindex', async (req, res) =>{
    
    const { fromindex, toindex } = req.params;
    const months = await readMonths();
    const monthMoved = months.splice(fromindex, 1)[0]; // Does the splice and returns the month
    months.splice(toindex, 0, monthMoved);  // Inserts the month back into the array at the index

    saveToServer(months);
    res.status(201).json(months)
});

app.listen(3000);
