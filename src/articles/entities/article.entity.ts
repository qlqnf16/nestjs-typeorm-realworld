import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  title: string;
  @Column()
  slug: string;
  @Column()
  body: string;
  @Column()
  createdAt: string;
  @Column()
  updatedAt: string;
  @Column()
  description: string;
  @ManyToOne(() => User, (user) => user.id)
  author: User;
}
