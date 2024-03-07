import { styled } from 'styled-components';

export const FormWrapper = styled.div`
  & .form-filters {
    display: flex;
    align-items: flex-end;
    margin-left: auto;
    margin-right: auto;
  }
  & .text-input {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.28571;
    color: #8a8a89;
    margin-bottom: 8px;
    outline: none;
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
  }

  & .mileage-left {
    border-radius: 14px 0 0 14px;
    width: 160px;
    height: 48px;
    background: #f7f7fb;
    border: none;
    border-right: 1px solid rgba(138, 138, 137, 0.2);
    outline: none;
  }
  & .mileage-right {
    border-radius: 0 14px 14px 0;
    width: 160px;
    height: 48px;
    background: #f7f7fb;
    border: none;
    outline: none;
  }
`;
