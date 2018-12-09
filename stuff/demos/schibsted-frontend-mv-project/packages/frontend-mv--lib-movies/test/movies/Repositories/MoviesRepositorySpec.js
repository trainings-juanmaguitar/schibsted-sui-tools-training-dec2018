import assert from 'assert'

import {Repository} from '@s-ui/domain'

import MoviesRepository from '../../../src/movies/Repositories/MoviesRepository.js'

describe('MoviesRepository @interface', function() {
  it('is a class (constructor function)', function() {
    assert.equal(typeof MoviesRepository, 'function')
    assert.equal(new MoviesRepository() instanceof MoviesRepository, true)
  })

  it('extends from Repository', function() {
    assert.equal(MoviesRepository.prototype instanceof Repository, true)
  })

  describe('search', function() {
    it('is a method defined in its prototype', function() {
      assert.equal(
        typeof MoviesRepository.prototype.search === 'function',
        true
      )
    })

    it('throws an error', function() {
      assert.throws(MoviesRepository.prototype.search, Error)
    })
  })
})
