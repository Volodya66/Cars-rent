import { FormWrapper } from './FormFilters.styles';
import { Formik, Form, Field } from 'formik';

import schema from '../../schemas/schemasFormYup';

const FormFilters = () => {
  const handleSubmit = (values, action) => {
    const { car, prise, carMileageMin, carMileageMax } = values;
    const userOrder = {
      car,
      prise,
      carMileageMin,
      carMileageMax,
    };
    console.log(userOrder);
    action.resetForm();
  };
  return (
    <FormWrapper>
      <Formik
        validationSchema={schema}
        initialValues={{
          car: '',
          prise: '',
          carMileageMin: 'form',
          carMileageMax: 'to',
        }}
        onSubmit={handleSubmit}
      >
        <Form className="form-filters" autoComplete="on">
          <label htmlFor="car">
            <p className="text-input">Car brand</p>
            <Field
              placeholder="Enter the text"
              className="car-brand"
              type="car"
              name="car"
            />
          </label>
          <label htmlFor="prise">
            <p className="text-input">Price/ 1 hour</p>
            <Field
              placeholder="To $"
              className="car-prise"
              type="prise"
              name="prise"
            />
          </label>
          <label htmlFor="carMileageMin">
            <p className="text-input">Сar mileage / km</p>
            <Field
              placeholder="From"
              className="mileage-left"
              type="carMileageMin"
              name="carMileageMin"
            />
          </label>
          <label htmlFor="carMileageMax">
            <Field
              placeholder="To"
              className="mileage-right "
              type="carMileageMax"
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
