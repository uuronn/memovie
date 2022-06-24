import { css, SerializedStyles } from "@emotion/react";

type SizeTheme = {
  primary: SerializedStyles;
  secondary: SerializedStyles;
};

const primary = css`
  padding: 4px 10px;
  font-size: 1.2rem;
`;

const secondary = css`
  padding: 8px;
  font-size: 1.6rem;
`;

export const sizeTheme: SizeTheme = {
  primary,
  secondary
};
