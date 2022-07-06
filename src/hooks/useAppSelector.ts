/*node-modules*/
import {useSelector} from 'react-redux';

/*store*/
import {RootState} from '../store';

export function useAppSelector<T>(selector: (state: RootState, arg?: any) => T, arg?: any): T {
    return useSelector((state: RootState) => selector(state, arg));
}