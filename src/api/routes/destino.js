const {
  getDestinos,
  getDestinoTodoIncluido,
  postDestino,
  deleteDestino,
  updateDestino
} = require('../controllers/destino')

const destinoRoutes = require('express').Router()

destinoRoutes.get('/', getDestinos)
destinoRoutes.get('/todoIncluido', getDestinoTodoIncluido)
destinoRoutes.post('/', postDestino)
destinoRoutes.delete('/:id', deleteDestino)
destinoRoutes.put('/:id', updateDestino)

module.exports = destinoRoutes

