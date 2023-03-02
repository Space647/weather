/** @jsxImportSource @emotion/react */
import { style } from "./style";
import SVGSearch from "../../assets/icons/search_24.svg";

export const Input = ({}): JSX.Element => {
  return (
    <div css={style.wrapper}>
      <input css={style.input} placeholder="search location" />
      <img css={style.icon} src={SVGSearch} alt="My Happy SVG" />
    </div>
  );
};
