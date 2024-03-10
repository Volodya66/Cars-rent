import { styled } from 'styled-components';

export const ChoiceCarsWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 1440px;
  padding: 0 128px;

  & .list-car {
    display: flex;
    flex-wrap: wrap;
    gap: 50px 29px;
    margin-bottom: 100px;
  }
  & .wrapper-btn {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  & .btn-add-photo {
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    background-color: transparent;
    color: #3470ff;
    border: none;
  }

  // & .favorite {
  //   fill: #3470ff;
  // }
`;
