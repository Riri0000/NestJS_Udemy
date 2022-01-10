import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// Create an entity file, and create a class in it that lists all the properties that your entity will have.
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;
}
