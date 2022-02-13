import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './footerContacts.less';
import { ReactComponent as GooglePlayIcon } from '../../../../../../svg/google-play-btn.svg';
import { ReactComponent as AppStoreIcon } from '../../../../../../svg/app-store-btn.svg';

interface Props {}

function FooterContacts(props: Props) {
  const {} = props;

  return (
    <div className='col-sm'>
      <div className='footer-bottom__title footer-bottom__title--contacts'>Контакты</div>
      <div className='footer-nav footer-nav--contacts'>
        <ul>
          <li>
            <a href='tel:' title='8 800 555-57-08'>
              8 800 555-57-08
            </a>
          </li>
          <li>
            <a href='mailto:' title=''>
              support@google.com
            </a>
          </li>
        </ul>
      </div>
      <div className='footer-app d-flex align-items-center justify-content-end'>
        <div className='footer-app__link  '>
          <Link
            to='https://app.adjust.com/e0ifxiw?deep_link=broniboy%3A%2F%2Fapp&is_organic=1&fallback=https://play.google.com/store/apps/details?id=com.broniboy.client&redirect_macos=https://play.google.com/store/apps/details?id=com.broniboy.client'
            className='app-btn__link--item'
            title='Broniboy'
          >
            <GooglePlayIcon />
          </Link>
        </div>
        <div className='footer-app__link '>
          <Link
            to='https://app.adjust.com/e0ifxiw?deep_link=broniboy%3A%2F%2Fapp&is_organic=1&fallback=https://itunes.apple.com/app/id1262921130&redirect_macos=https://itunes.apple.com/app/id1262921130'
            className='app-btn__link--item'
            title='Broniboy'
          >
            <AppStoreIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default memo(FooterContacts);
