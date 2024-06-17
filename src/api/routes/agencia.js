const {
  getAgencias,
  updateAgencia,
  deleteAgencia,
  postAgencia,
  getAgencia
} = require('../controllers/agencia')

const agenciaRoutes = require('express').Router()

agenciaRoutes.get('/', getAgencias)
agenciaRoutes.post('/', postAgencia)
agenciaRoutes.delete('/:id', deleteAgencia)
agenciaRoutes.put('/:id', updateAgencia)
agenciaRoutes.get('/:id', getAgencia)

module.exports = agenciaRoutes
