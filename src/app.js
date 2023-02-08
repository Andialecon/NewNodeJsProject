const express = require('express');
const cors = require('cors');
const routes  = require('./routes');
const db = require('./db/database');
const { port } = require('./lib/config');
const app = express();

(async ()=>{
    try {
        await db.authenticate();
        await db.sync();
        console.log("Conectado a la base de datos");
    } catch (error) {
        throw new Error(error)
    }
})()

app.use(express.json());
app.use(cors());
app.use('/api', routes);
// app.use(notFound);
// app.use(error);

app.listen(port, ()=>{
    console.log("Servidor ejecutandose en el puerto:", port);
});
