import { css } from "@emotion/react";
import { ComponentPropsWithRef } from "react";
import { sizeTheme } from "./theme/size";

export interface ButtonProps extends ComponentPropsWithRef<"button"> {
  size?: "primary" | "secondary";
}

export const Button = ({
  children,
  size = "primary",
  ...props
}: ButtonProps): JSX.Element => {
  const button = css`
    ${common}
    ${sizeTheme[size]}
  `;

  return (
    <button css={button} {...props}>
      {children}
    </button>
  );
};

const common = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #707070;
  border-radius: 10px;
  user-select: none;

  &:hover {
    background: #f0f0f0;
  }
`;
