import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: process.env.DB_USERNAME || 'ln_dashboard',
      password: process.env.DB_PASSWORD || 'admin12345',
      database: process.env.DB_NAME || 'journal_nestjs',
      autoLoadEntities: true,
      synchronize: true, // Use only in development
    }),
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
