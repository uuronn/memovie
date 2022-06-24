import type { NextPage } from "next";
import { Header } from "../../components/shared/Header";
import ReactPlayer from "react-player";
import { FlexContainer } from "../../components/layout/FlexContainer";
import { ChangeEvent, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { authState, userDataState } from "../../context/atoms";
import { useRouter } from "next/router";
import { MovieType } from "../../constant/types";
import { Button } from "../../components/shared/Button";
import { Input } from "../../components/shared/Input";
import { css } from "@emotion/react";

const Memo: NextPage = () => {
  const videoRef = useRef<any>(null);
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [newMemoText, setNewMemoText] = useState<string>("");
  const [globalUserData, setGlobalUserData] = useRecoilState(userDataState);
  const router = useRouter();
  const nowMovieData = globalUserData.movieList.find(
    (movie) => movie.title === router.query.id
  );
  const authData = useRecoilValue(authState);
  const [movieData, setMovieData] = useState<MovieType>(
    nowMovieData ? nowMovieData : { title: "", url: "", memoList: [] }
  );

  const handleProgress = (state: any) => {
    if (!state.seeking) {
      setPlayed(Math.round(state.playedSeconds));
    }
  };

  const handleDuration = (duration: number) => {
    setDuration(duration);
  };

  const handleSeek = (e: ChangeEvent) => {
    if (e.target && e.target instanceof HTMLInputElement) {
      videoRef.current.seekTo(parseFloat(e.target.value));
    }
  };
  return (
    <>
      <Header />
      {movieData ? (
        <main>
          <FlexContainer justifyContent="space-around">
            <div>
              <ReactPlayer
                ref={videoRef}
                url={movieData?.url}
                onProgress={handleProgress}
                onDuration={handleDuration}
              />
              <p style={{ fontSize: "20px" }}>{duration}: 秒</p>
              <br />
              <p style={{ fontSize: "20px" }}>{played}: 秒経過しました</p>
              <h1 style={{ fontSize: "24px" }}>{movieData.title}</h1>
              <input
                style={{ width: "201px" }}
                type="range"
                min={0}
                max={duration}
                onChange={(e) => handleSeek(e)}
              />
            </div>
            <div>
              {movieData.memoList.map((memo, i) => (
                <>
                  <div key={i}>
                    <div>{memo.text}</div>
                    <div>{memo.uploadTiming}</div>
                  </div>
                </>
              ))}
              <div>
                <FlexContainer css={flexContainer}>
                  <Input
                    placeholder={"メモを書いてください"}
                    onChange={(e) => {
                      setNewMemoText(e.target.value);
                    }}
                  />
                  <Button
                    size="secondary"
                    onClick={() => {
                      setMovieData({
                        ...movieData,
                        memoList: [
                          ...movieData.memoList,
                          {
                            text: newMemoText,
                            uploadTiming: played
                          }
                        ]
                      });
                    }}
                  >
                    追加
                  </Button>
                </FlexContainer>
                <div>
                  <Button
                    size="secondary"
                    css={button}
                    onClick={() => {
                      const tmp = {
                        ...globalUserData,
                        movieList: [
                          ...globalUserData.movieList.map((movie) => {
                            if (movie.title === router.query.id) {
                              return movieData;
                            }
                            return movie;
                          })
                        ]
                      };

                      setGlobalUserData(tmp);
                      console.log(tmp);
                      localStorage.setItem(
                        authData.isLogin ? authData.uid : "",
                        JSON.stringify(tmp)
                      );
                      console.log("setItem");
                      router.replace(`/`);
                    }}
                  >
                    データを保存する
                  </Button>
                </div>
              </div>
            </div>
            {/* <MemoContainer memoList={movieData?.memoList} /> */}
          </FlexContainer>
        </main>
      ) : (
        <div>
          <h1>動画が見つかりませんでした</h1>
        </div>
      )}
    </>
  );
};

const flexContainer = css`
  margin-bottom: 8px;
`;

const button = css`
  margin: 0 auto;
`;

export default Memo;
