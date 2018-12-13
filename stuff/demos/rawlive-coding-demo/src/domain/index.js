import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import {EntryPointFactory} from '@s-ui/domain'
import Config from './config'

import PodcastsUseCasesFactory from './podcasts/UseCases/factory'

const config = new Config()
const useCases = {
  list_podcasts_use_case: PodcastsUseCasesFactory.listPodcastsUseCase({config})
}

const Domain = EntryPointFactory({useCases})
const instance = new Domain({config})
const fb = firebase.initializeApp({
  apiKey: 'AIzaSyC7vInuLyJ3QdWLcLCYzZhyOirKdu0tqlE',
  authDomain: 'podcasts-demo.firebaseapp.com',
  databaseURL: 'https://podcasts-demo.firebaseio.com',
  projectId: 'podcasts-demo',
  storageBucket: '',
  messagingSenderId: '1010116750616'
})

const firebaseDB = fb.firestore()
firebaseDB.settings({
  timestampsInSnapshots: true
})

instance.config('firebaseDB', firebaseDB)

export default instance
