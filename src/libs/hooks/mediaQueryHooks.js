import { useMediaQuery } from "react-responsive";

export const useIsSmall = () => useMediaQuery({ query: "(max-width: 767px)" });
export const useIsTab = () => useMediaQuery({ query: "(max-width: 1279px)" });
export const useIsBig = () => useMediaQuery({ query: "(min-width: 1280px)" });
export const useIsTabOrSmallLaptop = () =>
  useMediaQuery({ minWidth: 768, maxWidth: 1279 });

export const useSmallLaptop = () =>
  useMediaQuery({ query: "(max-width: 1439px)" });
