import {expect} from 'chai'
import {HttpMocker} from '@s-ui/mockmock'
import {mockedApiResponse} from './testResponses'
import Movies from '../../../../src'
import Config from '../../../../src/config'

describe('SearchMoviesUseCase', () => {
  const moviesAPIMock = new HttpMocker()
  const useCaseName = 'list_popular_movies_use_case'
  const domain = new Movies()
  const config = new Config()

  beforeEach(() => moviesAPIMock.create())
  afterEach(() => moviesAPIMock.restore())

  it('it exists in the domain', () => {
    const UseCase = domain.get(useCaseName)
    expect(UseCase).not.to.be.undefined
  })

  describe('"execute" method', () => {
    it('return proper results', async () => {
      const apiBaseUrl = config.get('API_BASE_URL')
      const apiKey = config.get('API_KEY')

      moviesAPIMock
        .httpMock(apiBaseUrl)
        .get(`/movie/popular`)
        .query({
          api_key: apiKey
        })
        .reply(mockedApiResponse, 200)

      const response = await domain.get(useCaseName).execute()

      const {results} = mockedApiResponse

      expect(response).to.deep.equal(results) // change for expectedUseCaseResponse when mapper done
    })
  })
})
