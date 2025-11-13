import { Counter } from '../../../counter/counter';

import cn from './review-form.module.css';
import { Button } from '../../../button/button';
import { useForm } from './use-form';

export const ReviewForm = ({
  className,
  onSubmit,
  initialValue,
  title,
  isSubmitLoading,
}) => {
  const { form, setText, setRating, clearForm } = useForm({ initialValue });
  const { text, rating } = form;
  return (
    <div className={className}>
      <div className={cn.header}>
        <h4 className={cn.headerTitle}>{title}</h4>
      </div>
      <form
        className={cn.form}
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
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
          disabled={isSubmitLoading}
          className={cn.button}
          onClick={() => onSubmit(form)}
          title={'Отправить'}
        />
      </form>
    </div>
  );
};
