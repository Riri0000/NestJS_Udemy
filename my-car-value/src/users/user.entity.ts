import { AfterInsert, AfterRemove, Entity, Column, PrimaryGeneratedColumn, AfterUpdate } from 'typeorm';

// Create an entity file, and create a class in it that lists all the properties that your entity will have.
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('Inserted User with id', this.id)
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated User with id', this.id)
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed User with id', this.id)
  }
}
