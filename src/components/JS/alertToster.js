import { ElNotification } from "element-plus";

export function alertSuccess(msg)
{
    const notificationOptions = {
        title: 'Success',
        message: msg,
        type: 'success',
      };

      ElNotification(notificationOptions);
}


export function alertError(msg)
{
    const notificationOptions = {
        title: 'Error',
        message: msg,
        type: 'error',
      };

      ElNotification(notificationOptions);
}