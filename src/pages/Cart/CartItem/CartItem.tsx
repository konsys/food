import React, { memo } from 'react';

interface Props {}

function CartItem(props: Props) {
  const {} = props;

  return (
    <div className='cart-service'>
      <div className='cart-service__title d-flex flex-wrap align-items-center'>
        <button className='cart-service__delete-button' type='button'>
          <svg xmlns='http://www.w3.org/2000/svg' width={12} height={12}>
            <path
              d='M1050.726,397.191a.264.264,0,0,1,0-.384l4.109-4.11a.53.53,0,0,0,0-.767l-.767-.767a.59.59,0,0,0-.383-.164.5.5,0,0,0-.384.164l-4.109,4.11a.265.265,0,0,1-.384,0l-4.109-4.11a.53.53,0,0,0-.767,0l-.767.767a.53.53,0,0,0,0,.767l4.11,4.11a.265.265,0,0,1,0,.384l-4.11,4.11a.53.53,0,0,0,0,.767l.767.767a.53.53,0,0,0,.767,0l4.109-4.109a.264.264,0,0,1,.384,0l2.848,2.848,1.262,1.262a.53.53,0,0,0,.767,0l.767-.767a.53.53,0,0,0,0-.767Z'
              transform='translate(-1043 -391)'
            />
          </svg>
        </button>
        <div className='cart-service__name'>Борано с соусом</div>
        <div className='cart-service__description'>179 г.</div>
      </div>
      <div className='cart-service__addons'>
        МОДИФИКАТОРЫ ОБЩИЕ: В один!!!
        <br />
        МОДИФИКАТОРЫ ОБЩИЕ: Готовить позже!!!
        <br />
        МОДИФИКАТОРЫ ОБЩИЕ: Лед отдельно!!!
        <br />
        СОУСЫ: Соус Ткемали зеленый<strong> (+ 150₽)</strong>
        <br />
      </div>
      <div className='cart-service__bottom'>
        <div className='cart-service__actions'>
          <button
            className='cart-service__count-button cart-service__count-button--minus'
            disabled
            type='button'
          >
            <svg
              width='13'
              height='13'
              viewBox='0 0 13 13'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect x='7' width='13' height='1' transform='rotate(90 7 0)' fill='#F5F5F5' />
              <rect y='6' width='13' height='1' fill='#F37021' />
            </svg>
          </button>
          <input type='text' defaultValue={1} disabled />
          <button className='cart-service__count-button' type='button'>
            <svg
              width='13'
              height='13'
              viewBox='0 0 13 13'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect y='6' width='13' height='1' fill='#F37021' />
              <rect x='7' width='13' height='1' transform='rotate(90 7 0)' fill='#F37021' />
            </svg>
          </button>
        </div>
        <div className='cart-service__price'>
          <span>500</span> ₽
        </div>
      </div>
    </div>
  );
}

export default memo(CartItem);
