import { styled } from 'styled-components';

export const FormWrapper = styled.div`
  & .form-filters {
    width: 859px;
    display: flex;
    align-items: flex-end;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
  }
  & .text-input {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.28571;
    color: #8a8a89;
    margin-bottom: 8px;
    outline: none;
  }

  & .label-car,
  .label-prise {
    margin-right: 18px;
    animation: all 0.3s ease-in-out;

    position: relative;

    &::before {
      content: '▼';
      position: absolute;
      top: 41px;
      right: 0;
      transform: translateX(-50%);
      pointer-events: none;
    }

    &:hover::before {
      content: '▲';
    }
  }
  & .car-brand,
  .car-prise {
    border: none;
    border-radius: 14px;
    padding: 14px 89px 14px 18px;
    width: 224px;
    height: 48px;
    background: #f7f7fb;
    outline: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  & .mileage-left {
    border-radius: 14px 0 0 14px;
    width: 160px;
    height: 48px;
    background: #f7f7fb;
    border: none;
    border-right: 1px solid rgba(138, 138, 137, 0.2);
    outline: none;
    padding: 24px 14px;
  }
  & .mileage-right {
    border-radius: 0 14px 14px 0;
    width: 160px;
    height: 48px;
    background: #f7f7fb;
    border: none;
    outline: none;
    padding: 24px 14px;
  }
  & .button-submit {
    border: none;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.42857;
    color: #fff;
    border-radius: 12px;
    padding: 14px 44px;
    width: 136px;
    height: 48px;
    background: #3470ff;
    margin: auto 0 0 18px;
    transition: background-color 0.25s ease-in;

    &:hover {
      background: #0b44cd;
    }
  }
`;
