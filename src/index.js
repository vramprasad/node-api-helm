const express = require('express');
const os = require('os');
const path = require('path');
require('dotenv').config();

console.log("Variable from deployment file : "+process.env.DEPLOYMENT_ENV);
const variablefromDep = process.env.DEPLOYMENT_ENV
/* console.log("From env: "+process.env.NODE_ENV);

const currentENV = (process.env.NODE_ENV).trim();
const envFile = `.env.${currentENV}`;
require('dotenv').config({
    path: path.resolve(process.cwd(), envFile)
  });
  
console.log(`Loaded environment: ${currentENV} from ${envFile}`); */

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/info', (req, res) => {
    const response = {
        currentTime: new Date().toISOString(),
        containerName: os.hostname(),
        dbURL: process.env.DB_URL,
        fromDep: variablefromDep  
    };
    res.json(response);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
