import { useStore } from 'effector-react';
import React from 'react';
import { $user } from '../User/model/store';
import { LoginComponent } from './components/LoginComponent';

export function LoginPage() {
  const user = useStore($user);
  return <LoginComponent user={user} />;
}
