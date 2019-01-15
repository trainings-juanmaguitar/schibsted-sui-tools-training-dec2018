const { getKeyByValue } = require("../../../helpers")
const { removeFavoriteService } = require("../../../services")

const removeFavorite = async (req, res) => {
  const {
    user: { id: uid, favorites },
    params: { id }
  } = req

  const keyToRemove = getKeyByValue(favorites, id)

  const [errFavoritesRef, _] = await removeFavoriteService({
    uid,
    keyToRemove
  })

  if (errFavoritesRef) {
    res.json({ user: null, err: errFavoritesRef })
    return
  }

  res.json({
    msg: `success removing movie ${id} from favorites for user ${uid}`
  })
}

module.exports = removeFavorite
