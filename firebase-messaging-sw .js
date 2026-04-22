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

messaging.onBackgroundMessage(function(payload) {
  var title = payload.notification && payload.notification.title ? payload.notification.title : "Le Pass d'un Instant";
  var body = payload.notification && payload.notification.body ? payload.notification.body : "Nouvelle offre flash !";
  self.registration.showNotification(title, {
    body: body,
    icon: 'https://lepassduninstant-max.github.io/lepassduninstant/logo.png',
    tag: 'flash-notification'
  });
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('https://lepassduninstant-max.github.io/lepassduninstant/')
  );
});
