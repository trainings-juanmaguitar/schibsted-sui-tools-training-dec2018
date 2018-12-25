import * as firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

import {result as firebaseConfig} from './firebase-config.json'

const firebaseApp =
  typeof window !== 'undefined' ? firebase.initializeApp(firebaseConfig) : {}

export {firebase, firebaseApp}
