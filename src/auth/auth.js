import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyAHBGl8VbjRU5HhFMFiLMOCcoMLd_XBuIA',
  authDomain: 'jobbox-1173c.firebaseapp.com',
  projectId: 'jobbox-1173c',
  storageBucket: 'jobbox-1173c.firebasestorage.app',
  messagingSenderId: '688219818784',
  appId: '1:688219818784:web:713717a41e6c0f79096545',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
