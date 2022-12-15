require('dotenv').config(); 
const express = require('express'); 
const cors = require('cors'); 
const morganBody = require('morgan-body')
const loggerStream = require('./utils/handleLogger')
const dbConnectMongo = require('./config/mongo')
const {dbConnectPostgres} = require('./config/postgres')
const app = express();
const ENGINE_DB = process.env.ENGINE_DB

app.use(cors()); 

app.use(express.json())
app.use(express.static('storage'));
  

morganBody(app, {
    noColors:true,
    stream: loggerStream,
    skip: function(req, res){
        return res.statusCode < 400  
    }
})
const port = process.env.PORT || 3000; 


app.use('/api', require('./routes'));

app.listen (port,() =>{
    console.log(`App ready in: http://localhost:${port}`)
});

(ENGINE_DB === 'nosql')? dbConnectMongo(): dbConnectPostgres();

