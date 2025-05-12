import { Dimensions } from "react-native"

export const useResponsiveHeight = (percentage: number) => {
  const {height} = Dimensions.get("window");
  return height * (percentage / 100);
};