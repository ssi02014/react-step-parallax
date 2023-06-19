export const getConvertedImageSize = (size?: string | number) => {
  if (typeof size === 'number') {
    return `${size}px`;
  }

  if (!size) return null;
  if (isNaN(+size)) return null;
  return `${size}px`;
};
