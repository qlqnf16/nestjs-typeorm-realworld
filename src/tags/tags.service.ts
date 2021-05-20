import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tags } from './tags.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tags) private tagsRepository: Repository<Tags>,
  ) {}

  async findAll() {
    const tags = await this.tagsRepository.find();
    const tagNameList = [];
    tags.forEach((tag) => tagNameList.push(tag.tagName));
    return { tags: tagNameList };
  }
}
