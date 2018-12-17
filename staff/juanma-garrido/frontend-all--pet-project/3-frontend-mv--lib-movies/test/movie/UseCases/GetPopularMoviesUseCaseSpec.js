/* eslint-disable no-undef */
import {expect} from 'chai'
import Mocker from '@s-ui/mockmock/lib/http'
import {ads} from '../../fixtures/ads/ads'
import {adsAssertsOk} from '../../assertions/ads/ads'
import {Coches} from '../../../src'

/** @test {GetAdsFromLastSearchUseCase} */
describe('GetAdsFromLastSearchUseCaseSpec', () => {
  const coches = new Coches()
  const mocker = new Mocker()

  beforeEach(() => mocker.create())
  afterEach(() => mocker.restore())

  /** @test {GetAdsFromLastSearchUseCase#execute} */
  describe('Get ads from last search', () => {
    it('Get a list of vehicles from the last search', done => {
      mocker
        .httpMock(coches.get('config').get('API_URL'))
        .getRegexp('/ads/home/')
        .reply(ads)

      coches
        .get('get_last_search_use_case')
        .execute()
        .then(adsAssertsOk({expect, done}))
        .catch(done)
    })
  })
})