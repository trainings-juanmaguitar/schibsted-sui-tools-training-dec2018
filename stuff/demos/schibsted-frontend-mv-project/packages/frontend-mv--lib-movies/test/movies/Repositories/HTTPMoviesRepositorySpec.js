import assert from 'assert'
import sinon from 'sinon'

import MovieEntity from '../../../src/movies/Entities/MovieEntity'
import MoviesRepository from '../../../src/movies/Repositories/MoviesRepository.js'
import HTTPMoviesRepository from '../../../src/movies/Repositories/HTTPMoviesRepository.js'
import MoviesEntityFactory from '../../../src/movies/Entities/factory'
import MoviesMapperFactory from '../../../src/movies/Mappers/factory'

let repository
let config
let fetcher
let movieMapFactory
let movieEntityFactory

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
    movieMapFactory = sinon
      .stub(MoviesMapperFactory, 'moviesMapper')
      .callThrough()

    movieEntityFactory = sinon
      .stub(MoviesEntityFactory, 'movieEntity')
      .callThrough()

    repository = new HTTPMoviesRepository({
      log: () => {},
      mapper: movieMapFactory({config}),
      config,
      fetcher,
      movieEntityFactory
    })
  })

  after(function() {
    repository = null
    config = null
    fetcher = null
    movieEntityFactory = null
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
    assert.equal(typeof repository._movieEntityFactory, 'function')
    assert.equal(
      repository._movieEntityFactory({}) instanceof MovieEntity,
      true
    )
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

    it('returns a movie entity (domain element)', async function() {
      const movies = await repository.search()
      assert.equal(movieEntityFactory.called, true)
      assert.equal(movies[0] instanceof MovieEntity, true)
    })
  })
})
