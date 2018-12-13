class Movies {
  constructor(getData) {
    this.getData = getData
  }

  getAll() {
    const movies = this.getData()
    return movies
  }
}

function getDataJson () {
  const movies = require('/movies.json')
  return movies
}

function getDataArray () {
  const movies = ['indiana jones', 'back to the future']
  return movies
}

function getDataFromMongo () {}

const movies1 = new Movies(getDataFromMongo)
movies1.getAll()

const movies2 = new Movies(getDataArray)
movies2.getAll()