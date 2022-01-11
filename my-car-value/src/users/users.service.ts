import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {
    this.repo = repo;
  }
  // create entity instance
  create(email: string, password: string) {
    const user = this.repo.create({ email, password });

    // save to DB
    return this.repo.save(user);
  }
}
