/*node-modules*/
import {useDispatch} from 'react-redux';

/*store*/
import {AppDispatch} from '../store';

export const useAppDispatch = () => useDispatch<AppDispatch>();