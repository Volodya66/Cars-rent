import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import { carModels, dataCar } from '../../redux/car/selectors';

import { getCarsBrands, getCarsData } from '../../redux/car/operations';

import { ChoiceCarsWrapper } from './ChoiceCars.styled';
import FormFilters from '../../components/Form/FormFilters';
import Layout from '../../components/Layout/Layout';
import ListCars from '../../components/ListCars/ListCar';

const ChoiceCars = () => {
  const dispatch = useDispatch();

  const models = useSelector(carModels);
  const dataCarsDetails = useSelector(dataCar);

  useEffect(() => {
    dispatch(getCarsBrands());
    dispatch(getCarsData());
  }, [dispatch]);

  return (
    <Layout>
      <ChoiceCarsWrapper>
        <FormFilters modelsCar={models} />
        <ListCars />
      </ChoiceCarsWrapper>
    </Layout>
  );
};

export default ChoiceCars;
