import { styled } from 'styled-components';

export const ChoiceCarsWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 1440px;
  padding: 0 128px;

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
