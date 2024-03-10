import { styled } from 'styled-components';

export const ListCar = styled.li`
  list-style: none;
  width: 274px;
  height: 426px;

  & .wrapper-img {
    border-radius: 14px;
    width: 274px;
    height: 268px;
    background: #f3f3f2;
    margin-bottom: 14px;
    position: relative;
  }

  & .button-favorite {
    border: none;
    background-color: transparent;
    position: absolute;
    cursor: pointer;
    top: 14px;
    right: 14px;
  }
  & .svg-favorite {
    width: 18px;
    height: 18px;
    stroke-width: 1.5px;
    stroke: rgba(255, 255, 255, 0.8);
    fill: white;
  }
  & .card-img {
    border-radius: 14px;
    width: 274px;
    height: 268px;
    object-fit: cover;
  }

  & .list-details {
    display: flex;
    margin-bottom: 8px;
  }

  & .span-model {
    font-size: 16px;
  }
  & .details-item {
    height: 24px;

    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: #121417;
  }

  & .details-item:nth-child(2) {
    margin-left: 4px;
    color: #3470ff;
  }

  & .details-item:nth-child(3) {
    margin-left: 4px;
    margin-right: 4px;
  }

  & .details-item:nth-child(4) {
    margin-left: auto;
  }

  & .button-details {
    font-family: 'Manrope', sans-serif;
    border-radius: 12px;
    padding: 12px 98px;
    width: 274px;
    height: 44px;
    background: #3470ff;
    border: none;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.42857;
    color: #fff;
    transition: background-color 0.25s ease-in;

    &:hover {
      background: #0b44cd;
    }
  }

  & .list-details-two {
    margin-bottom: 28px;
    display: flex;
    flex-wrap: wrap;
    gap: 4px 6px;
  }

  & .details-two-item {
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
  }
  & .favorite {
    fill: #3470ff;
  }
`;
