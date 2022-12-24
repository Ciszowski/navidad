import {useSelector , useDispatch} from 'react-redux';

const useStore = () =>
{
    const storeData = useSelector((state)=>({
        motdepasse : state.motdepasse,
        isConnected: state.isConnected,
        isOpen: state.isOpen,
        tryPass: state.tryPass,
        playing: state.playing
    }))

    const dispatch = useDispatch();

    return [storeData, dispatch];
}
export default useStore;