import type { UsersRepositoryContract } from '@ioc:Contracts/Repositories/UsersRepositoryContract'
import type { UserDTO } from '@ioc:Contracts/DTOs/UserDTO'

export default class UsersRepository implements UsersRepositoryContract {
  constructor (
    private users: Array<UserDTO> = [
      { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
      { id: 2, name: 'Mary Doe', email: 'mary.doe@example.com' },
    ]
  ) {}

  public getAll (): Array<UserDTO> {
    return this.users
  }
}
