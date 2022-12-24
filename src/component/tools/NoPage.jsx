import React from "react";
import { Card  } from '@mui/material';
const styles = {
 imageContainer: {
   height: `calc(100vh + 40px)`,
   backgroundImage: `url(${"/static/images/404-no-page.jpg"})`,
   backgroundSize: 'contain',
   backgroundPosition: 'center',
   backgroundRepeat: 'no-repeat',
   width: `calc(100vw + 48px)`,
   margin: 0,
   padding: 24,
 }
};
 
function NoPage(props)
{
    return(      
        <Card
            style={styles.imageContainer}
        />
    )
}

export default NoPage;