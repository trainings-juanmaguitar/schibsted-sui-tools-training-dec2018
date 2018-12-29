import UserEntity from './UserEntity'
import SessionEntity from './SessionEntity'

export default class UsersEntitiesFactory {
  static userEntity = props => new UserEntity(props)
  static sessionEntity = ({token}) => new SessionEntity({token})
}
