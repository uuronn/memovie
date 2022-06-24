import { css } from "@emotion/react";
import { ComponentPropsWithRef } from "react";
import { Movie } from "../../../../constant/types";
import { FlexContainer } from "../../../layout/FlexContainer";
import { InputForm } from "../../../shared/InputForm";
import { MemoList } from "../../../shared/MemoList";

interface MemoListProps extends ComponentPropsWithRef<"div"> {
  memoList: Movie[];
  uploadTiming: number;
}

export const MemoContainer = ({
  memoList,
  uploadTiming,
  ...props
}: MemoListProps) => {
  return (
    <FlexContainer
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      css={flexContainer}
      {...props}
    >
      <MemoList memoList={memoList} css={list} />
      <InputForm css={form} uploadTiming={uploadTiming} />
    </FlexContainer>
  );
};

const flexContainer = css`
  width: 600px;
`;

const list = css`
  margin-bottom: 30px;
`;

const form = css`
  bottom: 0;
`;
