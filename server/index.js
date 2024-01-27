import express from "express"
import Connection from "./database/db.js";
import cors from "cors"
import Routes from "./routes/route.js"
import bodyParser from "body-parser"


const app=express()

const PORT=8000;
app.use(cors());
// app.use(bodyParser.json({extended:true}));
// app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}))
app.use("/",Routes);

Connection()

app.listen(PORT,()=>{
    console.log(`your server is running at port ${PORT}`);
})