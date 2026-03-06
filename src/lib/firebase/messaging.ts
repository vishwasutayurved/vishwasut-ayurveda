
import { getMessaging, getToken } from "firebase/messaging";
import { firebaseApp } from "./config";
import { addFCMTokenInDB } from "./firestore";

// It'''s recommended to move this to an environment variable
const VAPID_KEY = "BJQD9jxQZpSlriZIRXZvebszip_gpqmU9cq-QnwcyC5RVmWKvVHBb46nXeHwKmjVk6OvdiltZIUlxSf3cXdlIL0";

let messagingInstance = null;
if (typeof window !== "undefined") {
  messagingInstance = getMessaging(firebaseApp);
}

export const getFCMToken = async () => {
  if (!messagingInstance) {
    console.log("Messaging is not supported in this browser.");
    return null;
  }

  try {
    let serviceWorkerRegistration = undefined;
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/firebase-messaging-sw.js')
        .then((registration) => {
          console.log('Service Worker registered with scope:', registration.scope);
          serviceWorkerRegistration = registration;
        });
    }

    const token = await getToken(messagingInstance, {
      vapidKey: VAPID_KEY,
      serviceWorkerRegistration,
    });

    if (token) {
      // In a real app, you would send this token to your server
      // to associate it with the current user.
      await addFCMTokenInDB(token);
      return token;
    } else {
      console.log('No registration token available. Request permission to generate one.');
      return null;
    }
  } catch (error) {
    console.error('An error occurred while retrieving FCM token. ', error);
    return null;
  }
};

export const messaging = messagingInstance;
