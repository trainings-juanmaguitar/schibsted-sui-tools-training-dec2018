import assert from 'assert'

import {Entity} from '@s-ui/domain'
import AnemicModel from '@s-ui/domain/lib/AnemicModel'
import MovieEntity from '../../../src/movies/Entities/MovieEntity'

let movie
const title = 'Back To Te Future'
const year = 1985

describe('MovieEntity', function() {
  before(function() {
    movie = new MovieEntity({title, year})
  })

  it('is a class (constructor function)', function() {
    assert.equal(typeof MovieEntity, 'function')
    assert.equal(movie instanceof MovieEntity, true)
  })

  it('extends from Entity', function() {
    assert.equal(MovieEntity.prototype instanceof Entity, true)
  })

  it('extends from AnemicModel', function() {
    assert.equal(MovieEntity.prototype instanceof AnemicModel, true)
  })

  describe('toJSON (AnemicModel)', function() {
    it('is a method available in MovieEntity instances', function() {
      assert.equal(typeof movie.toJSON, 'function')
    })

    it('returns a raw object with properties of the instance', function() {
      assert.equal(typeof movie.toJSON(), 'object')
      assert.equal(movie.toJSON() instanceof Entity, false)
    })

    it('returns an immutable object', function() {
      assert.notEqual(movie.toJSON(), movie.toJSON())
      assert.equal(
        JSON.stringify(movie.toJSON()),
        JSON.stringify(movie.toJSON())
      )
    })
  })
})
