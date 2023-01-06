import { EntityRepository, Repository } from 'typeorm';
import { user } from '../model/User';

@EntityRepository(user)
export default class UsersRepository extends Repository<user> {
  public async findByName(name: string): Promise<user[]> {
    return this.find({
      where: {
        name,
      },
    });
  }
}