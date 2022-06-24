import { css } from "@emotion/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { colors } from "../../styles/themes";
import { FlexContainer } from "../components/layout/FlexContainer";
import { Button } from "../components/shared/Button";
import { Header } from "../components/shared/Header";
import { Input } from "../components/shared/Input";
import { MovieItem } from "../components/shared/MovieItem";
import { UserDataType } from "../constant/types";
import { authState, userDataState } from "../context/atoms";

const Home: NextPage = () => {
  const authData = useRecoilValue(authState);
  const [globalUserData, setGlobalUserData] =
    useRecoilState<UserDataType>(userDataState);
  const isLogin = authData.isLogin;
  const [newMovieTitle, setNewMovieTitle] = useState<string>("");
  const [newMovieUrl, setNewMovieUrl] = useState<string>("");
  const router = useRouter();
  useEffect(() => {
    const f = async () => {
      if (authData.isLogin) {
        const stringUserData = localStorage.getItem(authData.uid);
        if (stringUserData != null) {
          const parsedData = await JSON.parse(stringUserData);
          setGlobalUserData(parsedData);
        } else {
          setGlobalUserData({
            uid: authData.uid,
            userName: authData.userName,
            movieList: globalUserData.movieList
          });
        }
      }
    };
    f();
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  return (
    <>
      <Header />
      {isLogin ? (
        <main>
          <div>
            <FlexContainer
              css={flexContainer}
              alignItems="end"
              justifyContent="center"
            >
              <FlexContainer flexDirection="column">
                <Input
                  css={input}
                  placeholder={"動画のURL"}
                  onChange={(e) => setNewMovieUrl(e.target.value)}
                />
                <Input
                  css={input}
                  placeholder={"メモのタイトル"}
                  onChange={(e) => setNewMovieTitle(e.target.value)}
                />
              </FlexContainer>
              <Button
                size="secondary"
                onClick={async () => {
                  (await !globalUserData.movieList.some(
                    (item) => item.title === newMovieTitle
                  )) &&
                    setGlobalUserData({
                      ...globalUserData,
                      movieList: [
                        ...globalUserData.movieList,
                        {
                          title: newMovieTitle,
                          url: newMovieUrl,
                          memoList: []
                        }
                      ]
                    });
                  router.replace(`/memo/${newMovieTitle}`);
                }}
                css={button}
              >
                作成
              </Button>
            </FlexContainer>
          </div>
          <div css={container}>
            {globalUserData ? (
              <ul css={list}>
                {globalUserData.movieList.map((movieItem, i) => (
                  <li css={item} key={i}>
                    <MovieItem movieItem={movieItem} />
                  </li>
                ))}
              </ul>
            ) : (
              <p>メモがまだ存在していません</p>
            )}
          </div>
        </main>
      ) : (
        <h1>ログインしてください</h1>
      )}
    </>
  );
};

const flexContainer = css`
  margin-bottom: 20px;
`;

const input = css`
  padding: 4px;
  border-bottom: 2px solid #000;
  font-size: 1.6rem;
`;

const list = css`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 20px 0;
  gap: 0 80px;
  justify-content: center;
  height: 500px;
  border: solid 1px #e2e2e2;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: ${colors.blue};
  }
`;

const item = css`
  height: 180px;
`;

const container = css`
  width: 800px;
  margin: 0 auto;
`;

const button = css`
  margin-left: 10px;
`;
export default Home;
