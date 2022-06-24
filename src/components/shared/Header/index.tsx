import { css } from "@emotion/react";
import Link from "next/link";
import { colors } from "../../../../styles/themes";
import { LoginContent } from "../../domain/auth/LoginContent";
import { FlexContainer } from "../../layout/FlexContainer";
import { AppLogoIcon } from "../icons/AppLogoIcon";

export const Header = (): JSX.Element => {
  return (
    <FlexContainer
      css={flexContainer}
      alignItems="center"
      justifyContent="space-between"
    >
      <Link href="/">
        <a css={link}>
          <AppLogoIcon css={icon} />
        </a>
      </Link>
      <LoginContent />
    </FlexContainer>
  );
};

const flexContainer = css`
  width: 100%;
  padding: 4px 16px;
  box-shadow: 0 1px 20px 0px ${colors.black.lighten[2]};
  margin-bottom: 30px;
`;

const icon = css`
  user-select: none;
`;

const link = css`
  cursor: pointer;
`;
