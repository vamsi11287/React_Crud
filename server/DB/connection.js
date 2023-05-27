const mongoose = require('mongoose')

mongoose.set("strictQuery",true)
mongoose.connect('mongodb://127.0.0.1/admin')
.then(()=>console.log("db connected"))
.catch((err) =>{
    console.log(err)
})