const express = require("express")
const http = require("http")
const appRoutes = require("./routes/app-routes")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")

mongoose.connect("mongodb+srv://username:lDgtjVeZMibr0nfG@meannwes.klg0p29.mongodb.net/?retryWrites=true&w=majority", (err) => {
    if(err){console.error("---> DB connection error: " + err)} 
    else {console.error("---> DB connected")}
})

const app = express()
const port = process.env.PORT || 8080

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use("/", appRoutes)


http.createServer(app).listen(port, () => {
    console.log("---> Backend runs: http://localhost:" + port)
})