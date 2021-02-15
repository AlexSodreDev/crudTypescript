import 'reflect-metadata'
import './database/connect'

import express from 'express'

import routesMembers from './routes/members.routes'

const app = express()

app.use(express.json())

app.use(routesMembers)

app.listen(process.env.SERVER_PORT || 3333, () => {
  console.log('🚀 Server started at http://localhost:3333')
})