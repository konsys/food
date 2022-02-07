export interface IRegistrationResponce {
  registrationCode: string;
  email: string;
}

export interface IUser {
  userId: number;
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
  userId?: number;
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
