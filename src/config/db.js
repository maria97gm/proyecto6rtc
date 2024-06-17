const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('Estamos conectados a la BBDD loqui :)')
  } catch (error) {
    console.log('Ha fallado algo intentando conectarnos :(')
  }
}

module.exports = { connectDB }
