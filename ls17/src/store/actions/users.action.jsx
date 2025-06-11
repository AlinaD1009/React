import { USERS } from "../actions";
import { getAllUsers } from '../../api/users.service';

export const getUsers = () => ({
  type: USERS,
});

export const fetchUsers = () => (dispatch) => {
  getAllUsers()
    .then(users => {
      console.log(users);

      dispatch({
        type: USERS,
        payload: users,
      });
    })
    .catch(error => {
      console.error("Ошибка загрузки пользователей:", error);
    });
};
