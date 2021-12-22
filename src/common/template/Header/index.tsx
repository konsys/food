import { useStore } from 'effector-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { pathNames } from '../../../routes/paths';
import { route$ } from '../model/store';
import './styles.scss';

interface Props {}

export const Header = (props: Props) => {
  const store = useStore(route$);
  return (
    <header className="top-navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img src="images/logo.png" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbars-rs-food"
            aria-controls="navbars-rs-food"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbars-rs-food">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item ${store.path === HOME.path && 'active'}`}>
                <NavLink to={HOME.path} className="nav-link">
                  {pathNames.HOME.name}
                </NavLink>
              </li>
              <li className={`nav-item ${store.path === CONTACTS.path && 'active'}`}>
                <NavLink to={CONTACTS.path} className="nav-link">
                  {pathNames.CONTACTS.name}
                </NavLink>
              </li>
              <li className={`nav-item ${store.path === ABOUT.path && 'active'}`}>
                <NavLink to={ABOUT.path} className="nav-link">
                  {pathNames.ABOUT.name}
                </NavLink>
              </li>
              <li className={`nav-item ${store.path === FOOD_MENU.path && 'active'}`}>
                <NavLink to={FOOD_MENU.path} className="nav-link">
                  {FOOD_MENU.name}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

const { HOME, ABOUT, CONTACTS, FOOD_MENU } = pathNames;
