import { Button } from "../Button";
import { css } from "@emotion/react";
import { FlexContainer } from "../../layout/FlexContainer";
import { ComponentPropsWithRef } from "react";

export interface InputForm extends ComponentPropsWithRef<"div"> {
  uploadTiming: number;
}

export const InputForm = ({
  uploadTiming,
  ...props
}: InputForm): JSX.Element => {
  return (
    <FlexContainer {...props}>
      <input type="text" css={input} />
      <Button
        size="secondary"
        onClick={() => {
          alert(uploadTiming);
        }}
      >
        メモを追加
      </Button>
    </FlexContainer>
  );
};

const input = css`
  padding: 4px;
  border-bottom: 2px solid #000;
  font-size: 1.6rem;
`;
