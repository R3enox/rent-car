import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import svg from '../../assets/sprite.svg';

const page = [
  { navigate: '/', page: 'Home' },
  { navigate: '/catalog', page: 'Catalog' },
  { navigate: '/favorites', page: 'Favorites' },
];

export const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.navigation}>
        <NavLink className={css.logo} to="/">
          <svg className={css.logoIcon}>
            <use href={svg + '#icon-car-logo'}></use>
          </svg>
          RentCar
        </NavLink>
        <div className={css.linkWrapper}>
          {page.map(({ navigate, page }) => {
            return (
              <NavLink
                key={page}
                className={({ isActive }) => {
                  return !isActive ? css.headerLink : css.active;
                }}
                to={navigate}
              >
                {page}
              </NavLink>
            );
          })}
        </div>
      </nav>
    </header>
  );
};
