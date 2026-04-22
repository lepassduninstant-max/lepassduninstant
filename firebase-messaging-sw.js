importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAyxBcBBypSrspnc_5RcLmhR2RuVwPa5ZQ",
  authDomain: "pass-instant.firebaseapp.com",
  projectId: "pass-instant",
  storageBucket: "pass-instant.firebasestorage.app",
  messagingSenderId: "234758483474",
  appId: "1:234758483474:web:7d739963a99a7bd573f2cb"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  console.log('Notification reçue en arrière-plan:', payload);
  const { title, body, icon } = payload.notification || {};
  self.registration.showNotification(title || 'Le Pass d'un Instant', {
    body: body || 'Nouvelle offre flash !',
    icon: icon || '/lepassduninstant/icon.png',
    badge: '/lepassduninstant/icon.png',
    tag: 'flash-notification',
    data: payload.data || {}
  });
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('https://lepassduninstant-max.github.io/lepassduninstant/')
  );
});
