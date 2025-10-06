import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { restaurants } from './../public/mock';

const rootElement = document.getElementById('root');

createRoot(document.getElementById('root')).render(
  <>
    <h1>Рестораны</h1>
    <hr />
    <div>
      {restaurants.map((restaurant) => {
        return (
          <div key={restaurant.id}>
            <h2> Ресторан "{rest.name}"</h2>
            <h3> Меню</h3>
            <ul>
              {restaurant.menu.map((dish) => {
                return <li key={dish.id}>{dish.name}</li>;
              })}
            </ul>
            <h3>Отзывы</h3>
            <ul>
              {restaurant.reviews.map((review) => {
                return (
                  <li key={review.id}>
                    <i>
                      {review.user}: {review.text}
                    </i>
                  </li>
                );
              })}
            </ul>
            <br />
            <br />
          </div>
        );
      })}
    </div>
  </>
);
