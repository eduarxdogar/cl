import { type User } from '../../../../domain/entities/User'
import { UserCreatorUseCase } from '../../../../application/usecases/UseCreator'
import { InMemoryUserRepository } from '../../../implementation/InMemory/InMemoryUserRepository'

(async () => {
  const inMemoryUserRepo = new InMemoryUserRepository()
  console.log(inMemoryUserRepo.userData)

  const userCreatorUseCase = new UserCreatorUseCase(new InMemoryUserRepository())
  const userToCreate: User = {

    name: 'cristian',
    age: 26,
    username: 'cris24',
    id: '123'

  }

  await userCreatorUseCase.run(userToCreate)

  console.log(inMemoryUserRepo.userData)
})()
