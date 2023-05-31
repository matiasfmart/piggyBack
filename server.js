import express from 'express';
import routes from './routes/routes.js';
import connectionDb from './connectionDb/connectionDb.js';


import 'dotenv/config.js'
const app = express();
const port = process.env.SERVER_PORT;


//midlewares de rutas
app.use(routes);


await connectionDb.sync().then(()=>{
    app.listen(port, ()=>{
        console.log("Server OK http://localhost:8080")
    });
});

