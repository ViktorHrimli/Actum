import clsx from "clsx";

import { ImageSize } from "../../enums/enums";

import styles from "./styles.module.scss";

const Image = ({
  alt,
  isCentered,
  isCircular,
  className,
  height,
  size,
  src,
  width,
}) => (
  <img
    className={clsx(
      styles.image,
      isCircular && styles.circular,
      isCentered && styles.centered,
      size && styles[`imageSize__${size}`],
      className
    )}
    width={width}
    height={height}
    src={src}
    alt={alt}
  />
);

Image.defaultProps = {
  isCentered: false,
  isCircular: false,
  className: undefined,
  height: undefined,
  size: undefined,
  width: undefined,
};

export { Image };
