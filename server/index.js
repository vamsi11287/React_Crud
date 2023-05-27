const express = require('express');
const cors = require("cors");
const router = require('./routes/userRouter');

// Connect to MongoDB
require('./DB/connection')

const app = express();
const PORT = 4000; 


app.use(cors())
app.use(express.json());

// controller
app.use('/',router);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})