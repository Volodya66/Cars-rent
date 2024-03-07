import { NavLink } from 'react-router-dom';

import { HeaderWrapper } from './Header.styled';

export const Header = () => {
  return (
    <HeaderWrapper>
      <nav className="navigate">
        <NavLink className="navigate-link" to="/">
          Car rental
        </NavLink>

        <ul className="list-navigate">
          <li>
            <NavLink className="navigate-link" to="/catalog">
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink className="navigate-link" to="/favorites">
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </HeaderWrapper>
  );
};
export default Header;
