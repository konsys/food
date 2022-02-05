import React, { memo } from 'react';
import { MenuLink } from '../FooterMenu/FooterMenu';

interface Props {
  title: string;
  links: MenuLink[];
}

function FooterCities(props: Props) {
  const { title, links } = props;

  return (
    <>
      <div className='footer-bottom__title'>{title}</div>
      <div className='footer-nav'>
        <ul className='list-clear'>
          {links.map(({ link, text }) => (
            <li style={{ display: 'inline', paddingRight: '20px' }}>
              <a href={link} title={text}>
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default memo(FooterCities);
