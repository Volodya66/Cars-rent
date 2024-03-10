import { ListCar } from './ListCar.styled';

import { FaHeart } from 'react-icons/fa';

const ListCars = ({ dataCar, onClickFavorite, clickOnDetails }) => {
  function truncateSentence(sentence) {
    if (sentence.length > 8) {
      return sentence.substring(0, 8 - 3) + '...';
    } else {
      return sentence;
    }
  }

  return (
    <>
      {dataCar &&
        dataCar.map(
          ({
            id,
            favorite,
            mileage,
            model,
            img,
            address,
            year,
            rentalPrice,
            make,
            type,
            accessories,
            rentalCompany,
          }) => {
            const city = address.split(',')[1].trim();
            const ukraine = address.split(',')[2].trim();
            const rental = rentalCompany.split(' ').slice(0, 2).join(' ');
            const mileagePrig = mileage.toLocaleString();
            const desiredWords = ['Premium audio system', 'Sound system'];

            const foundAccessory = () => {
              const premium = accessories.find((accessory) =>
                desiredWords.some((word) => accessory.includes(word))
              );

              if (!premium) {
                return '';
              }
              return `${premium}  |`;
            };

            return (
              <ListCar key={id}>
                <div className="car-item">
                  <div className="wrapper-img">
                    <button
                      id={id}
                      onClick={onClickFavorite}
                      className="button-favorite"
                    >
                      {favorite ? (
                        <FaHeart className="svg-favorite favorite" />
                      ) : (
                        <FaHeart className="svg-favorite" />
                      )}
                    </button>

                    <img className="card-img" src={img} alt={make} />
                  </div>

                  <ul className="list-details">
                    <li className="details-item">
                      <span className="span-model">{make} </span>
                    </li>
                    <li className="details-item">
                      <span> {truncateSentence(model)}</span>,
                    </li>
                    <li className="details-item">{year}</li>
                    <li className="details-item">{rentalPrice}</li>
                  </ul>
                  <ul className="list-details-two">
                    <li className="details-two-item">{city} |</li>
                    <li className="details-two-item"> {ukraine} | </li>
                    <li className="details-two-item"> {type} | </li>
                    <li className="details-two-item"> {model} | </li>
                    <li className="details-two-item"> {rental} |</li>
                    <li className="details-two-item"> {mileagePrig} | </li>
                    <li className="details-two-item"> {foundAccessory()} </li>
                  </ul>
                </div>
                <button
                  id={id}
                  onClick={clickOnDetails}
                  className="button-details"
                >
                  Learn more
                </button>
              </ListCar>
            );
          }
        )}
    </>
  );
};

export default ListCars;
