import assert from 'assert'
import sinon from 'sinon'
import {HttpMocker} from '@s-ui/mockmock'

import {UseCase} from '@s-ui/domain'

import MoviesDomain from '../../../src/index'

import MoviesRepository from '../../../src/movies/Repositories/MoviesRepository.js'
import HTTPMoviesRepository from '../../../src/movies/Repositories/HTTPMoviesRepository.js'

import SearchMoviesUseCase from '../../../src/movies/UseCases/SearchMoviesUseCase'

let repository = new HTTPMoviesRepository({})
let searchMoviesUseCase

let domain
let query
const mocker = new HttpMocker()

const mockedResults = [
  {
    id: 89,
    title: 'Indiana Jones and the Last Crusade',
    overview:
      "When Dr. Henry Jones Sr. suddenly goes missing while pursuing the Holy Grail, eminent archaeologist Indiana must team up with Marcus Brody, Sallah and Elsa Schneider to follow in his father's footsteps and stop the Nazis from recovering the power of eternal life.",
    language: 'en',
    release: '1989-05-24',
    posterPath: '/4p1N2Qrt8j0H8xMHMHvtRxv9weZ.jpg'
  },
  {
    id: 87,
    title: 'Indiana Jones and the Temple of Doom',
    overview:
      'After arriving in India, Indiana Jones is asked by a desperate village to find a mystical stone. He agrees – and stumbles upon a secret cult plotting a terrible plan in the catacombs of an ancient palace.',
    language: 'en',
    release: '1984-05-23',
    posterPath: '/f2nTRKk2zGdUTE7tLJ5EGGSuKA6.jpg'
  }
]

describe('SearchMoviesUseCase', function() {
  //   before(function() {
  //     searchMoviesUseCase = new SearchMoviesUseCase({
  //       repository
  //     })
  //     sinon.stub(searchMoviesUseCase, 'execute').returns(
  //       Promise.resolve({
  //         data: {
  //           results: mockedResults
  //         }
  //       })
  //     )
  //   })

  //   after(function() {
  //     searchMoviesUseCase = null
  //   })

  //   it('is a class (constructor function)', function() {
  //     assert.equal(typeof SearchMoviesUseCase, 'function')
  //     assert.equal(new SearchMoviesUseCase() instanceof SearchMoviesUseCase, true)
  //   })

  //   it('extends from UseCase', function() {
  //     assert.equal(SearchMoviesUseCase.prototype instanceof UseCase, true)
  //   })

  //   it('creates an instance w/ a repository', function() {
  //     assert.equal(
  //       searchMoviesUseCase._repository instanceof MoviesRepository,
  //       true
  //     )
  //   })

  describe('execute', function() {
    beforeEach(() => {
      domain = new MoviesDomain()
      mocker.create()
      query = 'Indiana'
    })

    afterEach(() => {
      domain = null
      mocker.restore()
    })

    // it('is a method defined in its prototype', function() {
    //   assert.equal(
    //     typeof SearchMoviesUseCase.prototype.execute === 'function',
    //     true
    //   )
    // })

    // it('returns a Promise', function() {
    //   assert.equal(
    //     searchMoviesUseCase.execute({query}).then !== undefined,
    //     true
    //   )
    // })

    // it('does NOT throw an error', function() {
    //   searchMoviesUseCase.execute({query}).then(response => {
    //     const {
    //       data: {
    //         results: [{title}]
    //       }
    //     } = response
    //     assert.equal(title, 'Indiana Jones')
    //   })
    // })

    it('does return proper values', async function() {
      const host = domain.get('config').get('API_BASE_URL')
      const apiKey = domain.get('config').get('API_KEY')

      const urlUseCase = `/search/movie?api_key=${apiKey}&query=${query}`

      console.log(urlUseCase)

      mocker
        .httpMock(host)
        .get(urlUseCase)
        .reply(mockedResults, 200)

      const moviesResult = await domain
        .get('search_movies_use_case')
        .execute({query})

      assert.deepEqual(moviesResult, mockedResults)
    })
  })
})
