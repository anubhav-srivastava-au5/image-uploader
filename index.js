const express =require('express');
const app=express();
var cookieParser = require('cookie-parser');
const port = process.env.PORT || 5000;
const userRouter = require('./routes/users')
const uploadRouter = require('./routes/upload')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});


const dotenv = require("dotenv");
dotenv.config();


require('./db')

app.get('/',(req,res)=>{
    res.send("hello")
})
app.use('/users',userRouter)
app.use('/upload',uploadRouter)

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})