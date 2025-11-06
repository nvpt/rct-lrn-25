import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectStatus } from '../entities/request/request-slice';

export const useRequest = (thunk, params) => {
  const [request, setRequest] = useState(null);
  const dispatch = useDispatch();
  const requestStatus = useSelector((state) =>
    selectStatus(state, request?.requestId)
  );

  useEffect(() => {
    const request = dispatch(thunk(params));
    setRequest(request);

    return () => {
      // в какой момент это отработает? Ведь Хук не имеет своего рендера. Это событие привязано к компоненту, 
      // в котором он вызывается?
      request.abort();
      setRequest(null);
    };
  }, [dispatch, params, thunk]);

  return requestStatus;
};
