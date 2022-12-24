import React from 'react'
import {Card, CardContent, CardMedia, Container, Typography } from '@mui/material';
import DialogComponent from '../tools/Dialog';
import Player from '../tools/Player';
import blackBox from '../../assets/song/black-box-christmas-jingle.mp3';

const styles = {
    imageContainer: {
      height: `calc(95vh + 40px)`,
      backgroundImage: `url(${"/static/images/acceuil.jpg"})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      width: `calc(94vw + 48px)`,
      display: 'flex', 
      justifyContent: 'left'
    },
    card: {
        width: '60%',
        height: '70%',
        alignSelf: 'center',
        opacity: 0.85,
        color: '#fff',
        display: 'flex',
        justifyContent:'center',
        backgroundColor: "#000"
    },
    content:{
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    h1 :{ 
        color: "#d54d7b",
        fontSize: '1.7vw',
        marginTop: "0.3wv",
        textAlign: "center",
        textShadow: '0 1px 1px #fff',
        fontWeight: 700,
        boxShadow: '0 0 0 0.2rem #800D0B',
        paddingTop: '1.5vw', 
        paddingBottom: '1.5vw', 
        border: "0.5vw groove #800D0B"
    },
    text: {
        marginTop: '1.5wv',
        marginBottom: '1.5wv',
        fontSize: "1.3vw",
        fontFamily: "Libre Baskerville",
        textAlign: "center",
        textShadow: "0 1px 1px #fff",
    },
    text2:{ 
        fontFamily: "Libre Baskerville",
        fontStyle: 'italic',
        color: "#B6B6B6",
        fontSize: "1vw",
        textAlign: 'center'
    }
};

function Acceuil()
{
    return(
        <Container style={styles.imageContainer} maxWidth={false}>
            <Card style={styles.card}>
                <CardContent sx={{position:'relative', display: 'flex', flexDirection: 'column'}}>
                    <CardMedia
                        component="img"
                        image="/static/images/santa-claus.png"
                        height="100%"
                        maxwidth='100'
                        sx={{ width: '100%',alignSelf: 'center', objectFit: 'contain'}}
                    />
                    <Player url={blackBox}/>

                </CardContent>
                <CardContent  style={styles.content}>
                    <Typography style={styles.h1}>
                        🌹🌹🌹 Felices Navidad mi Amor 🌹🌹🌹
                    </Typography>
                    <Typography variant="body1" style={styles.text}>
                        Este año, el padre se puso en contacto conmigo para decirme 
                        que estaba preparando un regalo para ti.
                    </Typography>
                    <Typography variant="body1" style={styles.text}>
                        Creo que lo tendra de listo por el 25
                    </Typography>
                    <Typography variant="body2" style={styles.text2}>
                        🙏🏻🥰 Podras verificar su disponibilidad con el buton de abajo🥰🙏🏻
                    </Typography>
                    <CardContent sx={{ textAlign: 'center', fontSize: 'calc(1em + 2vw)'}}>
                      <DialogComponent />
                    </CardContent>
                </CardContent>
            </Card>
        </Container>
    );
}
export default Acceuil;