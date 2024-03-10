import { useState } from 'react';

import { FavoriteWrapper } from './FavoritePage.styled';
import Layout from '../../components/Layout/Layout';
import FormFilters from '../../components/Form/FormFilters';
import ListCars from '../../components/ListCars/ListCar';
export const FavoritePage = () => {
  const [filterParams, setFilterParams] = useState({});
  const favoriteCar = JSON.parse(localStorage.getItem('arrCarsFavorite')) || [];

  const filtersCars = (params, cars) => {
    let filteredCars = cars;

    if (params.make) {
      filteredCars = filteredCars.filter((car) =>
        car.make.toLowerCase().includes(params.make.toLowerCase())
      );
    }
    if (params.rentalPrice) {
      filteredCars = filteredCars.filter(
        (car) => parseFloat(car.rentalPrice.slice(1)) == params.rentalPrice
      );
    }

    if (params.carMileageMin || params.carMileageMax) {
      filteredCars = filteredCars.filter(
        (car) =>
          (!params.carMileageMin || car.mileage >= params.carMileageMin) &&
          (!params.carMileageMax || car.mileage <= params.carMileageMax)
      );
    }

    return filteredCars;
  };
  return (
    <Layout>
      <FavoriteWrapper>
        <FormFilters setFilterParams={setFilterParams} />
        <ul className="favorite-list">
          <ListCars dataCar={filtersCars(filterParams, favoriteCar)} />
        </ul>
        favoriteCar
      </FavoriteWrapper>
      ;
    </Layout>
  );
};
export default FavoritePage;
