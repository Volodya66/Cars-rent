import { styled } from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 1000;

  & .modal {
    position: relative;
    z-index: 1000;
    border-radius: 24px;
    width: 541px;
    min-height: 752px;
    height: auto;
    background: #fff;
    padding: 40px;
  }

  & .button-close {
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    display: flex;
    justify-content: center;
    top: 16px;
    right: 16px;
  }
  & .svg-close {
    width: 24px;
    height: 24px;
  }

  & .wrapper-image {
    border-radius: 14px;
    overflow: hidden;
    width: 461px;
    height: 248px;
    margin-bottom: 14px;
  }

  & .image-modal {
    width: 461px;
    height: 248px;
    object-fit: cover;
  }

  & .list-details-make {
    display: flex;
    gap: 6px;
  }

  & .text-details-make {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.33333;
    color: #121417;
    margin-bottom: 8px;
  }

  & .span-details {
    color: #3470ff;
  }

  & .list-details-two {
    display: flex;
    flex-wrap: wrap;
    gap: 4px 6px;
    margin-bottom: 14px;
  }

  & .details-two-item {
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
  }

  & .description {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.42857;
    color: #121417;
    margin-bottom: 24px;
  }

  & .list-accessories {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 24px;
  }

  & .accessories {
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
  }
  & .rental-conditions {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.42857;
    color: #121417;
    margin-bottom: 8px;
  }

  & .rental-conditions-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  & .text-rental {
    padding: 7px 14px;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: #363535;
  }

  & .text-rental:nth-child(2) {
    margin-right: 100px;
  }
  & .span-rental {
    font-weight: 600;
    color: #3470ff;
  }

  & .rental-btn {
    border: none;
    border-radius: 12px;
    padding: 12px 50px;
    width: 168px;
    height: 44px;
    background: #3470ff;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.42857;
    color: #fff;
    margin-top: 24px;
    transition: background-color 0.25s ease-in;

    &:hover {
      background: #0b44cd;
    }
  }
`;
