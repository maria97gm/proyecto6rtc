const Destino = require('../models/destino')

//READ (Todos los destinos)

const getDestinos = async (req, res, next) => {
  try {
    const allDestinos = await Destino.find()
    return res.status(200).json(allDestinos)
  } catch (error) {
    return res.status(400).json('Error al intentar acceder a los destinos')
  }
}

//READ (Solo todos los incluidos)

const getDestinoTodoIncluido = async (req, res, next) => {
  try {
    const todoIncluido = await Destino.find({ todoIncluido: true })
    return res.status(200).json(todoIncluido)
  } catch (error) {
    return res
      .status(400)
      .json('Error al intentar acceder a los destinos que tienen TODO INCLUIDO')
  }
}

//CREATE (Para añadir un destino)

const postDestino = async (req, res, next) => {
  try {
    const newDestino = new Destino(req.body)
    const destinoSaved = await newDestino.save()
    return res.status(201).json(destinoSaved)
  } catch (error) {
    return res.status(400).json("Error al añadir un nuevo destino")
  }
}

//DELETE (Para eliminar un destino)

const deleteDestino = async (req, res, next) => {
  const { id } = req.params
  try {
    const destinoDeleted = await Destino.findByIdAndDelete(id)
    return res.status(200).json(destinoDeleted)
  } catch (error) {
    return res.status(400).json('Fallo al intentar eliminar un destino')
  }
}

//UPDATE (Actualizar algún dato)

const updateDestino = async (req, res, next) => {
  try {
    const { id } = req.params
    const updateData = req.body
    const updatedDestino = await Destino.findByIdAndUpdate(id, updateData, {
      new: true
    })
    return res.status(201).json(updatedDestino)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

module.exports = {
  getDestinos,
  getDestinoTodoIncluido,
  postDestino,
  deleteDestino,
  updateDestino
}
