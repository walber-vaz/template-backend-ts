import compression from 'compression'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'

const app = express()

app.use(cors())
app.use(helmet())
app.use(compression())

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World!' })
})

export { app }
