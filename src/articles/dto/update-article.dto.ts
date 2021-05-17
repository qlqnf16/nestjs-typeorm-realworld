import { PartialType } from '@nestjs/mapped-types';
import CreateArticleDto from './create-article.dto';

export default class UpdateArticleDto extends PartialType(CreateArticleDto) {}
