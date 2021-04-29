const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')
const routes = require('./src/routes')

const app = express()
const port = process.env.PORT || 5000
app.use(cors());

app.use(cookieParser());

app.use(express.json());

app.use(routes)

app.listen(port, function() {
    console.log(`Server runing on port ${port}`)
});

(async () => {
    const database = require('./db');
    const Produto = require('./src/models/produto');
    const produtos = await Produto.findAll();
 
    try {
        const resultado = await database.sync();
    } catch (error) {
        console.log(error);
    }
})();