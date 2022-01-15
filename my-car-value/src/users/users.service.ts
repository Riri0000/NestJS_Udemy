import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}
  // create entity instance
  create(email: string, password: string) {
    const user = this.repo.create({ email, password });

    // save to DB
    return this.repo.save(user);
  }

  // Run a query, returing the first record matching the search criteria.
  findOne(id: number) {
    if (!id) {
      return null;
    }
    return this.repo.findOne(id);
  }

  // Runs a query and returns a list of entities.
  find(email: string) {
    return this.repo.find({ email });
  }

  // Updateするattributeはemailだけかもしれないし、passwordかもしれないのでPartialを使う
  async update(id: number, attrs: Partial<User>) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    Object.assign(user, attrs);
    return this.repo.save(user);
  }

  // Remove a record from the DB
  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return this.repo.remove(user);
  }
}
