import { MIN, ADD, ZERO } from "../actions";

import { counterStore } from "../store";

export function countReducer(store = counterStore, action) {
    const {count} = store;
    const {type} = action;

    switch (type) {
        case ADD : return {...store, count: count + 1};
        case MIN : return {...store, count: count - 1};
        case ZERO : return {...store, count: 0 };
        default: return store

    }
}