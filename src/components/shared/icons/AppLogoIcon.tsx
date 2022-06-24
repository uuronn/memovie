import { colors } from "../../../../styles/themes";

export const AppLogoIcon = ({ ...props }): JSX.Element => {
  return (
    <svg width="300" height="80" viewBox="0 0 353.164 116" {...props}>
      <g transform="translate(14.068 63)">
        <g transform="translate(0 -3)">
          <text
            transform="translate(29.095 33)"
            fill={colors.blue}
            fontSize="70"
            fontFamily="ZenMaruGothic-Bold, Zen Maru Gothic"
            fontWeight="700"
          >
            <tspan x="0" y="0">
              MeMovie
            </tspan>
          </text>
          <g transform="translate(-15.905 -9)">
            <g
              transform="translate(1.836 4.596)"
              fill="none"
              stroke={colors.blue}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="6"
            >
              <rect width="44.559" height="37.7" rx="8" stroke="none" />
              <rect
                x="3"
                y="3"
                width="38.559"
                height="31.7"
                rx="5"
                fill="none"
              />
            </g>
            <g transform="translate(10.191 -17.069)">
              <path
                d="M0,0H0L3.165,4.639,4.219,6.186,6.013,8.814l4.114,6.031"
                transform="translate(1.873 9.723)"
                fill="none"
                stroke={colors.blue}
                strokeLinecap="round"
                strokeWidth="5.6"
              />
              <path
                d="M0,21.93l4.981-7.423L7.161,11.26l.311-.464L9.963,7.085"
                transform="translate(16.479 2.638)"
                fill="none"
                stroke={colors.blue}
                strokeLinecap="round"
                strokeWidth="5.6"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
