import { FooterWrapper } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterWrapper>
      <ul className="list-contact">
        <li>
          <a className="link" href="tel:+380000000000">
            +380000000000
          </a>
        </li>
        <li>
          <a className="link" href="mailto:mailing@gmail.com">
            mailing@gmail.com
          </a>
        </li>
      </ul>
    </FooterWrapper>
  );
};

export default Footer;
