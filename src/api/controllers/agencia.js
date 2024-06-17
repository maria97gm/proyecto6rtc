const Agencia = require('../models/agencia')

//READ (Todas las agencias)

const getAgencias = async (req, res, next) => {
  try {
    const allAgencias = await Agencia.find().populate('destinos')
    return res.status(200).json(allAgencias)
  } catch (error) {
    return res.status(400).json('Error al intentar acceder a las agencias')
  }
}

//READ (Acceder a una agencia por ID)

const getAgencia = async (req, res, next) => {
  try {
    const { id } = req.params
    const destino = await Agencia.findById(id).populate('destinos')
    return res.status(200).json(destino)
  } catch (error) {
    return res.status(400).json('Error al acceder a la agencia')
  }
}

//CREATE (Para añadir un destino)

const postAgencia = async (req, res, next) => {
  try {
    const newAgencia = new Agencia(req.body)
    const agenciaSaved = await newAgencia.save()
    return res.status(201).json(agenciaSaved)
  } catch (error) {
    return res.status(400).json('Error al añadir una nueva agencia')
  }
}

//DELETE (Para eliminar una agencia)

const deleteAgencia = async (req, res, next) => {
  const { id } = req.params
  try {
    const agenciaDeleted = await Agencia.findByIdAndDelete(id)
    return res.status(200).json(agenciaDeleted)
  } catch (error) {
    return res.status(400).json('Fallo al intentar eliminar una agencia')
  }
}

const updateAgencia = async (req, res, next) => {
  try {
    const { id } = req.params
    const updateData = req.body

    const agencia = await Agencia.findById(id)

    const { destinos, ...otherUpdateData } = updateData
    Object.assign(agencia, otherUpdateData)

    if (destinos) {
      destinos.forEach((destinoId) => {
        if (!agencia.destinos.includes(destinoId)) {
          agencia.destinos.push(destinoId)
        }
      })
    }

    const updatedAgencia = await agencia.save()

    return res.status(201).json(updatedAgencia)
  } catch (error) {
    return res.status(400).json('Error al actualizar la agencia')
  }
}

module.exports = {
  getAgencias,
  postAgencia,
  deleteAgencia,
  updateAgencia,
  getAgencia
}
