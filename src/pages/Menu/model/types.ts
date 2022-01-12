export type MenuDto = {
  id?: number;
  name: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
  timeId: number;
  typeId: number;
  visible: boolean;
  bigImg: string;
  averageImg: string;
  smallImg: string;
  price: string;
};
