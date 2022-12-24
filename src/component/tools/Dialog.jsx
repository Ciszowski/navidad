import React, {useState, useEffect} from 'react'
import { Button, Dialog, DialogContent, DialogTitle, FormControl,IconButton,Slide, Stack, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import CustomizedButtons from './CustomizeButton';
import { DIALOG, RESETPASS, SECRET } from '../../Reducer/constants/enums';
import CloseIcon from '@mui/icons-material/Close';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
})
  
const styles = {
    formControl: {
        width: '98%', 
        alignSelf: 'center',
        color: '#800D0B',
        display: 'flex'
    },
    button: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: '1.5vw',
        marginTop: '0.75vw',
        padding: '14px 19px',
        border: '5px solid',
        alignSelf: 'flex-end',
        lineHeight: 1.3,
        backgroundColor: '#800D0B',
        borderColor: '#550403',
    },
    dialog:{
        color: '#e6827b',
        backgroundColor:"#181a1b",
        display:'flex',
        flexDirection: 'column',
        border: '5px solid #550403',
        boxShadow: '0 0 0 0.2rem #800D0B',
        paddingBottom: 5
    },
    iconBtn:{
        position: 'absolute',
        right: 15,
        top: 5
    }
}


function DialogComponent(props)
{
    const dispatch = useDispatch();
    const state = useSelector((state) => ({
        isOpen: state.isOpen,
        isConnected: state.isConnected,
        tryPass: state.tryPass
    }));
    const [password, setPass] = useState('');
    
    useEffect(()=>{
        if(!(state.isOpen))
            setPass('');
    },[state.isOpen])

    const handleChange= (ev) =>
    {   
        if(!(password))
            dispatch({type: RESETPASS});
        setPass(ev.target.value)
    }

    const checkPassword = () =>
    {   
        dispatch({type: SECRET, payload: password});
    }
    return(
        <div>
            <Stack direction="row" sx={{m : 'auto', width: '60%', padding: 2}}>
                <CustomizedButtons text="👉🏻 click aqui 👈🏻" />
            </Stack>
            <Dialog
                open={state.isOpen}
                TransitionComponent={Transition}
                keepMounted
                fullWidth={true}
            >
                <DialogContent style={styles.dialog}>
                    <IconButton
                        edge="end"
                        style={styles.iconBtn}
                        onClick={()=> dispatch({ type: DIALOG })}
                        aria-label="close"
                    >
                        <CloseIcon sx={{color: '#e6827b', fontSize: 40}} />
                    </IconButton>
                    <DialogTitle sx={{ fontSize: '1.8vw', fontWeight: 'bold', textAlign: 'center', paddingTop: 2, color : '#800D0B'}}>
                        💝Conectate para acceder a tu regalo💝
                    </DialogTitle>
                    <Typography variant="body2" sx={{ textAlign: 'center',padding: '15px 25px 15px 25px',fontSize: '1.3vw' }}>
                        El padre de navidad esta terco y solo te dara la contraseña el 25
                    </Typography>
                    <FormControl variant="standard" style={styles.formControl} >
                        
                        <TextField
                            required
                            error={state.tryPass}
                            variant="filled"
                            color={'secondary'}
                            label="Ingresa la contraseña"
                            onChange={handleChange}
                            sx={{backgroundColor: '#fff', width: '50%', alignSelf: 'center'}}
                            value={password}
                            type="password"
                            helperText={state.tryPass? "Contraseña incorrecta.": ""}
                        />
                        <Button variant="contained" style={styles.button}  onClick={checkPassword}> 
                            Recuperar
                        </Button>
                    </FormControl>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default DialogComponent;