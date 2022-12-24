import React, {useState, useEffect} from "react";
import { Card, CardActionArea, CardContent, CardMedia, Container, Typography } from '@mui/material';
import { useSelector } from "react-redux";
import { PATHPDF } from "../../Reducer/constants/enums";
import { useNavigate } from "react-router-dom";
import Player from "../tools/Player";
import vacation from '../../assets/song/christmas-vacation-christmas-eve.mp3';

const styles = {
    imageContainer: {
      height: `calc(100vh + 40px)`,
      backgroundImage: `url(${"/static/images/navidad-1.jpg"})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      width: `calc(100vw + 48px)`,
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
        h1 :{ 
            color: "#d54d7b",
            fontSize: "1.5vw",
            marginBottom: "0px",
            marginTop: "0,3vw",
            textAlign: "center",
            textShadow: '0 1px 1px #fff',
            fontWeight: 'bold'
        },
        p : { 
            color: "#7a7c7f",
            fontSize: "1.4vw",
            lineHeight: '4vw',
            fontFamily: "Libre Baskerville",
            textAlign: "center",
            textShadow: "0 1px 1px #fff",
        },
        otherP : 
            { 
                fontFamily: "Libre Baskerville",
                fontStyle: 'italic',
                color: "#B6B6B6",
                fontSize: "1vw",
                paddingTop: "10px"
            }
        },
    typographyContent: [
        "Je voudrais te dire que mon plus beau cadeau ",
        "C'est toi que j'aime, une valeur inestimable intact au temps et à ton image  ",
        "Parce que tu es ma plus belle étoile, ",
        "Tu es mon rayon de soleil dans le froid de l'hiver ",
        "Tu es toi et c'est pour cela que  ",
        "Tu es mon guide dans ma vie,  ",
        "Mon âme sœur et ma vie  ",
        "Pour une famille que je veux avoir toi et être réuni  ",
        "Pour tous les besoins de la vie  ",
        "Mais aussi afin de t'aimer  ",
        "Comme je t'aime à la folie  ",
        "Et comment je t'aimerais pour le reste de ma vie "
    ]
    
};

function Regalo(props)
{
    const isConnected = useSelector((state) => state.isConnected)
    const  [isDownloading, setDownload] = useState(false);
    const navigate = useNavigate();
    
    useEffect(()=>{
        if(!(isConnected))
            navigate('/')
    },[isConnected])



    function onDownloadPDF()
    {
        if (!isDownloading)
        {
            fetch(PATHPDF).then(response => {
                setDownload(true);
                response.blob().then(blob => {
                    // Creating new object of PDF file
                    const fileURL = window.URL.createObjectURL(blob);
                    // Setting various property values
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = "Yo_y_Tu_reunidos";
                    alink.click();
                    setDownload(false);
                })
            })
        }
    }

    return(
        <Container style={styles.imageContainer} maxWidth={false}>
            <Card style={styles.card}>
                <CardContent sx={{height: '100%', width:'50%', display: 'flex', flexDirection: 'column', position: 'relative'}}>
                    <CardMedia
                        component="img"
                        image="/static/images/fleche.png"
                        height="150"
                        sx={{ width: '100%',alignSelf: 'center', objectFit: 'contain'}}
                    />
                    <CardActionArea onClick={event => onDownloadPDF()} sx={{display: 'contents'}}>
                        <CardMedia
                            component="img"
                            image="/static/images/regalo.png"
                            height="100%"
                            sx={{ width: '100%',alignSelf: 'center', objectFit: 'contain'}}
                        />
                    </CardActionArea>
                    <Player url={vacation}/>
                </CardContent>
                <CardContent sx={{width: '100%'}}>
                    <Typography sx={{ textAlign: 'center', paddingTop: 3, paddingBottom: 3, fontSize: '1.8vw', fontWeight: 700, border: "0.5vw groove red" }}>
                        🌹🌹🌹 Felices Navidad mi Amor 🌹🌹🌹
                    </Typography>
                    
                    <CardContent sx={{ overflowY: 'scroll',backgroundColor: "#fff", height: "60%", borderRadius: 40,  marginTop: 3,  textAlign: 'center'}}>
                        <Typography style={styles.content.h1} sx={{fontFamily: "Great Vibes"}}>
                            Mon amour
                        </Typography>
                        {styles.typographyContent.map((texte,idx)=>{
                            return(
                                <Typography style={styles.content.p} key={idx}>
                                    {texte}
                                </Typography>
                            )
                        })}
                        <Typography style={styles.content.otherP}>
                            Joyeux Noël mon Amour - A bientôt proche de toi
                        </Typography>
                    </CardContent> 
                    <Typography sx={{ textAlign: 'center', paddingTop: 1, paddingBottom: 1, fontSize: '1.8vw', fontWeight: 500}}>
                        🌹🌹🌹 Te amo de locura 🌹🌹🌹
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    )
}

export default Regalo;