const express = require('express');

const app = express();
const port = process.env.PORT || 4000;


app.listen(
    "/", (req, res) =>{
        res.send('Pagina inicio')
    }
)


app.listen(port);