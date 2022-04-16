import { notification } from 'antd';


export const notifyError = (message: string) =>
  notification.error({ message });

