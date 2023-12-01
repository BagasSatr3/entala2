import { AppDataSource } from "./data-source"
import { Request, Response } from "express"
import router from "./route"
import express = require("express")
import dotenv = require("dotenv")
import bodyParser = require("body-parser")


AppDataSource.initialize().then(async () => {
    const app = express()
    const port = 5000
    const cors = require('cors')

    app.use(cors())
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use(express.json())
    app.use("/api/v1", router)

    app.get("/", (req: Request, res: Response) => {
        res.send('Hello K-Link!')
    })

    app.listen(port, () => {
        console.log(`Server is running! at "http://localhost:${port}"`)
    })

}).catch(error => console.log(error))
