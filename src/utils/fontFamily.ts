import { fontFamilies } from "../constants/fonts";
export const getFontFamily = (weight: "normal" | "medium" | "bold") => {
  return fontFamilies.POPPINS[weight];
};
