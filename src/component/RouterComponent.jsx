import React,{useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { PLAYING } from '../Reducer/constants/enums';
import useStore from '../Reducer/useStore';
import Acceuil from './main/Acceuil'
import Regalo from './regalo/Regalo'
import NoPage from './tools/NoPage';


function RouterComponent(props)
{
    const [store] = useStore();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        function getTheGift()
        {
            if(store.isConnected)
            {
                dispatch({type: PLAYING, payload: false})
                navigate('/regalo');
            }
            
        }
        getTheGift();
    },[store.isConnected, dispatch,navigate])

    return(
        <React.Fragment>
                <Routes>
                    <Route path='/' element={<Acceuil/>} />
                    <Route path='/regalo' element={<Regalo/>} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
        </React.Fragment>
    )
}
export default RouterComponent;
