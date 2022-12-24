import { IconButton } from "@mui/material";
import React, { useState, useEffect } from 'react';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import PauseIcon from '@mui/icons-material/Pause';
import { useDispatch, useSelector } from "react-redux";
import { PLAYING } from "../../Reducer/constants/enums";
    
const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const dispatch = useDispatch();
    const playing = useSelector((state) => state.playing);
    
    const toggle = () => dispatch({type: PLAYING, payload: !playing});

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    }, [playing,audio]);
    
    useEffect(() => {
        audio.addEventListener('ended', () => dispatch({type: PLAYING, payload: false}));
        return () => {
          audio.removeEventListener('ended', () => dispatch({type: PLAYING, payload: false}));
        };
    }, [audio,dispatch]);
    
      return [playing, toggle];
    };
    
    const Player = ({ url }) => {
      const [playing, toggle] = useAudio(url);
      return (
        <IconButton sx={{position: 'relative'}} onClick={toggle} >
            {playing ?
                <PauseIcon sx={{color:'#800D0B', backgroundColor: '#000',fontSize: '7vw'}}/>
                :
                <PlayCircleFilledWhiteIcon sx={{color:'#800D0B', backgroundColor: '#000',fontSize: '7vw'}}/>
            }
        </IconButton>
      );
    };
    
    export default Player;