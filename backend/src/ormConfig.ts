import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const OrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: '0.0.0.0',
  port: 5432,
  username: 'mnpl',
  password: 'mnpl',
  database: 'mnpl',
  entities: [`${__dirname}/entities/*{.ts,.js}`, `${__dirname}/entities/*{.ts,.js}`],
  synchronize: true,
  logging: ['error'],
};