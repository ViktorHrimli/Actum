"use client";
import LazyLoad from "react-lazy-load";

export default function LazyLoadComponent({ children }) {
  return (
    <LazyLoad threshold={0.58}>
      <>{children}</>
    </LazyLoad>
  );
}
