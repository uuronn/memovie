import { css } from "@emotion/react";
import Link from "next/link";
import { ComponentPropsWithRef } from "react";
import { colors } from "../../../../styles/themes";
import { Movie } from "../../../constant/types";
import { FlexContainer } from "../../layout/FlexContainer";

export interface MovieItemProps extends ComponentPropsWithRef<"div"> {
  movieItem: Movie;
}

export const MovieItem = ({ movieItem }: MovieItemProps): JSX.Element => {
  return (
    <FlexContainer flexDirection="column" alignItems="center">
      <Link href={`/memo/${movieItem.title}`}>
        <a css={img}>サンプル画像</a>
      </Link>
      <Link href={`/memo/${movieItem.title}`}>
        <a css={link}>{movieItem.title}</a>
      </Link>
    </FlexContainer>
  );
};

const img = css`
  display: block;
  width: 200px;
  font-size: 1.6rem;
  height: 120px;
  line-height: 120px;
  text-align: center;
  background: ${colors.blue};
  cursor: pointer;
`;

const link = css`
  font-size: 3rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: ${colors.blue};
  }
`;
