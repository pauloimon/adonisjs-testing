import type { ApplicationContract } from '@ioc:Adonis/Core/Application'
import UsersRepository from 'App/Repositories/InMemory/UsersRepository'

export default class RepositoryProvider {
  constructor (
    protected app: ApplicationContract
  ) {}

  public register () {
    this.app.container.singleton('@ioc:Repositories/UsersRepository', () => new UsersRepository())
  }
}
