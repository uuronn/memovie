import { GoogleIcon } from "../../../shared/icons/GoogleIcon";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../../../../infra/firebase";
import { Button } from "../../../shared/Button";
import { FlexContainer } from "../../../layout/FlexContainer";
import { useRecoilState } from "recoil";
import { authState } from "../../../../context/atoms";
import { useRouter } from "next/router";

export const LoginContent = ({ ...props }): JSX.Element => {
  const [authData, setAuthData] = useRecoilState(authState);
  const router = useRouter();

  const signIn = async () => {
    if (!authData.isLogin) {
      try {
        const provider = new GoogleAuthProvider();
        const res = await signInWithPopup(auth, provider);

        if (!res) throw new Error("res error");

        setAuthData({
          isLogin: true,
          userName: res.user.displayName || "",
          uid: res.user.uid
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("ログイン中です");
    }
  };

  const logOut = async () => {
    const res = confirm("ログアウトしますか？");
    if (res) {
      try {
        await signOut(auth);
        router.replace("/");
        location.reload();
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthData({
          isLogin: true,
          userName: user.displayName || "",
          uid: user.uid
        });
      } else {
        console.log("ログインされていません");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FlexContainer alignItems="center" {...props}>
      {authData.isLogin ? (
        <>
          <div>
            <p style={{ fontSize: "16px", marginRight: "10px" }}>
              ユーザー名: {authData.userName}
            </p>
          </div>
          <Button size="secondary" onClick={logOut}>
            <GoogleIcon />
            ログアウト
          </Button>
        </>
      ) : (
        <Button size="secondary" onClick={signIn}>
          <GoogleIcon />
          ログイン
        </Button>
      )}
    </FlexContainer>
  );
};
