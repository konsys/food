import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { MenuLink } from '../FooterMenu/FooterMenu';
import './footerCities.less';

interface Props {
  title: string;
  links: MenuLink[];
}

function FooterCities(props: Props) {
  const { title, links } = props;

  return (
    <>
      <div className='footer-bottom__title'>{title}</div>
      <div className='footer-nav__cities d-flex justify-content-start'>
        {links.map(({ link, text }, index) => (
          <div key={index} className='footer-nav__cities--item'>
            <Link to={link} title={text}>
              {text}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default memo(FooterCities);
