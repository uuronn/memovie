import { css } from "@emotion/react";
import { ComponentPropsWithRef } from "react";
import { Movie } from "../../../constant/types";
import { MovieItem } from "../MovieItem";

export interface MovieListProps extends ComponentPropsWithRef<"div"> {
  movieList: Movie[];
}

export const MovieList = ({ movieList }: MovieListProps): JSX.Element => {
  return (
    <ul css={list}>
      {movieList.map((movieItem, i) => (
        <li key={i}>
          <MovieItem movieItem={movieItem} />
        </li>
      ))}
    </ul>
  );
};

const list = css`
  display: flex;
  list-style: none;
  justify-content: space-between;
`;
