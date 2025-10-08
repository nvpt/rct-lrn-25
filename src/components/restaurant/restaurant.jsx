import { Counter } from '../counter/counter';

export const Restaurant = ({ restaurant }) => {
  const { menu, reviews, name } = restaurant;
  return (
    <div>
      <h2> Ресторан "{name}"</h2>
      <Counter />
      <h3> Меню</h3>
      <ul>
        {menu.map((dish) => {
          return <li key={dish.id}>{dish.name}</li>;
        })}
      </ul>
      <h3>Отзывы</h3>
      <ul>
        {reviews.map((review) => {
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
};
