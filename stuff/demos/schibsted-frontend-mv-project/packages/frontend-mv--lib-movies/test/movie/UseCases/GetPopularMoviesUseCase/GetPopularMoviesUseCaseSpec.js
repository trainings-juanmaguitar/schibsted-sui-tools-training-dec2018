import {expect} from 'chai'
import Movies from '../../../../src'
import {
  mockedApiResponse,
  mockedApiResponsePage5,
  expectedUseCaseResponse,
  expectedUseCaseResponsePage5,
  mockedApiResponseLangES,
  expectedUseCaseResponseLangES
} from './testResponses'
import {HttpMocker} from '@s-ui/mockmock'
import Config from '../../../../src/config'

describe('GetPopularMoviesUseCaseSpec', () => {
  const moviesAPIMock = new HttpMocker()
  const useCaseName = 'get_popular_movies_use_case'
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
      expect(response).to.deep.equal(expectedUseCaseResponse)
    })

    it('return proper results on "{page:5}" ', async () => {
      const apiBaseUrl = config.get('API_BASE_URL')
      const apiKey = config.get('API_KEY')
      const page = 5

      moviesAPIMock
        .httpMock(apiBaseUrl)
        .get(`/movie/popular`)
        .query({
          api_key: apiKey,
          page
        })
        .reply(mockedApiResponsePage5, 200)

      const response = await domain.get(useCaseName).execute({page})

      expect(response).to.deep.equal(expectedUseCaseResponsePage5)
    })

    it('return proper results on "{language: \'es-ES\'}" ', async () => {
      const apiBaseUrl = config.get('API_BASE_URL')
      const apiKey = config.get('API_KEY')
      const language = 'es-ES'

      moviesAPIMock
        .httpMock(apiBaseUrl)
        .get(`/movie/popular`)
        .query({
          api_key: apiKey,
          language
        })
        .reply(mockedApiResponseLangES, 200)

      const response = await domain.get(useCaseName).execute({language})
      expect(response).to.deep.equal(expectedUseCaseResponseLangES)
    })
  })
})
