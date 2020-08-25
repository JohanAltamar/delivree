import { neighborhoods } from './areas';

export const getDeliveryValue = (city, neighborhood) => {
  const { value } = neighborhoods[city].find(
    (area) => area.neighborhood === neighborhood
  );
  //   console.log(value);
  return value;
};
