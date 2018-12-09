import assert from 'assert'

import MoviesUseCasesFactory from '../../../src/movies/UseCases/factory.js'
import SearchMoviesUseCase from '../../../src/movies/UseCases/SearchMoviesUseCase.js'

describe('MoviesUseCasesFactory → static methods that returns movies-context UseCases', function() {
  it('is a class (constructor function)', function() {
    assert.equal(typeof MoviesUseCasesFactory, 'function')
    assert.equal(
      new MoviesUseCasesFactory() instanceof MoviesUseCasesFactory,
      true
    )
  })
  describe('searchMoviesUseCase', function() {
    it('is a static method', function() {
      assert.equal(typeof MoviesUseCasesFactory.searchMoviesUseCase, 'function')
    })

    it('returns SearchMoviesUseCase instances', function() {
      assert.equal(
        MoviesUseCasesFactory.searchMoviesUseCase({}) instanceof
          SearchMoviesUseCase,
        true
      )
    })
  })
})
