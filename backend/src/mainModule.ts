import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { OrmConfig } from './ormConfig';
import { ImageModule } from './modules/image/image.module';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { FULL_UPLOAD_PATH } from './config';
import { RestaurantModule } from './modules/restaurant/restaurant.module';
import { LegalModule } from './modules/legal/legal.module';
import { RestarauntMenuModule } from './modules/restaurant-menu/restaurant-menu.module';
import { FoodCategoryModule } from './modules/food-category/food-category.module';
import { CartModule } from './modules/cart/cart.module';
import { CodeCheckModule } from './modules/code-check/code-check.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(OrmConfig),
    AuthModule,
    UsersModule,
    ImageModule,
    MulterModule,
    RestaurantModule,
    RestarauntMenuModule,
    LegalModule,
    FoodCategoryModule,
    CartModule,
    CodeCheckModule,
    ServeStaticModule.forRoot({
      rootPath: `${FULL_UPLOAD_PATH}`,
    }),
  ],
})
export class MainModule { }
