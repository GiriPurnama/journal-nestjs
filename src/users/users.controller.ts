import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('register')
  async register(@Body() createUserDto: { username: string; password: string }) {
    return this.usersService.create(createUserDto.username, createUserDto.password);
  }
}
