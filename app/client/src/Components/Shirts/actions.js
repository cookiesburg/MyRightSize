export const GET_SHIRTS = 'GET_SHIRTS';

export function getShirts() {
  console.log('in action');
  return async function (dispatch) {
    const res = await fetch('http://localhost:3001/api/v1/shirts');
    const shirts = await res.json();
    console.log('return from api');
    return dispatch({
      type: 'GET_SHIRTS',
      data: shirts,
    });
  };
}
