export interface Memo {
  url: string;
  title: string;
}

export interface Movie {
  url: string;
  title: string;
}

export interface UserDataType {
  uid: string;
  userName: string;
  movieList: MovieType[];
}

export interface MovieType {
  title: string;
  url: string;
  memoList: MemoType[];
}

export interface MemoType {
  text: string;
  uploadTiming: number;
}
