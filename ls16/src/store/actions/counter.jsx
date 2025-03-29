export const PLUS = 'PLUS';
export const MINUS = 'MINUS';
export const PLUS_TEN = "PLUS_TEN";
export const MINUS_TEN = "MINUS_TEN";
export const DIVIDE_BY_TWO = "DIVIDE_BY_TWO";
export const SET_ZERO = "SET_ZERO";
export const SET_HUNDRED = "SET_HUNDRED";

export const plus = () => ({ type: PLUS });
export const minus = () => ({ type: MINUS });
export const plusTen = () => ({ type: PLUS_TEN });
export const minusTen = () => ({ type: MINUS_TEN });
export const divideByTwo = () => ({ type: DIVIDE_BY_TWO });
export const setZero = () => ({ type: SET_ZERO });
export const setHundred = () => ({ type: SET_HUNDRED });
