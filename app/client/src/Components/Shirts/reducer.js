import {
        GET_SHIRTS,

       } from './actions';

const initialState = {
  shirts: [],
  shirtsLoaded: false,
}

export default function(state = initialState, action) {
  const { type, data } = action;
  switch(type) {
    case 'GET_SHIRTS':
    console.log('reducer')
      return {
        ...state,
        shirtsLoaded: true,
        shirts: data,
      }
    default:
      return state;
  }
}
