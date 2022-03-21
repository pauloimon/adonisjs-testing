import { inject } from '@adonisjs/fold'
import type { UsersRepositoryContract } from '@ioc:Contracts/Repositories/UsersRepositoryContract'

@inject(['@ioc:Repositories/UsersRepository'])
export default class UsersController {
  constructor (
    private usersRepository: UsersRepositoryContract
  ) {}

  public index () {
    return {
      data: this.usersRepository.getAll(),
    }
  }
}
