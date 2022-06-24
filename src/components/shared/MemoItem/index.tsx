import { css } from "@emotion/react";
import { ComponentPropsWithRef } from "react";
import { FlexContainer } from "../../layout/FlexContainer";
import { Button } from "../Button";
import { Memo } from "../../../constant/types";
import { colors } from "../../../../styles/themes";

export interface MemoItemProps extends ComponentPropsWithRef<"div"> {
  memoItem: Memo;
}

export const MemoItem = ({
  memoItem,
  ...props
}: MemoItemProps): JSX.Element => {
  const deleteMemo = () => {
    alert("削除");
  };

  const editMemo = () => {
    alert("編集");
  };

  return (
    <FlexContainer
      css={flexContainer}
      {...props}
      justifyContent="space-between"
      alignItems="center"
    >
      <a href={memoItem.url} css={title}>
        {memoItem.title}
      </a>
      <FlexContainer gap={8}>
        <Button onClick={deleteMemo}>delete</Button>
        <Button onClick={editMemo}>edit</Button>
      </FlexContainer>
    </FlexContainer>
  );
};

const flexContainer = css`
  width: 300px;
  padding: 10px 20px;
  border-radius: 10px;
  background: ${colors.blue};
`;

const title = css`
  font-size: 1.6rem;
  text-decoration: none;
`;
