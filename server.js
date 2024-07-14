// connect to server

const express = require("express")
const cors = require("cors")
const app = express();
var corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


// router file
require("./routes/Event.routes.js")(app)
require("./routes/Login.routes.js")(app)
require("./routes/Register.routes.js")(app)
require("./routes/AdminLogin.js")(app)
require("./routes/Createadmin.router.js")(app)


// Connect to server
app.get("/",(req,res)=>{
    res.send("hello")
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


// connect to database
const db = require("./models")
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the databases");
    })
    .catch(err => {
        console.log("Cannot connect to the databases", err);
        process.exit()
    })