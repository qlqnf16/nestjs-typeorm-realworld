import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;
  @Column({
    nullable: false,
  })
  email: string;
  @Column({
    nullable: false,
  })
  password: string;
  @Column({
    nullable: false,
  })
  username: string;
  @Column()
  bio: null | string;
  @Column()
  image: string;
  @Column({
    default: false,
  })
  following: boolean;
}
