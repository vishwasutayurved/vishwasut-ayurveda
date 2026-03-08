importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyAcaaUuawQUtA9feKWNJSMkGJZp0xbL_H0",
    authDomain: "vishwasut-ayurved.firebaseapp.com",
    projectId: "vishwasut-ayurved",
    storageBucket: "vishwasut-ayurved.firebasestorage.app",
    messagingSenderId: "405199693218",
    appId: "1:405199693218:web:5b3c7c737a449c04917efb"
});

const messaging = firebase.messaging();

// This handler will be triggered when the app is in the background or terminated.
messaging.onBackgroundMessage((payload) => {
    if (payload.data) {
        // const { title, body } = payload.data;
        // self.registration.showNotification(title, {
        //     body: body,
        //     icon: "/logo.png",
        //     data: { url: "https://vishwasutayurveda.web.app/" }
        // });
    }
});


// self.addEventListener("notificationclick", function (event) {
//     event.notification.close();
//     event.waitUntil(clients.openWindow(event.notification.data.url));
// });
