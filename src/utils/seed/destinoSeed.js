const destinos = [
  {
    country: 'Italy',
    city: 'Rome',
    todoIncluido: true,
    description:
      'A beautiful and cultural destination, known for its history and stunning architecture.',
    price: 1500
  },
  {
    country: 'France',
    city: 'Paris',
    todoIncluido: false,
    description:
      'The city of love, famous for its cuisine, art, and the Eiffel Tower.',
    price: 1800
  },
  {
    country: 'Spain',
    city: 'Barcelona',
    todoIncluido: true,
    description:
      'A vibrant city known for its art, architecture, and the works of Gaudí.',
    price: 1200
  },
  {
    country: 'Japan',
    city: 'Tokyo',
    todoIncluido: false,
    description:
      'A bustling metropolis blending modernity with traditional culture and history.',
    price: 2200
  },
  {
    country: 'Australia',
    city: 'Sydney',
    todoIncluido: true,
    description:
      'Famous for its Sydney Opera House, beautiful beaches, and vibrant culture.',
    price: 2500
  }
]

require('dotenv').config()
const mongoose = require('mongoose')
const Destino = require('../../api/models/destino')

mongoose.connect(process.env.DB_URL).then(async () => {
  try {
    await Destino.collection.drop()
  } catch (error) {
    console.log('No se han podido eliminar los datos')
  }
  try {
    await Destino.insertMany(destinos)
    console.log(destinos)
  } catch (error) {
    console.log('Error')
  } finally {
    mongoose.connection.close()
  }
})
