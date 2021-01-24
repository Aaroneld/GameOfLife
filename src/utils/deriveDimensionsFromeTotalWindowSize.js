import { size } from "../styles/globals";

export default function deriveDimensionsFromTotalWindowSize() {
  function getRawWidth() {
    if (window.innerWidth >= size.desktop) return window.innerWidth * 0.35;
    if (window.innerWidth >= size.laptop && window.innerWidth < size.desktop)
      return window.innerWidth * 0.4;
    else if (
      window.innerWidth <= size.laptop &&
      window.innerWidth >= size.tablet - 1
    ) {
      return window.innerWidth * 0.6;
    } else return window.outerWidth * 0.9;
  }
  console.log(window.outerWidth);
  const rawWidth = getRawWidth();

  if (rawWidth > window.innerHeight * (3 / 4)) {
    return rawWidth - window.innerHeight * (1 / 7);
  } else {
    return rawWidth;
  }
}
