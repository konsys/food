import React from 'react';
import { ReactComponent as BoyIcon } from '../../svg/facebook.svg';
import { ReactComponent as VkIcon } from '../../svg/vk.svg';
import { ReactComponent as OkIcon } from '../../svg/ok.svg';
import { ReactComponent as InstaIcon } from '../../svg/insta.svg';

export const FooterSocials = () => (
  <div className='col-sm'>
    <a href='https://broniboy.ru' title='Главная' className='logo'>
      <div className='logo__description'>Принимаем заказы с 09:00 до 23:30</div>
    </a>
    <ul className='social-links'>
      <li data-actor-socialnetwork='Facebook'>
        <a href='https://www.facebook.com/broniboy.world/' rel='nofollow' title='Facebook'>
          <BoyIcon className='social-links__facebook-logo' />
        </a>
      </li>
      <li data-actor-socialnetwork='Вконтакте'>
        <a href='https://vk.com/broniboy' rel='nofollow' title='Вконтакте'>
          <VkIcon className='social-links__vk-logo' />
        </a>
      </li>
      <li data-actor-socialnetwork='Одноклассники'>
        <a href='https://ok.ru/group/54843064713450' rel='nofollow' title='Одноклассники'>
          <OkIcon className='social-links__ok-logo' />
        </a>
      </li>
      <li data-actor-socialnetwork='Instagram'>
        <a href='https://instagram.com/broniboy/' rel='nofollow' title='Instagram'>
          <InstaIcon className='social-links__insta-logo' />
        </a>
      </li>
    </ul>
  </div>
);
