/* eslint-disable */
import {Container} from 'unstated'
import Movies from '../../../frontend-mv--lib-movies/src'

const domain = new Movies()

export class UserContainer extends Container {
  state = {user: null}

  listenOnce = () => {
    // console.log('listening to onAuthStateChanged')
    // const firebaseApp = domain.get('config').get('firebase')
    // firebaseApp.auth().onAuthStateChanged(async () => {
    //   const user = await domain.get('current_users_use_case').execute()
    //   this.setState({user})
    // })
    // this.listenOnce = () => {}
  }

}

export class LanguageContainer extends Container {
  state = {lang: 'es-ES'}

  changeLanguage = ({lang}) => {
    console.log('changeLanguage...')
    console.log(lang)
    this.setState({lang})
  }
}

