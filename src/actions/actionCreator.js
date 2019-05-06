import ACTION from './actiontsTypes';

export const updateBasket = () => ({
  type: ACTION.BASKET_UPDATE,
});

export const removeInBasket = (id, size) => ({
  type: ACTION.BASKET_REMOVE,
  id,
  size,
});

export const pushInBasket = (product) => ({
  type: ACTION.BASKET_PUSH,
  product
});

export const updateBasketItemCount = (count, id, size) => ({
  type: ACTION.BASKET_UPDATE_ITEM_COUNT,
  count, id, size
});

export const isBasketSubmit = () => ({
  type: ACTION.BASKET_IS_SUBMIT
});

export const setConfirmation = (value) => ({
  type: ACTION.SET_BASKET_CONFIRMATION,
  value
});

export const clearBasket = () => ({
  type: ACTION.BASKET_CLEAR
});

export const thanksOn = () => ({
  type: ACTION.CONTACT_FORM_THANKS_ON
});

export const thanksOff = () => ({
  type: ACTION.CONTACT_FORM_THANKS_OFF
});

export const fetchingOn = () => ({
  type: ACTION.CONTACT_FORM_FETCHING_ON
});

export const fetchingOff = () => ({
  type: ACTION.CONTACT_FORM_FETCHING_OFF
});
