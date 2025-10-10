import { useReducer } from 'react';

const FORM_ACTYON_TYPE = {
  setName: 'SET_NAME',
  setText: 'SET_TEXT',
  setRate: 'SET_RATE',
};

const INITIAL_FORM = {
  name: '',
  text: '',
  rate: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case FORM_ACTYON_TYPE.setName:
      return {
        ...INITIAL_FORM,
        name: action.payload,
      };
    case FORM_ACTYON_TYPE.setText:
      return {
        ...state,
        text: action.payload,
      };
    case FORM_ACTYON_TYPE.setRate:
      return {
        ...state,
        rate: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
export const Reviews = ({ reviews }) => {
  const [form, dispatch] = useReducer(reducer, INITIAL_FORM);
  const { name, text, rate } = form;

  if (!reviews.length) {
    return null;
  }

  const setName = (name) => {
    dispatch({ type: FORM_ACTYON_TYPE.setName, payload: name });
  };
  const setText = (text) => {
    dispatch({ type: FORM_ACTYON_TYPE.setText, payload: text });
  };
  const setRate = (rate) => {
    dispatch({ type: FORM_ACTYON_TYPE.setRate, payload: rate });
  };

  return (
    <div>
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

      <h3>Оставить отзыв</h3>
      <form
        style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div>
          <label htmlFor='name'>Имя</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor='text'>Сообщение</label>
          <textarea
            type='text'
            id='text'
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor='rate'>Оценка</label>
          <input
            type='text'
            id='rate'
            value={rate}
            onChange={(event) => setRate(event.target.value)}
          />
        </div>
        <button type='text'>Написать</button>
      </form>
    </div>
  );
};
