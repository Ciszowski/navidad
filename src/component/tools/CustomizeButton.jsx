import styled from '@emotion/styled';
import { Button } from '@mui/material';
import React from 'react'
import { useDispatch } from "react-redux";
import { DIALOG } from '../../Reducer/constants/enums';

const CustomButtons = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: '1.5vw',
    padding: '14px 18px',
    border: '5px solid',
    lineHeight: 1.3,
    backgroundColor: '#800D0B',
    borderColor: '#550403',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#550403',
      borderColor: '#D60C07',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#D60C07',
      borderColor: '#550403',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem #800D0B',
    },
  })
  

export default function CustomizedButtons(props) {
    const dispatch = useDispatch()
    const openDialog = () => (dispatch({ type: DIALOG }));
    return (
      <CustomButtons variant="contained" disableRipple  sx={{fontSize : 'calc(1vw + 4px)'}} onClick={openDialog}>
            {props.text}
      </CustomButtons>
    )
  }