const express = require("express");
const {connect} = require("./repo/db");
const {getUsers, getUserByEmail} = require("./repo/users"); 

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use("/user" , require("./routes/users"));
app.use("/blog" , require("./routes/blogs"));

app.get("/", async (req, res) => {
  res.send("Hello world!");
});


// health check endpoint
app.get("/health", async (req, res) => {  
  let curTime = await connect();
  console.log(curTime);
  res.status(200);
  res.send("Current time is " + curTime);
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));