import { useDispatch } from 'react-redux';
import { ActionTypes } from '../state/action';

/**
 * 获取 redux action
 */
export default function useAction() {
    const dispatch = useDispatch();

    return {
        setValue(count: number) {
            dispatch({
                type: ActionTypes.SetValue,
                payload: count,
            });
        },
    };
}
