import assert from 'assert'

import MovieEntity from '../../../src/movies/Entities/MovieEntity'
import MoviesEntityFactory from '../../../src/movies/Entities/factory'

describe('MovieEntitiesFactory → static methods that returns movies-context Entities', function() {
  it('is a class (constructor function)', function() {
    assert.equal(typeof MoviesEntityFactory, 'function')
    assert.equal(new MoviesEntityFactory() instanceof MoviesEntityFactory, true)
  })
  describe('movieEntity', function() {
    it('is a static method', function() {
      assert.equal(typeof MoviesEntityFactory.movieEntity, 'function')
    })

    it('returns MovieEntity instances', function() {
      const title = 'Back To Te Future'
      const year = 1985
      const movie = MoviesEntityFactory.movieEntity({title, year})
      assert.equal(movie instanceof MovieEntity, true)
    })
  })
})
