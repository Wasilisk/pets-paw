/*node-modules*/
import {useSelector} from 'react-redux';

/*store*/
import {RootState} from '../store';

export function useAppSelector<T>(selector: (state: RootState) => T): T {
    return useSelector(selector)
}