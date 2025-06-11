import { USERS } from '../actions';

import { usersStore } from '../store';


export function usersReducer(store = usersStore, action) {
    const { users } = store;
    const { type } = action;

    console.log(users);

    switch (type) {
        case USERS:
            return {
              ...store,
              users: action.payload
            };
        default: return store
    }
}
