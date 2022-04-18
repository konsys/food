import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/modules/auth/auth.module';
import { OrmConfig } from './orm.config';
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
import { PromoModule } from './modules/promo/promo.module';
import { OrderModule } from './modules/order/order.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './modules/auth1/components/roles.guard';
import { UsersModule } from './modules/auth/users.module';
import { JwtAuthGuard } from './modules/auth/jwt.auth.guard';

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
    PromoModule,
    OrderModule,
    ServeStaticModule.forRoot({
      rootPath: `${FULL_UPLOAD_PATH}`,
    }),
  ],
  // providers: [
  //   {
  //     provide: APP_GUARD,
  //     useClass: RolesGuard,
  //   },
  // ],
  // providers: [
  //   {
  //     provide: APP_GUARD,
  //     useClass: JwtAuthGuard,
  //   },
  // ],
})
export class MainModule { }
