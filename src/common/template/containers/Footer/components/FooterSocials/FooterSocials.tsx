import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as BoyIcon } from '../../../../../../svg/boy.svg';
import { ReactComponent as VkIcon } from '../../../../../../svg/vk.svg';
import { ReactComponent as OkIcon } from '../../../../../../svg/ok.svg';
import { ReactComponent as FacebookIcon } from '../../../../../../svg/facebook.svg';
import { ReactComponent as InstaIcon } from '../../../../../../svg/insta.svg';
import './footerSocials.less';

export const FooterSocials = () => (
  <div className='col-sm social-links'>
    <div className='d-flex'>
      <Link to='https://broniboy.ru' title='Главная' className='social-links__logo-link'>
        <BoyIcon className='social-links__logo ' />
        <div className='social-links__description'>Принимаем заказы с 09:00 до 23:30</div>
      </Link>
    </div>
    <div className='social-links__items d-flex'>
      <div className='social-links__item'>
        <Link to='https://www.facebook.com/broniboy.world/' rel='nofollow' title='Facebook'>
          <FacebookIcon className='social-links__facebook-logo' />
        </Link>
      </div>
      <div className='social-links__item'>
        <Link to='https://vk.com/broniboy' rel='nofollow' title='Вконтакте'>
          <VkIcon className='social-links__vk-logo' />
        </Link>
      </div>
      <div className='social-links__item'>
        <Link to='https://ok.ru/group/54843064713450' rel='nofollow' title='Одноклассники'>
          <OkIcon className='social-links__ok-logo' />
        </Link>
      </div>
      <div className='social-links__item'>
        <Link to='https://instagram.com/broniboy/' rel='nofollow' title='Instagram'>
          <InstaIcon className='social-links__insta-logo' />
        </Link>
      </div>
    </div>
  </div>
);
