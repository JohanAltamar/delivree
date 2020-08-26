import { useDispatch } from 'react-redux';
import { guestCheckoutUser } from '../redux/actions';
import { neighborhoods } from '../helpers/areas';

export const useHandleFieldChange = (name) => {
  const dispatch = useDispatch();
  return function (event) {
    if (name === 'city') {
      dispatch(
        guestCheckoutUser(
          'neighborhood',
          neighborhoods[event.target.value][0].neighborhood
        )
      );
    }
    dispatch(guestCheckoutUser(name, event.target.value));
  };
};
