// Bu dosyayı "firebase-config.js" adıyla kopyala ve kendi bilgilerini gir.
// firebase-config.js dosyası .gitignore içinde, GitHub'a yüklenmez.
window.CINEFLIX_CONFIG = {
  firebase: {
    apiKey: "AIzaSyBTflucvWm_oo6H4cXAGZu4P1-ke74kSaU",
    authDomain: "clinefix.firebaseapp.com",
    projectId: "clinefix",
    storageBucket: "clinefix.firebasestorage.app",
    messagingSenderId: "110382528151",
    appId: "1:110382528151:web:2650e68d1f469e736c1bd2"
  },
  // Sadece Firebase KULLANILMAYAN yerel modda geçerli. Firebase açıkken
  // yönetici girişi Firebase Authentication (e-posta + şifre) ile yapılır.
  // IMDb koduyla otomatik doldurma için ücretsiz TMDB API anahtarı (v3). Boşsa özellik kapalı.
  tmdbKey: "b3fe27b55bdcab2c4a1df4001e02c2b4",
  // true yaparsan oynatıcı kutusu yönlendirme/popup yapamaz. Bazı oynatıcılar "sandbox algılandı" diyip çalışmaz; öyleyse false yap.
  sandbox: false,
  adminPassword: "",
  contactEmail: ""   // boş bırakırsan alt kısımda gösterilmez
};
