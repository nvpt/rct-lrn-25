import { useReducer } from 'react';
import { Counter } from '../../../counter/counter';

import cn from './review-form.module.css';
import { Button } from '../../../button/button';

const FORM_ACTYON_TYPE = {
  setName: 'SET_NAME',
  setText: 'SET_TEXT',
  setRating: 'SET_RATING',
  clearForm: 'CLEAR_FORM',
};

const INITIAL_FORM = {
  name: '',
  text: '',
  rating: 0,
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
    case FORM_ACTYON_TYPE.setRating:
      return {
        ...state,
        rating: action.payload,
      };
    case FORM_ACTYON_TYPE.clearForm:
      return {
        ...INITIAL_FORM,
      };
    default:
      return {
        ...state,
      };
  }
};

export const ReviewForm = ({ className }) => {
  const [form, dispatch] = useReducer(reducer, INITIAL_FORM);
  const { name, text, rating } = form;

  const setName = (name) => {
    dispatch({ type: FORM_ACTYON_TYPE.setName, payload: name });
  };
  const setText = (text) => {
    dispatch({ type: FORM_ACTYON_TYPE.setText, payload: text });
  };
  const setRating = (rating) => {
    dispatch({ type: FORM_ACTYON_TYPE.setRating, payload: rating });
  };
  const clearForm = () => {
    dispatch({ type: FORM_ACTYON_TYPE.clearForm });
  };

  return (
    <div className={className}>
      <h4>Оставить отзыв:</h4>
      <form
        className={cn.form}
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className={cn.formField}>
          <label htmlFor='name'>Имя</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className={cn.formField}>
          <label htmlFor='text'>Сообщение</label>
          <textarea
            type='text'
            id='text'
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </div>
        <div className={cn.formFieldCounter}>
          <label htmlFor='rating'>Оценка</label>
          <Counter
            value={rating}
            increment={() => setRating(rating + 1)}
            decrement={() => setRating(rating - 1)}
          />
        </div>
        <Button
          className={cn.button}
          title={'Очистить форму'}
          onClick={clearForm}
        />
        <Button
          className={cn.button}
          title={'Отправить'}
        />
      </form>
    </div>
  );
};
