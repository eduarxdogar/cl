import { type User } from '../../../domain/entities/User'
import { type UserRepository } from '../../../domain/repositories/UserRepository'
import { ExistUserByUserName } from '../../../domain/services/ExistUserByUserName'
import { UserAlreadyExistsExceotion } from '../../../domain/exeptions/UserAlreadyExistsException'

export class UserCreatorUseCase {
  private readonly _userRepository: UserRepository
  private readonly _existUserByUserName: ExistUserByUserName

  constructor (userRepository: UserRepository) {
    this._userRepository = userRepository
    this._existUserByUserName = new ExistUserByUserName(userRepository)
  }

  async run (body: User): Promise<User> {
    const existUser: boolean = await this._existUserByUserName.run(body.username)

    if (existUser) throw new UserAlreadyExistsExceotion()

    const userCreated: User = await this._userRepository.save(body)

    return userCreated
  }
}
