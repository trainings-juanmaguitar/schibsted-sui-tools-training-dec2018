import {expect} from 'chai'
import {HttpMocker} from '@s-ui/mockmock'
import {mockedApiResponse, expectedUseCaseResponse} from './testResponses'
import Movies from '../../../../src'
import Config from '../../../../src/config'

describe('searchMoviesUseCaseSpec', () => {
  const moviesAPIMock = new HttpMocker()
  const useCaseName = 'search_movies_use_case'
  const domain = new Movies()
  const config = new Config()

  beforeEach(() => moviesAPIMock.create())
  afterEach(() => moviesAPIMock.restore())

  it('it exists in the domain', () => {
    const useCase = domain.get(useCaseName)
    expect(useCase).not.to.be.undefined
  })
  describe('"execute" method', () => {
    it('it returns proper results', async () => {
      const apiUrlBase = config.get('API_URL_BASE')
      const apiKey = config.get('API_KEY')
      const query = 'batman'

      moviesAPIMock
        .httpMock(apiUrlBase)
        .get(`/movie/popular`)
        .query({
          api_key: apiKey,
          query
        })
        .reply(mockedApiResponse, 200)

      const response = await domain.get(useCaseName).execute()

      expect(response).to.deep.equal(expectedUseCaseResponse)
    })
  })
})
