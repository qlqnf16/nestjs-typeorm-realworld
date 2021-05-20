import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Article } from '../articles/entities/article.entity';

@Entity()
export class Tags {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tagName: string;

  @ManyToMany(() => Article)
  articles: Article[];
}
