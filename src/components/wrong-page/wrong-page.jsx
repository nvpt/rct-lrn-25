import { Link } from 'react-router';
import cn from './wrong-page.module.css';

export const WrongPage = ({
  title = 'Страница не найдена',
  linkUrl = '/',
  linkText = 'Вернуться на главную',
}) => {
  return (
    <div className={cn.container}>
      <h3>{title}</h3>
      <Link to={linkUrl} className={cn.link}>
        {linkText}
      </Link>
    </div>
  );
};
