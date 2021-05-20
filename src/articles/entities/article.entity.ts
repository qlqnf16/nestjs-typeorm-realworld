import {
  BeforeUpdate,
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinTable,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Tags } from '../../tags/tags.entity';

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
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
  @Column()
  description: string;
  @ManyToOne(() => User, (user) => user.articles)
  author: User;
  @ManyToMany(() => Tags)
  @JoinTable()
  tagList: Tags[];
}
