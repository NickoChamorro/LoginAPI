import express from "express"
import cors from "cors" 
import db from "./database/db.js"
import userRouter from "./routes/userRoutes.js"
import { PORTAPI } from "./config/config.js"
import UsersModel from "./models/usersModel.js"

const app = express()
app.use(cors())
app.use (express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use("/users",userRouter);

try {
    await db.authenticate();
    console.log("conexion a la BD OK");

    //Create tables and update if neccesary
    await db.sync({force:true}).then(() => {
        const port = PORTAPI //8000
        app.listen(port,()=>{
            console.log(`Servidor ok en el puerto ${port}`)
        })
    });

} catch (error) {
    console.log(`conexion fallida por el error ${error}`)
}

    

