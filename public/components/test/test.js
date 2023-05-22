import * as React from "react";
const SVGComponent = (props) => (
  <svg
    width={467}
    height={195}
    viewBox="0 0 467 195"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="descId"
    {...props}
  >
    <title id="titleId">{"Sunghan Kim's GitHub Stats, Rank: A+"}</title>
    <desc id="descId">
      {
        "Total Stars Earned: 7, Total Commits in 2023 : 7, Total PRs: 110, Total Issues: 16, Contributed to (last year): 9"
      }
    </desc>
    <style>
      {
        "\n          .header {\n            font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif;\n            fill: #61dafb;\n            animation: fadeInAnimation 0.8s ease-in-out forwards;\n          }\n          @supports(-moz-appearance: auto) {\n            /* Selector detects Firefox */\n            .header { font-size: 15.5px; }\n          }\n          \n    .stat {\n      font: 600 14px 'Segoe UI', Ubuntu, \"Helvetica Neue\", Sans-Serif; fill: #ffffff;\n    }\n    @supports(-moz-appearance: auto) {\n      /* Selector detects Firefox */\n      .stat { font-size:12px; }\n    }\n    .stagger {\n      opacity: 0;\n      animation: fadeInAnimation 0.3s ease-in-out forwards;\n    }\n    .rank-text {\n      font: 800 24px 'Segoe UI', Ubuntu, Sans-Serif; fill: #ffffff;\n      animation: scaleInAnimation 0.3s ease-in-out forwards;\n    }\n    \n    .not_bold { font-weight: 400 }\n    .bold { font-weight: 700 }\n    .icon {\n      fill: #61dafb;\n      display: block;\n    }\n\n    .rank-circle-rim {\n      stroke: #61dafb;\n      fill: none;\n      stroke-width: 6;\n      opacity: 0.2;\n    }\n    .rank-circle {\n      stroke: #61dafb;\n      stroke-dasharray: 250;\n      fill: none;\n      stroke-width: 6;\n      stroke-linecap: round;\n      opacity: 0.8;\n      transform-origin: -10px 8px;\n      transform: rotate(-90deg);\n      animation: rankAnimation 1s forwards ease-in-out;\n    }\n    \n    @keyframes rankAnimation {\n      from {\n        stroke-dashoffset: 251.32741228718345;\n      }\n      to {\n        stroke-dashoffset: 123.60449893920902;\n      }\n    }\n  \n  \n\n          \n    /* Animations */\n    @keyframes scaleInAnimation {\n      from {\n        transform: translate(-5px, 5px) scale(0);\n      }\n      to {\n        transform: translate(-5px, 5px) scale(1);\n      }\n    }\n    @keyframes fadeInAnimation {\n      from {\n        opacity: 0;\n      }\n      to {\n        opacity: 1;\n      }\n    }\n  \n          \n        "
      }
    </style>
    <rect
      data-testid="card-bg"
      x={0.5}
      y={0.5}
      rx={4.5}
      height="99%"
      stroke="#e4e2e2"
      width={466}
      fill="#20232a"
      strokeOpacity={1}
    />
    <g data-testid="card-title" transform="translate(25, 35)">
      <g transform="translate(0, 0)">
        <text x={0} y={0} className="header" data-testid="header">
          {"Sunghan Kim's GitHub Stats"}
        </text>
      </g>
    </g>
    <g data-testid="main-card-body" transform="translate(0, 55)">
      <g data-testid="rank-circle" transform="translate(390.5, 47.5)">
        <circle className="rank-circle-rim" cx={-10} cy={8} r={40} />
        <circle className="rank-circle" cx={-10} cy={8} r={40} />
        <g className="rank-text">
          <text
            x={-5}
            y={3}
            alignmentBaseline="central"
            dominantBaseline="central"
            textAnchor="middle"
            data-testid="level-rank-icon"
          >
            {"\n          A+\n        "}
          </text>
        </g>
      </g>
      <svg x={0} y={0} {...props}>
        <g transform="translate(0, 0)">
          <g
            className="stagger"
            style={{
              animationDelay: "450ms",
            }}
            transform="translate(25, 0)"
          >
            <svg
              data-testid="icon"
              className="icon"
              viewBox="0 0 16 16"
              width={16}
              height={16}
              {...props}
            >
              <path
                fillRule="evenodd"
                d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
              />
            </svg>
            <text className="stat  bold" x={25} y={12.5}>
              {"Total Stars Earned:"}
            </text>
            <text
              className="stat  bold"
              x={219.01}
              y={12.5}
              data-testid="stars"
            >
              {"7"}
            </text>
          </g>
        </g>
        <g transform="translate(0, 25)">
          <g
            className="stagger"
            style={{
              animationDelay: "600ms",
            }}
            transform="translate(25, 0)"
          >
            <svg
              data-testid="icon"
              className="icon"
              viewBox="0 0 16 16"
              width={16}
              height={16}
              {...props}
            >
              <path
                fillRule="evenodd"
                d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z"
              />
            </svg>
            <text className="stat  bold" x={25} y={12.5}>
              {"Total Commits (2023):"}
            </text>
            <text
              className="stat  bold"
              x={219.01}
              y={12.5}
              data-testid="commits"
            >
              {"516"}
            </text>
          </g>
        </g>
        <g transform="translate(0, 50)">
          <g
            className="stagger"
            style={{
              animationDelay: "750ms",
            }}
            transform="translate(25, 0)"
          >
            <svg
              data-testid="icon"
              className="icon"
              viewBox="0 0 16 16"
              width={16}
              height={16}
              {...props}
            >
              <path
                fillRule="evenodd"
                d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"
              />
            </svg>
            <text className="stat  bold" x={25} y={12.5}>
              {"Total PRs:"}
            </text>
            <text className="stat  bold" x={219.01} y={12.5} data-testid="prs">
              {"110"}
            </text>
          </g>
        </g>
        <g transform="translate(0, 75)">
          <g
            className="stagger"
            style={{
              animationDelay: "900ms",
            }}
            transform="translate(25, 0)"
          >
            <svg
              data-testid="icon"
              className="icon"
              viewBox="0 0 16 16"
              width={16}
              height={16}
              {...props}
            >
              <path
                fillRule="evenodd"
                d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"
              />
            </svg>
            <text className="stat  bold" x={25} y={12.5}>
              {"Total Issues:"}
            </text>
            <text
              className="stat  bold"
              x={219.01}
              y={12.5}
              data-testid="issues"
            >
              {"16"}
            </text>
          </g>
        </g>
        <g transform="translate(0, 100)">
          <g
            className="stagger"
            style={{
              animationDelay: "1050ms",
            }}
            transform="translate(25, 0)"
          >
            <svg
              data-testid="icon"
              className="icon"
              viewBox="0 0 16 16"
              width={16}
              height={16}
              {...props}
            >
              <path
                fillRule="evenodd"
                d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
              />
            </svg>
            <text className="stat  bold" x={25} y={12.5}>
              {"Contributed to (last year):"}
            </text>
            <text
              className="stat  bold"
              x={219.01}
              y={12.5}
              data-testid="contribs"
            >
              {"9"}
            </text>
          </g>
        </g>
      </svg>
    </g>
  </svg>
);
export default SVGComponent;
