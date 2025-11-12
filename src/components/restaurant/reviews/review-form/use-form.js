import { useReducer } from 'react';

export const FORM_ACTYON_TYPE = {
  setText: 'SET_TEXT',
  setRating: 'SET_RATING',
  clearForm: 'CLEAR_FORM',
  editReview: 'EDIT_REVIEW',
};

export const DEFAULT_FORM = {
  text: '',
  rating: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
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
        ...DEFAULT_FORM,
      };
    case FORM_ACTYON_TYPE.editReview:
      console.log('review-form.jsx 43 >>> action.payload:', action.payload);
      return {
        ...action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export const useForm = ({ initialValue }) => {
  const [form, dispatch] = useReducer(reducer, initialValue ?? DEFAULT_FORM);

  const setText = (text) => {
    dispatch({ type: FORM_ACTYON_TYPE.setText, payload: text });
  };
  const setRating = (rating) => {
    dispatch({ type: FORM_ACTYON_TYPE.setRating, payload: rating });
  };
  const clearForm = () => {
    dispatch({ type: FORM_ACTYON_TYPE.clearForm });
  };

  return {
    form,
    setText,
    setRating,
    clearForm,
  };
};
