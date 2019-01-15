const addFavorite = async (req, res) => {
  if (req.user) {
    const {
      user: {favorites={}}
    } = req
    res.json({favorites: Object.values(favorites)})
  } else {
    res.json({favorites: []})
  }
}

module.exports = addFavorite