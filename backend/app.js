const express = require("express")
const http = require("http")
const appRoutes = require("./routes/app-routes")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

mongoose.connect("mongodb://127.0.0.1/meannews", (err) => {
    if(err){console.error("---> DB connection error: " + err)} 
    else {console.error("---> DB connected")}
})

const app = express()
const port = process.env.PORT || 8080

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use("/", appRoutes)


http.createServer(app).listen(port, () => {
    console.log("---> Backend runs: http://localhost:" + port)
})