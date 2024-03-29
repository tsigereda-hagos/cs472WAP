const express = require("express");
const app = express();
const studentRouter =require("./routers/studentRouter");
const port = process.env.PORT || 3012;
const cors = require("cors"); // Import the cors middleware

app.use(express.json());
app.use(cors());
app.use('/students', studentRouter);
app.use((err, req, res, next) => {
    res.status(500).send('Something went wrong!');
});
app.listen(port,()=>{
console.log("you are connected to port"+port);
});