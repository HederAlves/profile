import { EntityRepository, Repository } from 'typeorm';
import { user } from '../model/User';

@EntityRepository(user)
export default class UsersRepository extends Repository<user> {
  static create(user: any) {
      throw new Error('Method not implemented.');
  }
  static push(user: { id: string; name: string; password: string; email: string; phone: string; }) {
      throw new Error('Method not implemented.');
  }
  static splice(index: void, arg1: number) {
      throw new Error('Method not implemented.');
  }
  static findIndex(arg0: (user: any) => boolean) {
      throw new Error('Method not implemented.');
  }
  public async findByName(name: string): Promise<user[]> {
    return this.find({
      where: {
        name,
      },
    });
  }
}