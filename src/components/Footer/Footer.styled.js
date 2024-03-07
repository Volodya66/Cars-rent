import { styled } from 'styled-components';

export const FooterWrapper = styled.footer`
  margin-left: auto;
  margin-right: auto;
  width: 1440px;
  padding: 20px 128px;

  & .list-contact {
    display: flex;
    gap: 40px;
    justify-content: center;
  }

  & .link {
    color: #111111;
    cursor: pointer;
    font-size: 18px;
  }
`;
