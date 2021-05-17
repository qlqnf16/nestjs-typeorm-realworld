import { Body, Controller, Get, Post } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import CreateArticleDto from './dto/create-article.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  create(@Body() article: CreateArticleDto) {
    console.log(article);
    return this.articlesService.create(article);
  }

  @Get()
  findAll() {
    return this.articlesService.findAll();
  }
}
