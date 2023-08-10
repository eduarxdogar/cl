export class UserAlreadyExistsExceotion extends Error {
  constructor () {
    super('User already exists ')
  }
}
