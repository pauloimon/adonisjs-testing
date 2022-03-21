declare module '@ioc:Contracts/Repositories/UsersRepositoryContract' {
  import type { UserDTO } from '@ioc:Contracts/DTOs/UserDTO'

  interface UsersRepositoryContract {
    getAll (): Array<UserDTO>
  }
}
