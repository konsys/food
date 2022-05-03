import { type } from "os";

export interface IRegistrationResponce {
  registrationCode: string;
  email: string;
}

export type UserDto = {
  userUuid: string;
  phone: string;
  vip: boolean;
  registrationType?: string;
  name: string;
  email?: string;
  avatar?: string;
  createdAt?: Date;
  updatedAt?: Date;
  isActive: boolean;
  isBlocked: boolean;
}

export interface IUserRegistration {
  userUuid?: number;
  isTestUser?: boolean;
  vip: boolean;
  name: string;
  email?: string;
  password?: string;
}

export interface LoginRequest {
  username: string;
  password: string;
  saveCredentials: boolean;
}
