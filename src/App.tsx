/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

const cardCss = {
  self: css({
    backgroundColor: "white",
    border: "1px solid #eee",
    borderRadius: "0.5rem",
    padding: "1rem",
  }),

  title: css({
    fontSize: "1.25rem",
  }),
};

function App() {
  return (
    <div
      css={css`
        background-color: hotpink;
        &:hover {
          color: ${"red"};
        }
      `}
    >
      This has a hotpink background.
    </div>
  );
}

export default App;
