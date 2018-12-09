import assert from 'assert'

import MoviesDomain from '../../../src/index'
import MockedResponses from './MockedResponses'
import {HttpMocker} from '@s-ui/mockmock'
import baseConfig from '../../../src/config/base'

describe('SearchMoviesUseCase', () => {
  const moviesAPIMock = new HttpMocker()
  const useCaseName = 'search_movies_use_case'
  const domain = new MoviesDomain()

  beforeEach(() => moviesAPIMock.create())
  afterEach(() => moviesAPIMock.restore())

  it('GIVEN the useCase THEN it exists', () => {
    const useCase = domain.get(useCaseName)

    assert.notEqual(useCase, undefined)
  })

  it(`GIVEN a page=1 and sort_by="ote_average.desc" THEN we get the results`, async () => {
    const expectedResponse = MockedResponses.data

    moviesAPIMock
      .httpMock(baseConfig.API_BASE_URL)
      .get('/discover/movie')
      .query({
        api_key: baseConfig.API_KEY,
        sort_by: 'ote_average.desc',
        page: mockedPage
      })
      .reply(expectedResponse, 200)

    domain.get(useCaseName).execute({pageNumber: mockedPage})


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
