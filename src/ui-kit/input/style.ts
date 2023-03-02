import { css } from "@emotion/react";

export const style = {
  wrapper: css({
    display: "flex",
    alignItems: "center",
    justifyItems: "center",
    height: "46px",
    width: "327px",
    background: "#FDFCFC",
    // background: "red",
    borderRadius: "15px",
    border: "0px solid",
  }),

  input: css({
    height: "23px",
    width: "100%",
    marginLeft: "20px",
    marginRight: "8px",
    border: "0px none",
    outline: "none",
    background: "#FDFCFC",
    "::placeholder": {
      color: "C4C4C4",
      fontSize: "15px",
    },
    // ":focus": {},
  }),
  icon: css({
    marginRight: "20px",
  }),
};
