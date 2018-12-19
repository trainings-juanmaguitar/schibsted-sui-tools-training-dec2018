import assert from 'assert'

import MoviesRepositoryFactory from '../../../src/movie/Repositories/factory.js'
import HTTPMoviesRepository from '../../../src/movie/Repositories/HTTPMoviesRepository.js'

describe('MoviesRepositoryFactory → static methods that returns movies-context Repositories', function() {
  it('is a class (constructor function)', function() {
    assert.equal(typeof MoviesRepositoryFactory, 'function')
    assert.equal(
      new MoviesRepositoryFactory() instanceof MoviesRepositoryFactory,
      true
    )
  })
  describe('httpMoviesRepository', function() {
    it('is a static method', function() {
      assert.equal(
        typeof MoviesRepositoryFactory.httpMoviesRepository,
        'function'
      )
    })

    it('returns HTTPMoviesRepository instances', function() {
      assert.equal(
        MoviesRepositoryFactory.httpMoviesRepository({}) instanceof
          HTTPMoviesRepository,
        true
      )
    })
  })
})
