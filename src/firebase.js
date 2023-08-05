import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyDNvJHTU1fV45IH5TROvRBESQhJOpxAjeE",
  authDomain: "sangjeong-9bfd9.firebaseapp.com",
  projectId: "sangjeong-9bfd9",
  storageBucket: "sangjeong-9bfd9.appspot.com",
  messagingSenderId: "900482971677",
  appId: "1:900482971677:web:35a69680e7dc6161caaef4"
};

// firebaseConfig 정보로 firebase 시작
const app = initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const db = getFirestore(app);

export default db; // Firestore 인스턴스를 내보냅니다.