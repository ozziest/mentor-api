import 'dotenv/config'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import router from './router.js'
import preHandlers from './pre_handlers'

const app = express()

app.use(bodyParser.json())
app.use(cors())

preHandlers.forEach(middleware => app.use(middleware))

app.use(router)

app.listen(
  process.env.APP_PORT,
  () => {
    console.log(`Application run at http://localhost:${process.env.APP_PORT}`)
  }
)
