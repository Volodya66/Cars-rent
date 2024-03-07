import { FormWrapper } from './FormFilters.styles';
import { Formik, Form, Field } from 'formik';

import schema from '../../schemas/schemasFormYup';

const FormFilters = ({ modelsCar }) => {
  const prices = Array.from({ length: 20 }, (_, index) => (index + 1) * 10);
  console.log('modelsCar: ', modelsCar);
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
          carMileageMin: '',
          carMileageMax: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form className="form-filters" autoComplete="on">
          <label className="label-car" htmlFor="car">
            <p className="text-input">Car brand</p>

            <Field className="car-brand" as="select" name="car">
              <option value={'Enter the text'}>Enter the text</option>
              {modelsCar.map((car) => (
                <option key={car} value={car}>
                  {car}
                </option>
              ))}
              {/* <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option> */}
            </Field>
          </label>
          <label className="label-prise" htmlFor="prise">
            <p className="text-input">Price/ 1 hour</p>
            {/* <Field
              placeholder="To $"
              as="select"
              className="car-prise"
              type="prise"
              name="prise"
            /> */}

            <Field as="select" className="car-prise" name="prise">
              <option value={'Enter the text'}>To $</option>
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
