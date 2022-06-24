import { css } from "@emotion/react";
import { ComponentPropsWithRef } from "react";
import { Memo } from "../../../constant/types";
import { MemoItem } from "../MemoItem";

interface MemoListProps extends ComponentPropsWithRef<"ul"> {
  memoList: Memo[];
}

export const MemoList = ({ memoList, ...props }: MemoListProps) => {
  return (
    <ul css={list} {...props}>
      {memoList.map((memoItem, i) => (
        <li key={i}>
          <MemoItem memoItem={memoItem} />
        </li>
      ))}
    </ul>
  );
};

const list = css`
  display: flex;
  flex-direction: column;
  gap: 10px 0;
  list-style: none;
`;
