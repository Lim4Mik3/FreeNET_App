export const zipcodeMask = (zipcode: string): string => {
  return zipcode.replace(/[^\d]+/g, '').replace(/(\d{5})(\d{3})/, '$1-$2');
};
