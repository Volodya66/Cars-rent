import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import Notiflix from 'notiflix';
import { openModal, closeModal } from '../../redux/modal/operation';
import { dataCar, isOpenModal } from '../../redux/car/selectors';
import { getCarsBrands, getCarsData } from '../../redux/car/operations';

import { ChoiceCarsWrapper } from './ChoiceCars.styled';
import FormFilters from '../../components/Form/FormFilters';
import Layout from '../../components/Layout/Layout';
import ListCars from '../../components/ListCars/ListCar';
import ModalDetails from '../../components/Modal/ModalDetailsCard';

const ChoiceCars = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filterParams, srtFilterParams] = useState({});

  const dispatch = useDispatch();
  const modalOpen = useSelector(isOpenModal);

  const dataCarsDetails = useSelector(dataCar);

  useEffect(() => {
    dispatch(getCarsBrands());
    dispatch(getCarsData());
  }, [dispatch]);

  const arrCars = dataCarsDetails
    ? dataCarsDetails.reduce((previousValue, car) => {
        const stop = page * 12;
        if (previousValue.length === stop) return previousValue;
        previousValue.push(car);
        return previousValue;
      }, [])
    : [];

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

  useEffect(() => {
    if (dataCarsDetails) {
      const pages = Math.ceil(dataCarsDetails.length / 12);
      setTotalPages(pages);
    }
    if (page < totalPages) {
      Notiflix.Notify.info('Автомобілі успішно добавлені!');
    }
    if (page === totalPages) {
      Notiflix.Notify.info(
        'Шановний клієнте, наразі це весь список автомобілів, удачного вибору!'
      );
    }
  }, [arrCars, dataCarsDetails, page, totalPages]);

  const clickOnLoadMore = () => {
    setPage((prevState) => prevState + 1);
  };

  const clickOnDetailsModal = (e) => {
    const btn = e.currentTarget;
    const id = btn.getAttribute('id');

    const carIsModal = arrCars.find((car) => car.id == id);
    if (carIsModal) {
      dispatch(openModal(carIsModal));
    }
  };

  const onClickBtnFavorite = (e) => {
    const button = e.currentTarget;
    const id = button.getAttribute('id');

    const favoriteCar =
      JSON.parse(localStorage.getItem('arrCarsFavorite')) || [];

    const carIsFavoriteIndex = favoriteCar.findIndex((car) => car.id == id);

    if (carIsFavoriteIndex !== -1) {
      favoriteCar.splice(carIsFavoriteIndex, 1);
      localStorage.setItem('arrCarsFavorite', JSON.stringify(favoriteCar));
    } else {
      const car = arrCars.find((car) => car.id == id);
      favoriteCar.push(car);
      localStorage.setItem('arrCarsFavorite', JSON.stringify(favoriteCar));
    }

    button.querySelector('.svg-favorite').classList.toggle('favorite');
  };

  return (
    <Layout>
      <ChoiceCarsWrapper>
        <FormFilters setFilterParams={srtFilterParams} />
        <ul className="list-car">
          <ListCars
            clickOnDetails={clickOnDetailsModal}
            onClickFavorite={onClickBtnFavorite}
            dataCar={filtersCars(filterParams, arrCars)}
          />
        </ul>
        <div className="wrapper-btn">
          {page < totalPages && (
            <button onClick={clickOnLoadMore} className="btn-add-photo">
              Load more
            </button>
          )}
        </div>
        {modalOpen && <ModalDetails close={closeModal} />}
      </ChoiceCarsWrapper>
    </Layout>
  );
};

export default ChoiceCars;
