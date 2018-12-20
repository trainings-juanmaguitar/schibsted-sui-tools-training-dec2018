import {expect} from 'chai'
import Movies from '../../../../src'
import {mockedApiResponse, expectedUseCaseResponse} from './testResponses'
import {HttpMocker} from '@s-ui/mockmock'
import Config from '../../../../src/config'

describe('ListPopularMoviesUseCase', () => {
  const moviesAPIMock = new HttpMocker()
  const useCaseName = 'list_popular_movies_use_case'
  const domain = new Movies()
  const config = new Config()

  it('it exists in the domain', () => {
    const useCase = domain.get(useCaseName)
    expect(useCase).to.not.be.undefined
  })

  describe('execute', () => {
    beforeEach(() => moviesAPIMock.create())
    afterEach(() => moviesAPIMock.restore())

    it('return proper results', async () => {
      const apiBaseUrl = config.get('URL_JSON_MOVIES')
      const apiKey = config.get('URL_KEY')

      moviesAPIMock
        .httpMock(apiBaseUrl)
        .get(`/movie/popular`)
        .query({
          api_key: apiKey
        })
        .reply(mockedApiResponse, 200)

      const response = await domain.get(useCaseName).execute()
      expect(response).to.deep.equal(expectedUseCaseResponse)
    })
  })
})
