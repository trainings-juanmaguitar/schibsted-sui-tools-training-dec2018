import { expect } from 'chai'
import Movies from '../../../../src'
import MockedResponses from './MockedResponses'
import { HttpMocker } from '@s-ui/mockmock'
import baseConfig from '../../../../src/config/base'

describe('GetPopularMoviesUseCaseSpec', () => {
  const moviesAPIMock = new HttpMocker()
  const useCaseName = 'get_popular_movies_use_case'
  const domain = new Movies()

  beforeEach(() => moviesAPIMock.create())
  afterEach(() => moviesAPIMock.restore())

  it('GIVEN the useCase THEN it exists', () => {
    const useCase = domain.get(useCaseName)

    expect(useCase).to.not.be.undefined
  })

  it('GIVEN page=1 THEN we find results', async () => {
    const expectedResponse = MockedResponses.getPopularMoviesPage1;
    const mockedPage = 1

    moviesAPIMock
      .httpMock(baseConfig.API_BASE_URL)
      .get(`/movie/popular`)
      .query({
        api_key: baseConfig.API_KEY,
        page: mockedPage,
      })
      .reply(expectedResponse, 200)

    domain
      .get(useCaseName)
      .execute({pageNumber: mockedPage})
  })

})