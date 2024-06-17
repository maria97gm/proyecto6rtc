const mongoose = require('mongoose')

const agenciaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    phone: {
      type: Number,
      required: true
    },
    destinos: [{ type: mongoose.Types.ObjectId, ref: 'destinos' }]
  },
  { timestaps: true }
)

const Agencia = mongoose.model('agencias', agenciaSchema, 'agencias')

module.exports = Agencia
