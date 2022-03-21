import React, { memo } from 'react';

interface Props {}

function AddressCheckoutForm(props: Props) {
  const {} = props;

  return (
    <div className='ordering-form__address address ordering-form__item--disabled'>
      <div className='address__title'>
        <span>Мои адреса</span>
        <button className='address__update-button' disabled type='button'>
          <svg
            width={12}
            height={12}
            viewBox='0 0 12 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect y='5.53845' width={12} height='0.923077' fill='#F37021' />
            <rect
              x='6.46155'
              width={12}
              height='0.923077'
              transform='rotate(90 6.46155 0)'
              fill='#F37021'
            />
          </svg>
          Добавить новый адрес
        </button>
      </div>
      <ul className='custom-input-buttons address__list' data-validate-address />
    </div>
  );
}

export default memo(AddressCheckoutForm);
