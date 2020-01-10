
const webPush = require('web-push');

const pushSubscription = {
  endpoint:
    'https://fcm.googleapis.com/fcm/send/ed6tqTW8LAs:APA91bFD-VkWH-P6KX6nhIWDnwLugKu7aF_V-cr4hCOnnGEBhbfLJdy0rseyxp012PjN8vuHAVQPkRSKmDDpM5c8oZuUhsNksPyhCh6spWFULhM-Wv49qQB2j0C34eHKT_OMWJ8MXU-v',
  expirationTime: null,
  keys:
  {
    p256dh:
      'BILt32HXGRAIatE3pkU1Ryc43TSpZdXiULgYrfKmMtUob6RCRetMmJTNXNraQ_Vf8bnM6J-93eJyZvmJ5mweQFg',
    auth: '3C1zqaz3eb95hv30hecyvw'
  }
};

const vapidPublicKey = 'BAaxjdEHkWt6bdaCUW_2Ugxg0yDQi7IA8rL01sWlPkK4c4Amug73ejbK1g55EjZkzp1R_AvjKd8cGYIEvbP7BjI';
const vapidPrivateKey = 'EQX3QFJfmdHCijoPnkXwZ9FmD5YuhtcLupKwhFG9GQQ';

const payload = 'Here is a payload!';

const options = {
  // gcmAPIKey: 'YOUR_SERVER_KEY',
  TTL: 60,
  vapidDetails: {
    subject: 'mailto:vipinkatiyarknp@gmail.com',
    publicKey: vapidPublicKey,
    privateKey: vapidPrivateKey
  }
};

webPush.sendNotification(
  pushSubscription,
  payload,
  options
);
