import { FormWrapper } from './FormFilters.styles';
import { Formik, Form, Field } from 'formik';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { carModels } from '../../redux/car/selectors';
import { getCarsBrands } from '../../redux/car/operations';

import schema from '../../schemas/schemasFormYup';

const FormFilters = ({ setFilterParams }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarsBrands());
  }, [dispatch]);
  const models = useSelector(carModels) || [];

  const prices = Array.from({ length: 30 }, (_, index) => (index + 1) * 10);

  const handleSubmit = (values) => {
    const { make, rentalPrice, carMileageMin, carMileageMax } = values;
    const userOrder = {
      make,
      rentalPrice,
      carMileageMin,
      carMileageMax,
    };
    const sanitizeUserOrder = (order) => {
      if (order.make === 'Enter the text') {
        order.make = '';
      }
      if (order.rentalPrice === 'To $') {
        order.rentalPrice = 0;
      }
      return order;
    };

    setFilterParams(sanitizeUserOrder(userOrder));
  };
  return (
    <FormWrapper>
      <Formik
        validationSchema={schema}
        initialValues={{
          make: '',
          rentalPrice: 0,
          carMileageMin: '',
          carMileageMax: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form className="form-filters" autoComplete="on">
          <label className="label-car" htmlFor="make">
            <p className="text-input">Car brand</p>

            <Field className="car-brand" as="select" name="make">
              <option value={'Enter the text'}>Enter the text</option>
              {models.map((car) => (
                <option key={car} value={car}>
                  {car}
                </option>
              ))}
            </Field>
          </label>
          <label className="label-prise" htmlFor="rentalPrice">
            <p className="text-input">Price/ 1 hour</p>

            <Field as="select" className="car-prise" name="rentalPrice">
              <option value={'To $'}>To $</option>
              {prices.map((price) => (
                <option key={price} value={price}>
                  {price}
                </option>
              ))}
            </Field>
          </label>
          <label htmlFor="carMileageMin">
            <p className="text-input">Сar mileage / km</p>
            <Field
              placeholder="From"
              className="mileage-left"
              type="number"
              min="1"
              max="99999"
              name="carMileageMin"
            />
          </label>
          <label htmlFor="carMileageMax">
            <Field
              placeholder="To"
              className="mileage-right "
              type="number"
              min="1"
              max="99999"
              name="carMileageMax"
            />
          </label>
          <button className="button-submit" type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </FormWrapper>
  );
};

export default FormFilters;
