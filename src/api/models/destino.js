const mongoose = require('mongoose')

const destinoSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: true,
      unique: true
    },
    city: {
      type: String,
      required: true,
      unique: true
    },
    todoIncluido: {
      type: Boolean,
      default: false
    },
    description: {
      type: String,
      maxlength: 500
    },
    price: {
      type: Number,
      required: true,
      min: 0
    }
  },
  {
    timestamps: true
  }
)

const Destino = mongoose.model('destinos', destinoSchema, 'destinos')

module.exports = Destino
