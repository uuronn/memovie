import { css } from "@emotion/react";
import { ComponentPropsWithRef } from "react";

export interface InputProps extends ComponentPropsWithRef<"input"> {
  placeholder: string;
}

export const Input = ({ placeholder, ...props }: InputProps) => (
  <input css={input} placeholder={placeholder} {...props} />
);

const input = css`
  padding: 4px;
  border-bottom: 2px solid #000;
  font-size: 1.6rem;
`;
