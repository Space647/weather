/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from "@emotion/react";
import { style } from "./style";
import SVGSearch from "../../assets/icons/search_24.svg";

interface Iprops {
  children: JSX.Element;
  styles?: Interpolation<Theme>;
}

export const Card = ({ children, styles }: Iprops): JSX.Element => {
  return <div css={[style.wrapper, styles]}>{children}</div>;
};
