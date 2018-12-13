import {FetcherFactory} from '@s-ui/domain'
import StudentsEntitiesFactory from '../Entities/factory'

import HTTPStudentsRepository from './HTTPStudentsRepository'
import RAWStudentsRepository from './RAWStudentsRepository'

class StudentsRepositoriesFactory {
  static httpStudentsRepository = ({config}) =>
    new HTTPStudentsRepository({
      config,
      studentsEntityFactory: StudentsEntitiesFactory.studentEntity,
      fetcher: FetcherFactory.httpFetcher({config})
    })

  static rawStudentsRepository = ({config}) =>
    new RAWStudentsRepository({
      config,
      studentsEntityFactory: StudentsEntitiesFactory.studentEntity
    })
}

export default StudentsRepositoriesFactory
