import React, { memo } from 'react';

interface Props {}

function FooterContacts(props: Props) {
  const {} = props;

  return (
    <div className='col-sm'>
      <div className='footer-bottom__title footer-bottom__title--contacts'>Контакты</div>
      <div className='footer-nav footer-nav--contacts'>
        <ul className='list-clear'>
          <li data-actor='footer-number'>
            <a href='tel:88005555708' title='8 800 555-57-08'>
              8 800 555-57-08
            </a>
          </li>
          <li data-actor='footer-email'>
            <a href='mailto:support@broniboy.ru' title='support@broniboy.ru'>
              support@broniboy .ru
            </a>
          </li>
        </ul>
      </div>
      <div className='footer-app'>
        <a
          href='https://app.adjust.com/e0ifxiw?deep_link=broniboy%3A%2F%2Fapp&is_organic=1&fallback=https://play.google.com/store/apps/details?id=com.broniboy.client&redirect_macos=https://play.google.com/store/apps/details?id=com.broniboy.client'
          className='app-btn app-btn_google-play'
          title='Broniboy'
          data-analytic='InstallApplication_Google_GoTo'
          data-os='Android'
        />
        <a
          href='https://app.adjust.com/e0ifxiw?deep_link=broniboy%3A%2F%2Fapp&is_organic=1&fallback=https://itunes.apple.com/app/id1262921130&redirect_macos=https://itunes.apple.com/app/id1262921130'
          className='app-btn app-btn_app-store'
          title='Broniboy'
          data-analytic='InstallApplication_Apple_GoTo'
          data-os='IOS'
        />
      </div>
    </div>
  );
}

export default memo(FooterContacts);
