import React, { memo } from 'react';
import RestarauntItem from '../RestarauntItem/RestarauntItem';

interface Props {}

function RestarauntsList(props: Props) {
  const {} = props;

  return (
    <section className='restaurants'>
      <div className='container'>
        <header>
          <div className='restaurants-header-title restaurants-header-title--home-page'>
            <div className='page-title'>
              <h2>Самые популярные места</h2>
            </div>
          </div>
        </header>
        <div className='restaurants-body'>
          <div className='row'>
            {new Array(9).fill(3).map(() => (
              <RestarauntItem />
            ))}
          </div>
          <noscript />
        </div>
        <a
          href='https://broniboy.ru/nn/restaurants/'
          title='Посмотреть все рестораны'
          data-actor='watch-all-restaurants-btn'
          className='peach-btn peach-btn--category'
        >
          Посмотреть все рестораны
        </a>
      </div>
    </section>
  );
}

export default memo(RestarauntsList);
