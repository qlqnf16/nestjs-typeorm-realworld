import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import Any = jasmine.Any;
import { AuthGuard } from '@nestjs/passport';
import { LoginUserDto } from './dto/login-user.dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('user')
  findUser(@Body() test: Any, @Req() reqTest: Any) {
    // console.log(test, reqTestest);
    return test;
  }

  @Post('users')
  create(@Body('user') createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post('users/login')
  async login(@Body('user') loginUserDto: LoginUserDto) {
    const user = await this.usersService.findOne(loginUserDto);
    console.log(user);
  }

  @Patch('users/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete('users/:id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
