import assert from 'assert'
import sinon from 'sinon'

import MoviesListValueObject from '../../../src/movies/ValueObjects/MoviesListValueObject'
import MoviesRepository from '../../../src/movies/Repositories/MoviesRepository.js'
import HTTPMoviesRepository from '../../../src/movies/Repositories/HTTPMoviesRepository.js'
import MovieMapperFactory from '../../../src/movies/Mappers/factory'
import MoviesValueObjectsFactory from '../../../src/movies/ValueObjects/factory'

let repository
let config
let fetcher

const mockedResponse = {
  data: {
    results: [
      {
        id: 1,
        title: 'Indiana Jones'
      },
      {
        id: 2,
        title: 'Back To The Future'
      }
    ]
  }
}

describe('HTTPMoviesRepository → implementation of the MoviesRepository @interface', function() {
  before(function() {
    config = {get: () => ''}
    fetcher = {
      get: sinon.stub().returns(Promise.resolve(mockedResponse))
    }

    repository = new HTTPMoviesRepository({
      log: () => {},
      mapper: MovieMapperFactory.movieMapper({config}),
      config,
      fetcher,
      moviesListValueObject: MoviesValueObjectsFactory.moviesListValueObject
    })
  })

  after(function() {
    repository = null
    config = null
    fetcher = null
  })

  it('is a class (constructor function)', function() {
    assert.equal(typeof HTTPMoviesRepository, 'function')
    assert.equal(
      new HTTPMoviesRepository() instanceof HTTPMoviesRepository,
      true
    )
  })

  it('extends from MoviesRepository', function() {
    assert.equal(
      HTTPMoviesRepository.prototype instanceof MoviesRepository,
      true
    )
  })

  it('creates an instance w/ config, fetcher & movieEntityFactory', function() {
    assert.equal(typeof repository._config, 'object')
    assert.equal(typeof repository._fetcher, 'object')
    assert.equal(typeof repository._fetcher.get, 'function')
    assert.equal(typeof repository._mapper, 'object')
    assert.equal(typeof repository._mapper.map, 'function')
  })

  describe('search', function() {
    it('is a method defined in its prototype', function() {
      assert.equal(
        typeof HTTPMoviesRepository.prototype.search === 'function',
        true
      )
    })

    it('does NOT throw an error', function() {
      assert.doesNotThrow(() => repository.search(), Error)
    })

    it('does use the injected fetcher', async function() {
      await repository.search({})
      assert.equal(repository._fetcher.get.called, true)
    })

    it('returns a moviesList valueObject (domain element)', async function() {
      const response = await repository.search()
      assert.equal(response instanceof MoviesListValueObject, true)
    })
  })
})
