import React,{useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { PLAYING } from '../Reducer/constants/enums';
import Acceuil from './main/Acceuil'
import Regalo from './regalo/Regalo'
import NoPage from './tools/NoPage';

function RouterComponent(props)
{
    const isConnected = useSelector((state) => state.isConnected)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        function getTheGift()
        {
            if(isConnected)
            {
                dispatch({type: PLAYING, payload: false})
                navigate('/regalo');
            }
            
        }
        getTheGift();
    },[isConnected])

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
