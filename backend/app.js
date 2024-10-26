const express = require('express')
const app = express()
app.use(express.json())
const auth = require("./routes/auth")

app.use("/",auth)

const port = 3000
app.listen(port)