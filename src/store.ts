import { TItemWithUuid } from './common/types/index';
import { RestaurantDto } from './modules/restaurants/types';
import { RestaurantMenuDto } from './modules/restaurantMenu/types';
import { apiUrls } from './common/api/urls';
import { CrudStore } from './common/models/abstractModel/abstractCrudModel';
import { ImageDto } from './modules/image/model/types';
import { LegalDto } from './modules/legal/types';
import { DeliveryDto } from './modules/delivery/types';
import { FoodCategoryDto } from './modules/foodCatefory/legal/types';
import { CartDto } from './modules/cart/types';
import { CodeCheckDto } from './modules/codeCheck/types';
import { PromoDto } from './modules/promo/types';
import { OrderDto, TOrder } from './modules/order/types';
import { LoginDto } from './modules/login/types';
import { RegistrationDto } from './modules/registration/types';

export const RestaurantModel = new CrudStore<RestaurantDto>(
  apiUrls.restaurants.main
).createCrudStore();
export const RestaurantMenuModel = new CrudStore<RestaurantMenuDto>(
  apiUrls.restaurantsMenu.main
).createCrudStore();
export const ImageModel = new CrudStore<TItemWithUuid<FormData>, ImageDto>(
  apiUrls.img.main
).createCrudStore();
export const LegalModel = new CrudStore<LegalDto>(apiUrls.legal.main).createCrudStore();
export const DeliveryModel = new CrudStore<DeliveryDto>(apiUrls.delivery.main).createCrudStore();
export const FoodCategoryModel = new CrudStore<FoodCategoryDto>(
  apiUrls.foodCategory.main
).createCrudStore();
export const CartModel = new CrudStore<CartDto>(apiUrls.cart.main).createCrudStore();
export const CodeCheckModel = new CrudStore<CodeCheckDto>(apiUrls.checkCode.main).createCrudStore();
export const PromoModel = new CrudStore<PromoDto>(apiUrls.promo.main).createCrudStore();
export const OrderModel = new CrudStore<TOrder, OrderDto>(apiUrls.order.main).createCrudStore();
export const LoginModel = new CrudStore<LoginDto>(apiUrls.login.main).createCrudStore();
export const RegistrationModel = new CrudStore<RegistrationDto>(apiUrls.registration.main).createCrudStore();