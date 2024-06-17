require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const destinoRoutes = require('./src/api/routes/destino')
const agenciaRoutes = require('./src/api/routes/agencia')

const app = express()

connectDB()

app.use(express.json())

app.use('/api/v1/destinos', destinoRoutes)
app.use('/api/v1/agencias', agenciaRoutes)

app.use('*', (req, res) => {
  res.status(404).json('Not Found')
})

app.listen(3000, () => {
  console.log(
    'Para acceder al servidor haz click en esta URL: https://localhost:3000'
  )
})
