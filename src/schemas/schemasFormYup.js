import * as Yup from 'yup';

const schema = Yup.object().shape({
  car: Yup.string(),
  prise: Yup.string(),
  carMileageMin: Yup.string(),
  carMileageMax: Yup.string(),
});

export default schema;
