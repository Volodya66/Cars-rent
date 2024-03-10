import { styled } from 'styled-components';

export const HomePageWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 1440px;
  padding: 0px 128px;

  & .text-home {
    font-size: 40px;
    width: 810px;
    line-height: 1.2;
    margin-bottom: 40px;
  }

  & .list-about-us {
    display: flex;

    margin-bottom: 40px;
  }

  & .details {
    margin-bottom: 40px;
  }
  &,
  users-details {
    margin-bottom: 20px;
  }
  & .list-users-details {
    display: flex;
    flex-wrap: wrap;
    gap: 50px 384px;
  }

  & .list-users-details > li {
    width: 400px;
  }
`;
