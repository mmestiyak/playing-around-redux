import actionTypes from './shoppingActionTypes';

export const addItem = (itemId) => (dispatch) =>
  dispatch({
    type: actionTypes.ADD_ITEM,
    payload: {
      itemId,
    },
  });

export const removeItem = (itemId) => (dispatch) =>
  dispatch({
    type: actionTypes.REMOVE_iTEM,
    payload: {
      itemId,
    },
  });

export const adjustQuantity = (itemId, adjustedQuantity) => (dispatch) =>
  dispatch({
    type: actionTypes.ADDJUST_QUANTITY,
    payload: {
      itemId,
      adjustedQuantity,
    },
  });
