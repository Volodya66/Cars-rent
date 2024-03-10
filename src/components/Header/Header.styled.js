import { styled } from 'styled-components';

export const HeaderWrapper = styled.header`
  margin-left: auto;
  margin-right: auto;
  width: 1440px;
  padding: 20px 128px;

  & .navigate {
    display: flex;
    justify-content: space-between;
  }

  & .active {
    border-bottom: 2px solid blue;
  }

  & .list-navigate {
    display: flex;
    gap: 40px;
  }

  & .navigate-link {
    font-size: 20px;
    color: #111111;
    cursor: pointer;
  }
`;
