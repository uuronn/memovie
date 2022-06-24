export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
};

export const MEMO_LIST = [
  {
    url: "https://www.youtube.com/watch?v=YiVq5e6KPdY&t=1818s",
    title: "ハックツ"
  },
  { url: "テストURL2", title: "タイトル2" },
  { url: "テストURL3", title: "タイトル3" },
  { url: "テストURL2", title: "タイトル2" },
  { url: "テストURL2", title: "タイトル2" },
  { url: "テストURL2", title: "タイトル2" }
];

export const MOVIE_LIST = [
  {
    url: "https://www.youtube.com/watch?v=YiVq5e6KPdY&t=1818s",
    title: "タイトル1",
    memoList: [{ text: "text", uploadTiming: 0 }]
  },
  {
    url: "テストURL3",
    title: "タイ",
    memoList: [{ text: "text", uploadTiming: 30 }]
  },
  {
    url: "テストURL3",
    title: "タイトル3",
    memoList: [{ text: "text", uploadTiming: 0 }]
  },
  {
    url: "テストURL3",
    title: "タイトル3",
    memoList: [{ text: "text", uploadTiming: 0 }]
  },
  {
    url: "テストURL3",
    title: "タイトル3",
    memoList: [{ text: "text", uploadTiming: 0 }]
  },
  {
    url: "テストURL3",
    title: "タイトル3",
    memoList: [{ text: "text", uploadTiming: 0 }]
  },
  {
    url: "テストURL3",
    title: "タイトル3",
    memoList: [{ text: "text", uploadTiming: 0 }]
  }
];
