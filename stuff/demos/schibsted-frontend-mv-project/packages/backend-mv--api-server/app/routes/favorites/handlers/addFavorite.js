const {addFavoriteService} = require('../../../services')

const addFavorite = async (req, res) => {
  const {
    user: {id: uid},
    params: {id}
  } = req

  const [errFavoritesRef, _] = await addFavoriteService({id, uid})

  if (errFavoritesRef) {
    res.json({user: null, err: errFavoritesRef})
    return
  }

  res.json({msg: `success adding movie ${id} as favorite for user ${uid}`})
}

module.exports = addFavorite