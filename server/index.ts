require('dotenv').config()

import express from "express"
import path from "path"

const app = express()

const frontDir = path.join("client", "dist")

app.use(express.static(frontDir))

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log( `Listenning server on http://localhost:${port}`)
})

