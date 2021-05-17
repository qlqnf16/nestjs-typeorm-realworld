import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Article } from '../../articles/entities/article.entity';

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
  @Column({ default: '' })
  bio: string;
  @Column({ default: '' })
  image: string;
  @Column({
    default: false,
  })
  following: boolean;
  @OneToMany(() => Article, (article) => article.author)
  articles: Article[];
}
