/* eslint-disable no-unused-vars */
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: 'AIzaSyASa_N9o8jH4DVb2jA2b5VG-yW7wJh7JRA',
//   authDomain: 'coinbase-clone-0101.firebaseapp.com',
//   projectId: 'coinbase-clone-0101',
//   storageBucket: 'coinbase-clone-0101.appspot.com',
//   messagingSenderId: '737129325620',
//   appId: '1:737129325620:web:3b12cdd66bfb2956255661',
// };

const firebaseConfig = {
  apiKey: "AIzaSyCUE62A4jfLtfBKP1AozCfeDzf-gSHBGAQ",
  authDomain: "cfourteen-84d14.firebaseapp.com",
  projectId: "cfourteen-84d14",
  storageBucket: "cfourteen-84d14.appspot.com",
  messagingSenderId: "810627522460",
  appId: "1:810627522460:web:82eac069473296498a3259",
  measurementId: "G-2BVEYCXSQE"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyD7k4_sY8-4nJV3ez2j__5mo-tuKhXasuo",
//   authDomain: "coinbase-clone-7dddd.firebaseapp.com",
//   projectId: "coinbase-clone-7dddd",
//   storageBucket: "coinbase-clone-7dddd.appspot.com",
//   messagingSenderId: "1058442003981",
//   appId: "1:1058442003981:web:3506fdd62e8ea2999e3744",
//   measurementId: "G-ZL27GBK28J"
// };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
