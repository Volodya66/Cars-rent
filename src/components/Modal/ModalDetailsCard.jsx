import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ModalWrapper } from './Modal.styled';
import { IoClose } from 'react-icons/io5';

import { modalInCar } from '../../redux/car/selectors';

export const ModalDetails = ({ close }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Escape') {
        dispatch(close());
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [dispatch]);

  const dataModal = useSelector(modalInCar);

  const {
    img,
    make,
    model,
    address,
    id,
    year,
    type,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    functionalities,
    rentalConditions,
    mileage,
    rentalPrice,
  } = dataModal;
  const city = address.split(',')[1].trim();
  const ukraine = address.split(',')[2].trim();
  const ageText = rentalConditions.split('\n');
  const mileageee = Number(mileage).toLocaleString('en-US', {
    useGrouping: true,
  });
  const firstValue = ageText[0];
  const ageDigit = parseInt(firstValue.replace(/\D/g, ''), 10);

  const secondValue = ageText[1];

  const thirdValue = ageText[2];

  const clickBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      dispatch(close());
    }
  };

  return (
    <ModalWrapper onClick={clickBackdrop}>
      <div className="modal">
        <button
          onClick={() => {
            dispatch(close());
          }}
          className="button-close"
        >
          <IoClose className="svg-close" />
        </button>
        <div className="wrapper-image">
          <img className="image-modal" src={img} alt="" />
        </div>
        <ul className="list-details-make">
          <li className="text-details-make">{make}</li>
          <li className="text-details-make">
            <span className="span-details">{model}</span>,
          </li>
          <li className="text-details-make">{year}</li>
        </ul>

        <ul className="list-details-two">
          <li className="details-two-item">{city} |</li>
          <li className="details-two-item"> {ukraine} | </li>
          <li className="details-two-item"> Id : {id} | </li>
          <li className="details-two-item"> {model} | </li>
          <li className="details-two-item"> Year : {year} |</li>
          <li className="details-two-item"> Type : {type} | </li>
          <li className="details-two-item">
            Fuel consumption {fuelConsumption}{' '}
          </li>
          <li className="details-two-item"> Engine Size : {engineSize} | </li>
        </ul>
        <p className="description">{description}</p>
        <p> Accessories and functionalities: </p>
        <ul className="list-accessories">
          {accessories.map((li, i) => (
            <li className="accessories" key={i}>
              {li} |
            </li>
          ))}
          {functionalities.map((li, i) => (
            <li className="accessories" key={i}>
              {li} |
            </li>
          ))}
        </ul>
        <p className="rental-conditions">Rental Conditions: </p>
        <ul className="rental-conditions-list">
          <li className="text-rental">
            Minimum age : <span className="span-rental">{ageDigit}</span>
          </li>
          <li className="text-rental">{secondValue}</li>
          <li className="text-rental">{thirdValue}</li>
          <li className="text-rental">
            {' '}
            Mileage:<span className="span-rental">{mileageee}</span>
          </li>
          <li className="text-rental">
            Prise <span className="span-rental">{rentalPrice}</span>
          </li>
        </ul>

        <button className="rental-btn">Rental car </button>
      </div>
    </ModalWrapper>
  );
};

export default ModalDetails;
