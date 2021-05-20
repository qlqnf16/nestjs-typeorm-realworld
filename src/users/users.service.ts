import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const salt = await bcrypt.genSalt();
    createUserDto.password = await bcrypt.hash(createUserDto.password, salt);
    return this.usersRepository.save(createUserDto);
  }

  async findOne({ email, password }) {
    const user = await this.usersRepository.findOne({ email: email });
    if (!user) return null;

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) return user;
    return null;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }
}
