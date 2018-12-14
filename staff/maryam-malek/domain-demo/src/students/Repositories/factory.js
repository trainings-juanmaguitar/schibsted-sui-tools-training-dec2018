import {FetcherFactory} from '@s-ui/domain'
import StudentsEntitiesFactory from '../Entities/factory'

import RAWStudentsRepository from './RAWStudentsRepository'
import HTTPStudentsRepository from './HTTPStudentsRepository'

class StudentsRepositoriesFactory {
  static rawStudentsRepository = ({config}) =>
    new RAWStudentsRepository({
      config,
      studentsEntityFactory: StudentsEntitiesFactory.studentEntity
    })

  static httpStudentsRepository = ({config}) =>
    new HTTPStudentsRepository({
      config,
      studentsEntityFactory: StudentsEntitiesFactory.studentEntity,
      fetcher: FetcherFactory.httpFetcher({config})
    })
}

export default StudentsRepositoriesFactory
