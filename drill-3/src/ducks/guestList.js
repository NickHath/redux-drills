const initialState = {
  guests: ['Tony Stark', 'Steve Rodgers', ' Nick Fury', 'Natasha Romanova', 'Clint Barton', 'Bruce Banner', 'Wanda Maximoff']
}

const ADD_GUEST = 'ADD_GUEST'
    , DELETE_GUEST = 'DELETE_GUEST';

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_GUEST:
      return Object.assign({}, state, {guests: [...state.guests, action.payload]});
    case DELETE_GUEST:
      return Object.assign({}, state, {guests: state.guests.filter(guest => guest !== action.payload)})
    default:
      return state;
  }
  return state;
}

export function addGuest(guest) {
  return {
    type: ADD_GUEST,
    payload: guest
  }
}

export function deleteGuest(guest) {
  return {
    type: DELETE_GUEST,
    payload: guest
  }
}
