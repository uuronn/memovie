import { atom } from "recoil";
import { UserDataType } from "../constant/types";

type UnauthorizedUser = {
  isLogin: false;
};

type CurrentUser = {
  isLogin: true;
  userName: string;
  uid: string;
};

export const authState = atom<CurrentUser | UnauthorizedUser>({
  key: "authState",
  default: {
    isLogin: false
  }
});

export const userDataState = atom<UserDataType>({
  key: "userDataState",
  default: {
    uid: "",
    userName: "",
    movieList: []
  }
});
