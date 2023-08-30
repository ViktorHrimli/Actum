import { useMediaQuery } from "react-responsive";

export const useIsSmall = () => useMediaQuery({ query: "(min-width: 320px)" });
export const useIsBig = () => useMediaQuery({ query: "(min-width: 1280px)" });
