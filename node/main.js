
const webPush = require('web-push');

const pushSubscription = YOUR_SUBSCRIPTION_OBJECT;

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
