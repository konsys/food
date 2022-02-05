import React, { memo } from 'react';

export interface MenuLink {
  text: string;
  link: string;
}

interface Props {
  title: string;
  links: MenuLink[];
}

function FooterMenu(props: Props) {
  const { title, links } = props;

  return (
    <>
      <div className='footer-bottom__title'>{title}</div>
      <div className='footer-nav'>
        <ul className='list-clear'>
          {links.map(({ link, text }) => (
            <li>
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

export default memo(FooterMenu);
