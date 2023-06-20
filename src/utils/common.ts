export const getConvertedCssSize = (size?: string | number) => {
  if (!size) return null;
  if (isNaN(+size)) return null;
  return `${size}px`;
};
