<<<<<<< HEAD
import StudentsEntitiesFactory from '../Entities/factory'

import RAWStudentsRepository from './RAWStudentsRepository'
=======
import {FetcherFactory} from '@s-ui/domain'
import StudentsEntitiesFactory from '../Entities/factory'

import RAWStudentsRepository from './RAWStudentsRepository'
import HTTPStudentsRepository from './HTTPStudentsRepository'
>>>>>>> devel

class StudentsRepositoriesFactory {
  static rawStudentsRepository = ({config}) =>
    new RAWStudentsRepository({
      config,
      studentsEntityFactory: StudentsEntitiesFactory.studentEntity
    })
<<<<<<< HEAD
=======

  static httpStudentsRepository = ({config}) =>
    new HTTPStudentsRepository({
      config,
      studentsEntityFactory: StudentsEntitiesFactory.studentEntity,
      fetcher: FetcherFactory.httpFetcher({config})
    })
>>>>>>> devel
}

export default StudentsRepositoriesFactory