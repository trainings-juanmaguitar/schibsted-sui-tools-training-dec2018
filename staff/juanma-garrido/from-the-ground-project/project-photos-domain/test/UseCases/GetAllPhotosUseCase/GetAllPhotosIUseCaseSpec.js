import {expect} from 'chai'
import {HttpMocker} from '@s-ui/mockmock'
import {mockedApiResponse, expectedUseCaseResponse} from './testResponses'
import Domain from '../../../src'
import Config from '../../../src/config'

describe('GetAllPhotosIUseCase', () => {
  const moviesAPIMock = new HttpMocker()
  const useCaseName = 'get_all_photos_use_case'
  const domain = new Domain()
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

      moviesAPIMock
        .httpMock(apiBaseUrl)
        .get(`/photos`)
        .reply(mockedApiResponse, 200)

      const response = await domain.get(useCaseName).execute()

      expect(response).to.deep.equal(expectedUseCaseResponse)
    })
  })
})
